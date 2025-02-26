import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { Camera, CameraOff } from 'lucide-react';

function App() {
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [expressions, setExpressions] = useState<faceapi.FaceExpressions | null>(null);
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.load('/models');
        await faceapi.nets.faceLandmark68Net.load('/models');
        await faceapi.nets.faceRecognitionNet.load('/models');
        await faceapi.nets.faceExpressionNet.load('/models');
        
        setIsModelLoading(false);
        setLoadingError(null);
      } catch (error) {
        console.error('Error loading models:', error);
        setLoadingError('Failed to load AI models. Please refresh the page to try again.');
        setIsModelLoading(false);
      }
    };

    loadModels();
  }, []);

  const handleStream = async () => {
    if (!webcamRef.current?.video || !canvasRef.current) return;

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    const context = canvas.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, detections);
      faceapi.draw.drawFaceLandmarks(canvas, detections);
    }

    // Update expressions if a face is detected
    if (detections.length > 0) {
      setExpressions(detections[0].expressions);
    } else {
      setExpressions(null);
    }

    if (isCameraOn) {
      requestAnimationFrame(handleStream);
    }
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
    if (!isCameraOn) {
      setExpressions(null);
    }
  };

  useEffect(() => {
    if (isCameraOn && !isModelLoading && !loadingError) {
      handleStream();
    }
  }, [isCameraOn]);

  const getTopExpression = () => {
    if (!expressions) return null;
    return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const formatExpression = (expression: string) => {
    return expression.charAt(0).toUpperCase() + expression.slice(1);
  };

  const getExpressionColor = (confidence: number) => {
    if (confidence > 0.8) return 'bg-green-500';
    if (confidence > 0.5) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">EmotiCode</h1>
          <p className="text-gray-400">
            {isModelLoading 
              ? 'Loading AI models...' 
              : loadingError 
                ? loadingError
                : 'Real-time face detection and expression analysis'}
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-gray-800 shadow-xl">
          {isCameraOn && !loadingError && (
            <>
              <Webcam
                ref={webcamRef}
                mirrored
                className="w-full"
                onPlay={handleStream}
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
              />
              {expressions && (
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Current Expression: {formatExpression(getTopExpression() || '')}
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(expressions).map(([expression, confidence]) => (
                      <div key={expression} className="flex items-center">
                        <span className="w-24">{formatExpression(expression)}:</span>
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getExpressionColor(confidence)} transition-all`}
                            style={{ width: `${confidence * 100}%` }}
                          />
                        </div>
                        <span className="ml-2 w-12 text-right">
                          {(confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          
          {(!isCameraOn || loadingError) && (
            <div className="aspect-video bg-gray-700 flex items-center justify-center">
              <p className="text-gray-400">
                {loadingError ? 'AI models failed to load' : 'Camera is turned off'}
              </p>
            </div>
          )}

          <button
            onClick={toggleCamera}
            disabled={isModelLoading || !!loadingError}
            className={`absolute bottom-4 right-4 p-3 rounded-full 
              ${(isModelLoading || loadingError)
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'} 
              transition-colors`}
          >
            {isCameraOn ? (
              <CameraOff className="w-6 h-6" />
            ) : (
              <Camera className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>This app uses TinyFaceDetector model for efficient face detection</p>
          <p>and can recognize facial expressions in real-time.</p>
          <p>&copy; 2025 All Rights are Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
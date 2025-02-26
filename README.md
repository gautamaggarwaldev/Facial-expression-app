# Face Expression Analyzer

## Description
Face Expression Analyzer is a real-time facial expression analysis web application built with TypeScript. This application captures facial expressions using a device camera and represents the detected emotions as percentage bars. By leveraging advanced face expression models, the app provides accurate and responsive feedback on facial emotions. This tool can be used for various applications, including emotion tracking, AI-based mood analysis, and enhancing user interaction through facial expression recognition.

## Features
- **Real-Time Face Detection:** The app uses a live video stream from the user’s device camera to detect faces and analyze expressions instantly.
- **Facial Expression Analysis:** The model identifies different emotions such as happiness, sadness, anger, surprise, fear, disgust, and neutral expression.
- **Graphical Representation:** Expressions are displayed in an intuitive bar chart format, allowing users to see emotion intensity in percentage values.
- **Accurate Face Landmarking:** The system maps key facial landmarks to improve accuracy in detecting expressions.
- **Optimized Performance:** Built using TypeScript and Vite for a fast and responsive experience.
- **Modular Architecture:** The application follows a well-structured design to enable scalability and easy maintenance.

## Technologies Used
- **TypeScript:** Provides type safety and enhances development efficiency.
- **React.js:** Frontend library used for building interactive UI components.
- **face-api.js:** Handles face recognition, landmark detection, and expression analysis.
- **Vite:** Ensures a fast development server and efficient build process.

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (LTS version recommended)
- **npm or yarn** (package manager)

### Steps to Install
1. Clone the repository:
   ```sh
   git clone https://github.com/gautamaggarwaldev/Facial-expression-app.git && cd face-recognition-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in a web browser and allow camera access when prompted.
5. The application will detect your face and analyze your expressions in real time.

## How It Works
1. **Camera Access:** Upon launching, the app requests permission to use the device camera.
2. **Face Detection:** The model identifies faces within the camera frame.
3. **Expression Analysis:** Detected faces undergo emotion classification, with results displayed as percentage bars.
4. **Real-Time Updates:** As facial expressions change, the bar chart updates dynamically to reflect the latest analysis.

## Folder Structure
```
PROJECT
│-- .git (Version control)
│-- node_modules (Dependencies)
│-- public
│   ├── models (Face recognition models)
│-- src
│   ├── App.tsx (Main application component)
│   ├── index.css (Global styles)
│   ├── main.tsx (Application entry point)
│   ├── vite-env.d.ts (TypeScript environment settings)
│-- index.html (Main HTML file)
│-- package.json (Project metadata and dependencies)
│-- .gitignore (Ignored files configuration)
│-- eslint.config.js (Linting rules)
│-- package-lock.json (Dependency tree)
```

## Usage
1. Open the application in a browser.
2. Grant camera permissions when prompted.
3. The app will detect and analyze facial expressions in real time.
4. The detected emotions will be displayed using a bar chart.
5. Experiment with different facial expressions and observe real-time updates.

## Application Use Cases
- **AI-Based Emotion Analysis:** Can be integrated into AI systems that analyze user emotions for better human-computer interactions.
- **Mental Health Monitoring:** Assists in tracking emotional well-being over time.
- **Gaming & Entertainment:** Can be used in gaming applications to respond dynamically to player emotions.
- **Customer Experience Enhancement:** Can be employed in retail and online platforms to assess user reactions.
- **Academic Research:** Useful for studies related to facial expression recognition and AI advancements.

## Dependencies
- **TypeScript**: Ensures type safety and better development experience.
- **React.js**: Provides a robust UI framework.
- **face-api.js**: Handles facial recognition and expression analysis.
- **Vite**: Offers fast builds and a smooth development experience.
- **Chart.js (Optional)**: Can be used to enhance visual representation of expression analysis.

## Screenshot
![Project Screenshot](/public/assets/image1.png)
![Project Screenshot](/public/assets/image2.png)
![Project Screenshot](/public/assets/image3.png)


## Future Enhancements
- **Emotion History Tracking:** Store and analyze past expressions.
- **Multi-Person Detection:** Expand functionality to recognize multiple faces simultaneously.
- **Improved Accuracy:** Fine-tune models for even better recognition.
- **Integration with AI Chatbots:** Enhance chatbot responses based on user emotions.
- **Customizable UI Themes:** Allow users to personalize the interface.

## License
This project is licensed under the MIT License.

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a pull request.


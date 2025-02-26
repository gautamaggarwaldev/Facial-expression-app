```markdown
# Real-time Facial Expression Analyzer Web App

This web application analyzes facial expressions in real-time using the device camera and displays the results as bar percentages for each detected emotion. It utilizes pre-trained face expression models and is built with TypeScript for a robust and maintainable codebase.

## Features

* **Real-time Webcam Analysis:** Analyze facial expressions from your webcam.
* **Percentage-based Results:** Visualize emotion analysis results as bar percentages.
* **TypeScript:** Built with TypeScript for type safety and improved development experience.
* **Face Expression Models:** Uses pre-trained models for accurate emotion detection.

## Technologies Used

* **TypeScript:** Programming language.
* **TensorFlow.js:** For face detection, landmark detection, face recognition, and expression recognition.
* **HTML5/CSS3:** For the user interface.
* **React (or Typescript):** For building the UI components.
* **Vite:** Build tool.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/gautamaggarwaldev/Facial-expression-app.git
    cd facial-expression-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server. Open your browser and navigate to `http://localhost:[port]` (usually 5173).

4.  **Build for production:**

    ```bash
    npm run build # or yarn build
    ```

    This will create a production-ready build in the `dist` or `build` folder.

## Usage

1.  **Webcam Analysis:**
    * Click the "Start Webcam" button.
    * Grant the application permission to access your webcam.
    * Observe the real-time facial expression analysis results.

2.  **Results:**
    * The results are displayed as bar percentages, showing the probability of each detected emotion (e.g., happy, sad, angry, neutral, etc.).

## Screenshots

![image-1](/public/assets/image1.png)
![image-2](/public/assets/image2.png)
![image-3](/public/assets/image3.png)


## Project Structure

```
[your-repository-directory]/
├── public/
│   └── models/
│       ├── face_expression_model.json
│       ├── face_expression_model.weights.bin
│       ├── face_landmark_68_model.json
│       ├── face_landmark_68_model.weights.bin
│       ├── face_recognition_model.json
│       ├── face_recognition_model.weights.bin
│       ├── tiny_face_detector_model.json
│       └── tiny_face_detector_model.weights.bin
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

[Your License] MIT


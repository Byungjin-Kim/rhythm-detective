# 🎵 Rhythm Detective: Rhythm Syntax Task Prototype

This project is a fully functional prototype of a **Rhythm Syntax Task**, developed from scratch following the [ROAR Developer's Guide](https://yeatmanlab.github.io/create-roar-app/).

It demonstrates the integration of auditory stimuli into the ROAR architecture, replacing standard image-based trials with a rhythm discrimination task.

## 🎯 Project Overview

In this task, participants listen to short musical clips and must identify the rhythmic meter of the sound. The goal is to measure the ability to distinguish between varying rhythmic structures across different timbres.

* **Task Type:** Auditory Discrimination (2-Alternative Forced Choice)
* **Stimuli:** 10 Custom-composed audio tracks
* **Framework:** jsPsych 7 + ROAR Architecture

## ✨ Key Features

### 1. Custom Auditory Stimuli
Unlike standard tasks using pre-existing assets, I composed and produced original audio clips to strictly control for variables:
* **Target:** Distinguishing between **3/4 Meter (Waltz)** and **4/4 Meter (March)**.
* **Timbre Variation:** Stimuli are rendered in three different instruments (**Piano, Drums, Clarinet**) to ensure the task measures generalized rhythm perception rather than instrument-specific sound matching.

### 2. Technical Implementation
* **Plugin Adaptation:** Replaced the default image-based logic with `jsPsychAudioKeyboardResponse` to handle audio preloading and playback.
* **Event Handling:** Implemented custom logic mapping `ArrowLeft` (3/4 Meter) and `ArrowRight` (4/4 Meter) for user responses.
* **Data Structure:** Configured `timeline_variables` to log `meter`, `instrument`, and `correct_response` to Firestore-ready data formats.

### 3. Lab-Ready UI/UX
* Applied a distraction-free, "Lab-Look" design using custom CSS.
* Visual feedback and instruction prompts are styled for clarity and accessibility.

## 🛠️ Installation & Usage

To run this experiment locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Byungjin-Kim/rhythm-detective.git](https://github.com/Byungjin-Kim/rhythm-detective.git)
    cd rhythm-detective
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the local server**
    ```bash
    npm start
    ```
    The experiment will be available at `http://localhost:8080`.

## 📂 Project Structure

* `src/index.js`: Main experiment logic and timeline construction.
* `src/loadAssets.js`: Manages audio imports and defines the target/response mapping.
* `src/assets/sounds/`: Contains the 10 custom-generated mp3 files.
* `src/assets/stylesheets/`: Custom CSS for the experiment UI.

---
**Author:** Byungjin Kim
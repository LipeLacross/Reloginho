## 🌐 [Versão em Português do README](README_PT.md)

# Reloginho

Reloginho is an interactive game where the player bets on which "hour" the pointer of a customizable clock will stop. The number of hours on the clock is adjustable, and the more hours the player chooses, the higher the difficulty but also the greater the potential reward.

## 🔨 Project Features

- **Choose the number of hours**: The player can choose between 6, 12, 24, and 60 hours to set up the clock, with different win multipliers for each choice.
- **Bet on a specific hour**: The player selects a specific hour where they believe the pointer will stop.
- **Pointer spin**: The clock’s pointer spins and stops at a random hour, creating suspense and an interactive experience.
- **Outcome and rewards**: If the pointer stops at the chosen hour, the player wins an amount based on the configured clock multiplier.

### Visual Example of the Project

![chrome-capture-2024-10-21](https://github.com/user-attachments/assets/1921c6e5-c613-47bf-a23c-bc1cd2394b06)

## ✔️ Techniques and Technologies Used

- **React**: JavaScript framework for building the interactive interface.
- **Phaser.js**: Library used to create and animate the clock and pointer.
- **Howler.js**: Library for controlling sound effects in the game.
- **Bulma CSS**: CSS framework for responsive styling.
- **HTML5 and CSS3**: Structure and styling of the project.

## 📁 Project Structure

- **public/**
    - **favicon.ico**: Website icon.
    - **index.html**: Main HTML file.
    - **logo192.png** / **logo512.png**: App logos.
    - **lose.mp3**: Sound effect for when the player loses.
    - **manifest.json**: PWA configuration.
    - **robots.txt**: SEO optimization file.
    - **spin.mp3**: Sound effect for the pointer spin.
    - **win.mp3**: Sound effect for when the player wins.
- **src/**
    - **App.css**: General app styles.
    - **App.js**: Main component that controls the game’s logic and interface.
    - **App.test.js**: Tests for the main component.
    - **ClockGame.js**: Component that renders the clock and controls the pointer animation.
    - **index.css**: Global styles importing Bulma CSS.
    - **index.js**: Main entry point for React.
    - **logo.svg**: Logo in SVG format.
    - **reportWebVitals.js**: File to measure the app's performance.
    - **setupTests.js**: Initial setup for testing with Jest.

## 🛠️ Open and Run the Project

To start the project locally, follow the steps below:

1. **Ensure Node.js is installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. You can check if it's installed by running:
      ```bash
      node -v
      ```
    - If it’s not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in your terminal:
      ```bash
      git clone <REPOSITORY_URL>
      ```

3. **Install the dependencies**:
    - Navigate to the project directory and run:
      ```bash
      npm install
      ```

4. **Start the project**:
    - After installation, start the development server with:
      ```bash
      npm start
      ```

The project will be available at `http://localhost:3000`.

## 🌐 Deployment

The project can be easily hosted on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/), which support React projects and offer simple integration with Git repositories.

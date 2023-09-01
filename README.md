AppMobileChurch Front-end

Introduction
AppMobileChurch is a React Native mobile application aimed to provide members of the church with an interactive and user-friendly experience. The application features Bible content, event schedules, and more.

Installation
To install the project locally, make sure you have Node.js and React Native CLI installed. Run the following commands:


git clone https://github.com/JonathanHoward86/AppMobileChurch/tree/main
cd AppMobileChurch
npm install
npm start

Dependencies
React Native
axios
react-navigation

Install these using npm:
npm install react-native axios react-navigation

Code Structure
api: The api.js file contains configurations for axios to interact with the backend.
api.js - Base configurations for API calls using Axios.

components: This directory contains reusable UI components.
LoginButton.js - Button that navigates to the Login screen.

screens: Contains the screens for the application's different features.
BibleScreen.js - Shows options related to Bible content.
BlackFrameDetailsScreen.js - Shows details in a black frame.
EventsScreen.js - Placeholder for calendar and events.
LandingScreen.js - The landing page with navigation options.
LoginScreen.js - For user authentication.
RedFrameDetailsScreen.js - Shows details in a red frame.
RegisterScreen.js - For new users to register.
SermonsScreen.js - For viewing older sermons.

Acknowledgments

The code in this repository was created with assistance from Chat GPT by Jonathan Howard, an aspiring software developer with expertise in Agile Software Development and proficiency in various programming languages.

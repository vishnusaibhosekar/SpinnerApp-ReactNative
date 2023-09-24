# Random Name Spinner

This is a React Native application that allows you to add names to a list and spin a pie chart to randomly select a name from the list. It uses the `victory-native` library to create an animated pie chart.

![spinner](https://user-images.githubusercontent.com/85636187/270185092-039905aa-00a0-46f9-a03b-7f30354777ab.gif)

## Features

- Add names to a list.
- Spin the pie chart to randomly select a name.
- Reset the list of names.
- Visual feedback with colorful pie chart slices.
- Pointer indicating the selected name.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Expo CLI: You can install it globally using npm:

```bash
npm install -g expo-cli
```

## Installation

Clone the repository to your local machine.


Navigate to the project directory:
```bash    
cd random-name-spinner
```

Install the project dependencies:
```bash
npm install
```

Running the App
To start the development server and run the app on your local machine, use the following command:

```bash
expo start
```

This will open the Expo development tools in your default web browser. You can run the app on an Android or iOS simulator, or on a physical device using the Expo Go app.

## Usage
Enter a name in the input field and click "Add Name" to add it to the list.  
Click "Spin" to spin the pie chart and randomly select a name.  
Click "Reset" to clear the list of names.  
The selected name will be indicated by a pointer on the pie chart.

## Customization
You can customize the number of distinct colors generated for the pie chart by changing the generateDistinctColors function in the code.

## Acknowledgments
This app uses the victory-native library for creating the animated pie chart.
Inspired by the need for a fun and random name picker for party games like Truth or Dare.

## Author
### Vishnu Sai Bhosekar

##
Feel free to contribute to the project and make it even better!

Enjoy spinning and selecting random names! 🎉
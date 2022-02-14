# CYPRESS Yemeksepeti Automation Case
This respository contains Cypress + JavaScript Test Automation Project

This is an automation project for doing web automation testing with (https://www.cypress.io/). This project tests some of the functionalities of the [ys](https://www.yemeksepeti.com) web application.

## Tools Used
* Cypress
* JavaScript
* Mocha Reporter

## Prerequisites
This case requires the following softwares to run.
* Node.js v17.5.0 (It version greater than 8 should be used.)
* Visual Studio Code `brew install --cask visual-studio-code`
* After open projects VS Code, then run on project's repo
  Cypress version 3 : `npm install cypress@3 --global`
  For create package.json `npm init -y`
* Chrome version 98 (Make sure Chrome is installed in your machine and [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) is in PATH.)

## Project Architecture
* specs folder: I created two spec files, Login and FavoriteRestaurant, inside the integration folder
* data.json file: I created data.json file inside the fixtures folder. 
!!! PLEASE ENTER YOUR PASSWORD AND MAIL ADDRESS INSIDE data.json files.
* screenshots folder: I saved the screenshots in the Screenshots folder.
* page-objects folder: 

## Run specs

* The tests are run on Chrome by default.
* You can execute specs as `npx cypress open`


## Report Directory
  * Install cypress-mochawesome-reporter : 
  In Visual Studio Code, Navigate to Terminal type below command. 
  `npm i --save-dev cypress-mochawesome-reporter`

  * Add an Entry to Your cypress.json File : 
  Open the cypress.json file located in the root directory of your project, add the relevant entries.

  * Add an Entry In plugin/index.js:
  Project Root Folder, Navigate to cypress folder > plugin folder > index.js file. Add the below code: 
    `module.exports = (on, config) => {
      require('cypress-mochawesome-reporter/plugin')(on);
    };`

  * Add an Entry In support/index.js:
  Project root folder > Navigate to cypress folder > support folder> index.js file. Add the below code:
  `import 'cypress-mochawesome-reporter/register`


  * Execute Your Test in The Command-Line Using the Below Command:
  You should run this code in terminal.
  `npx run cypress`
    
  * View the Result File:
  Project Root Directory > Navigate to cypress folder > reports folder > index.html file The index.html is your result file, just open in chrome.
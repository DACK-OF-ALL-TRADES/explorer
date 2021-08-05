<h1 align = "center">Explorer</h1>
 <h3 align = "center">Travellers Guide</h3>

<p align = "center">
  <img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>
  <img src="https://img.shields.io/node/v/jest"/>
  <img src="https://img.shields.io/github/license/DACK-OF-ALL-TRADES/explorer?color=cyan&label=License&logo=github&logoColor=cyan"/>
  <img src="https://img.shields.io/github/issues/DACK-OF-ALL-TRADES/explorer?color=yellow&label=Issues&logo=github&logoColor=yellow">
  <img src="https://img.shields.io/github/last-commit/DACK-OF-ALL-TRADES/explorer?color=orange&label=Last%20Commit&logo=git&logoColor=orange">
  <img src="https://img.shields.io/github/contributors/DACK-OF-ALL-TRADES/explorer?color=yellow&label=Contributors&logo=git&logoColor=yellow">
  <img src="https://img.shields.io/github/languages/count/DACK-OF-ALL-TRADES/explorer?color=green&label=Languages&logo=github&logoColor=green">
  <img src="https://img.shields.io/github/languages/top/DACK-OF-ALL-TRADES/explorer?color=blue&label=ReactJS&logo=react&logoColor=white">
  <img src="https://img.shields.io/github/repo-size/DACK-OF-ALL-TRADES/explorer?color=purple&label=Repo%20Size&logo=github&logoColor=purple">
  
                                                                                    
</p>


 
 
## Table of Contents
* [About](#introduction)
* [Description and Working](#des)
* [Dependencies and Tools](#api)
* [Working Video](#details)
* [Deployment](#installations)
* [Future Additions](#future)
* [Credits](#credits)
* [issues](#issues)
* [Meet the Team](#meet)

 
## 🌲 About:
Explorer is a _MERN stack single-page application_, which has been created to help the user in finalizing a holiday destination. Finding your dream location has never been so easy. You merely need to login or sign up, create your profile, answer a few questions, and then you are good to go. It happens that at times you like more than one place, to tackle such a situation you also have the option of saving cities of your choice and finalizing a place later from your saved list. If this sounds exhausting, then you can also get a randomly generated city where you can plan for a holiday with your near and dear ones.
 
## 📓 Description and Working:
  ## Description
The app has the following features 
* A full stack user-focused MERN application that works with real-world data to solve a real-world challenge, with a focus on data and user demand.
* We have used  __MongoDB__ and the __Mongoose ODM__ for the database,__Reactjs__ is used for displaying the front-end version of the app, __GraphQL__ is used with a __Node.js__ and __Express.js__ server
* The app is built on the agile development methodologies that we have used throughout this course.
* Used a framework that was both easy-to use, but also responsive and optimize for the user’s experience.
* The app has mainly been styled by using __Semantic UI react__ component library.
* Used __Heroku web server__ to host our app.
* The steps involved in designing mainly dealt with designing the full stack code and using queries and mutations for retrieving, adding, updating, and deleting data.
 

 
   ## Working
  * You are greeted with a __Landing Page__ from where you can navigate to either the __login__ or the __signup__ page as per your requirement.
 * Once logged in, the user is presented with the __Home Page__ , where he can know more about the app, navigate to his _Profile Page_ or simply _logout_
 * On _top_ of the home page, the user will have the option of exploring the __top 10__ cities around the world that are famous as a travel destination or they can search as per the __continent__ of their choice and select a place to visit directly.
 * As we scroll down you will reach a __set of questions__ which when __answered__ will provide a __list of cities__ from around the world for you that are most suited for your perfect holiday.
 * Not only that, once you click on the city of your choice, you are provided with the __details__ about the city that includes its __location__ on the map, __video__ to guide the traveller a bit more about the place, list of __hotels__ that are available in that area to name a few.
 * Given the current scenario, the user can also view the total number of __active COVID cases__ in that area and then decide if they wish to travel to the city or not
 * On clicking the __Profile page__, the user can update his details and also view the cities that he would have saved while conducting the search
 * You can save all the cities that you like as __favorites__ in your __Profile page__ which you can view and edit as required.


   
## 🧰 Dependencies and Tools:
 In order to run the app, we installed the following dependencies and the given scripts are used to run the app from the root directory:

 _Client Side_
 ````
 "dependencies": {
    "@apollo/client": "^3.3.5",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "google-maps-react": "^2.0.6",
    "graphql": "^15.4.0",
    "jwt-decode": "^3.1.2",
    "pexels": "^1.2.1",
    "query-string": "^7.0.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.3",
    "web-vitals": "^0.2.4"
  }
 
````

_Server Side_

 ````
 "dependencies": {
    "apollo-server-express": "^2.12.0",
    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "graphql": "^15.5.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.9",
    "query-string": "^7.0.1"
  }
  ````
  
  _Root Directory_
  ````
 "scripts": {
    "start": "node server/server.js",
    "dev": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  }
  
 ````
 _An __.env__ file has also been created in order to store the sensitive API key values. 

 


## 🌄 Working Video :

📃 Page1                    | 📃 Page2
:-------------------------:   |:-------------------------:
![](/assets/ss1.png)      |![](/assets/ss2.png)


## 💻 Deployment:
_The app has been deployed through the __Heroku__ web host and has the key value pairs configured for proper deployment and functioning of the app 
The app can also be visited by visitng the app from here :_ 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://explorer-guide.herokuapp.com/)

## Future Additions
We will try to implement the following functionalities in our app as an addition:

* Use a web manifest
* Uses a service worker for offline functionality so that the app works as a PWA
* Add forgot password/reset password as a feature.
* __ANY OTHER RECOMENDATION FROM YOUR SIDE WILL BE HIGHLY APPRECIATED__



## 📊 Credits:

> lorem ipsum....


## 📮 Issues:
asdasdasdasdas

## Meet the Team 
![Ashton](explorer/client/src/assets/misc/Ashton.png =50x50)



## ©️ License:
Copyright © DACK. All rights reserved.
Licensed under the [MIT](https://github.com/DACK-OF-ALL-TRADES/explorer/blob/main/LICENSE) license.

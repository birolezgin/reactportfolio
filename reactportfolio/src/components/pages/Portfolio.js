import React from "react";

import Project from '../Project';

function Portfolio() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <div class="card">
                <div class = "card-body">
                    <h2 class="card-title">Some of My Works</h2><br></br>

            <Project 
                imageSource="assets/imgs/employee-tracker-img.png" 
                altLabel="Employee-Tracker"
                header="Project Name: Employee-Tracker"
                description="The goal was to architect and build a solution for managing a company's employees using node, inquirer, and MySQL. Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems.

                The app involved building a command-line application that allows the user to:
                
                . View departments, roles, employees . Add departments, roles, employees . Update employee roles . Update employee managers . Delete departments, roles, and employees"
                deployedLink="https://drive.google.com/file/d/1MAHHvx6aQjxNKCUH7LtJAdbImsL8cYQG/view?usp=sharing"
                githubLink="https://github.com/birolezgin/Employee-Tracker.git"
                /><br></br>
                
            <Project 
                imageSource="assets/imgs/oku-no-stream-app-img.png" 
                altLabel="oku-no-stream"
                header="Group Project Name: oku-no-stream.io"
                description="Our team built our first full-stack web application. We designed and built an app using the MVC paradigm and our own server-side API. We integrated Sequelize, a popular Node.js ORM, into our newly modularized application. We also continued to add to our professional repertoire with testing, continuous integration and linting tools.

                In this app, user can search any live video from the search area. When user inserts the name or title of video to the search area, related videos will be called from Youtube with an API Key and user can add any of them to their database after calling them to the app. They can mark as watched and can remove from app any of them. They can build this app as a big video library."
                deployedLink="https://oku-no-stream.herokuapp.com/"
                githubLink="https://github.com/atoshiaki/oku-no-stream.io.git"
                /><br></br>

            <Project 
                imageSource="assets/imgs/Note-Taker-img.png" 
                altLabel="Note-Taker"
                header="Project Name: Note-Taker"
                description="I created this application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file."
                deployedLink="https://calm-tor-33648.herokuapp.com/"
                githubLink="https://github.com/birolezgin/Note-Taker.git"
                /><br></br>

            <Project 
                imageSource="assets/imgs/fitness-tracker-img.png" 
                altLabel="Workout-Tracker"
                header="Project Name: Fitness-Tracker"
                description="This application allows users to track workout data over time to better manage their workout schedule. Users can create new workouts, view previous workouts, and view cumulative statistics of their workout history.

                Technologies: HTML, CSS, Bootstrap, Javascript, Node.js, MongoDB / Mongoose, Express.js"
                deployedLink="https://calm-anchorage-59085.herokuapp.com/"
                githubLink="https://github.com/birolezgin/Workout-Tracker.git"
                /><br></br>

            <Project 
                imageSource="assets/imgs/progressive-budget-img.png" 
                altLabel="Progressive-Budget"
                header="Project Name: Progressive-Budget"
                description="Budget tracker application that allows user to enter deposits and expenses. Application includes online/offline functionality so user is able to make entries regardless of internet connection. When entering transactions online, the entries are saved into a database and the application repopulates the total when brought back online"
                deployedLink="https://peaceful-anchorage-58651.herokuapp.com/"
                githubLink="https://github.com/birolezgin/Progressive-Budget.git"
                />
            
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
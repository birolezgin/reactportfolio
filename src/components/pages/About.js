import React from "react";

function About() {
  return (
    <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Birol Ezgin</h2>
                    </div>
                <div className="row p-3">
                  <div className="col-sm-8">
                    <img src = "./assets/imgs/birol-img.jpeg" alt="Profile Pic" />
                    <h3>About Me</h3>
                    <p>I am a full stack web developer with a background in Food Engineering and life-long dedication to learning. Recently earned a certificate in full stack development from University of Washington, within newly developed skills in HTML, CSS, JavaScript, Bootstrap, JQuery, Ajax, OOP, Node, Express, Mysql and Mongo Databases, MVC, Handlebars, Sequelize, Reactjs and MERN. In the next phase of my career, I not only want to use my web developed skills to make the web projects look beautiful, but also want to work on the technically challenging facets of the projects too. I am eager to combine my background in a position with my technical skills to create innovative and interactive web designs.</p>
                    </div>
                    <div className="col-sm-4">
                    <h4>My Current Work:</h4>
                    <img className="social-media" src="./assets/imgs/github.png" alt="GitHub" />
                    <a href="https://github.com/birolezgin" target="_blank">GitHub</a>
                    <p></p>
                    <img className="social-media" src="./assets/imgs/linkedin.png" alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/birol-ezgin-2928b6226/" target="_blank">LinkedIn</a>
                    <p></p>
                    <img className="social-media" src="./assets/imgs/resume.png" alt="Resume" />
                    <a href="https://drive.google.com/file/d/193-wP68C_E-ujQSX8WOsdgzeRcUO2VpX/view?usp=sharing" target="_blank">My Resume</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  );
}

export default About;
import React from "react";

const About = (props) => {
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="about-section">
                <div className="about-section__profile-image">
                    <div className="about-section__profile-image__wrapper">
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png"/>
                    </div>
                    <h3>Miguel Rust</h3>
                    <p>Web Developer Based in Orem, UT.</p>
                </div>
                <p>
                I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server. I worked at Domino's as a customer service representative from May 2017 to November 2017. My job includes taking orders over the phone and in store. I also sauce and top pizzas and cut them into slices once they come out of the oven.
                </p>
            </div>
            <div className="job-section">
                <h3>Job History</h3>
                <p>References can be made available upon request.</p>
                <div className="job-section__jobs">
                    <div className="job-section__jobs__item">
                        <h5>Front End Web Development Intern</h5>
                        <h6>Namify LLC - January 2018 to May 2018</h6>
                        <p>I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.</p>
                    </div>
                    <div className="job-section__jobs__item">
                        <h5>Quality Insurance Analyst</h5>
                        <h6>Namify LLC - January 2018 to May 2018</h6>
                        <p>I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.</p>
                    </div>
                    <div className="job-section__jobs__item">
                        <h5>Customer Service Representative</h5>
                        <h6>Namify LLC - January 2018 to May 2018</h6>
                        <p>I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.</p>
                    </div>
                </div>
            </div>
            <div className="education-section">
                <h3>Education</h3>
                <ul>
                    <li>Completed Code To Success Curriculum for the summers of 2017 and 2018 and recieved certificates of completion. Code To Succes is a free nine-week coding bootcamp for high school students. The curriculums for 2017 and 2018 covered Ruby on Rails and React respectively.</li>
                    <li>Mentor for Code To Succes at Pleasant Grove High School summer of 2018.</li>
                    <li>Mountain View High School 2018-2019 Computer Technology Sterling Scholar Award Recipient.</li>
                    <li>Graduated from Mountain View High School with a 3.946 GPA.</li>
                </ul>
            </div>
            <div className="skills-section">
                <h3>Skills</h3>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>Javascript (Vanilla, React, Node, Vue, jQuery, Express, ES5 Syntax, ES6+ Syntax)</li>
                    <li>Front End Technologies (HTML, CSS, SCSS, Webpack)</li>
                    <li>SQL (MySQL, PostgreSQL, Microsoft SQL Server)</li>
                    <li>UNIX Bash (Ubuntu, Mac OSX)</li>
                    <li>Cloud Computing (Heroku Paas, AWS S3, AWS SES)</li>
                    <li>Version Control Systems (Git)</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
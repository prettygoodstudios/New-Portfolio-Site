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
        </div>
    );
}

export default About;
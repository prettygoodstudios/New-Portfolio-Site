import React from "react";

const About = (props) => {
    return(
        <div className="about" id="about">
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
                <p>Hover or tap on a job on the timeline to view a detailed description. References can be made available by request.</p>
                <div className="job-timeline">
                    <div className="job-timeline__item">
                        <div className="job-timeline__item__circle">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec0429cf-1471-466c-b958-f3b1faa7896b/d5zfuqv-2100dad2-6615-4a54-970d-f2a452581111.png/v1/fill/w_893,h_895,strp/domino_icon_by_slamiticon_d5zfuqv-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNyIsInBhdGgiOiJcL2ZcL2VjMDQyOWNmLTE0NzEtNDY2Yy1iOTU4LWYzYjFmYWE3ODk2YlwvZDV6ZnVxdi0yMTAwZGFkMi02NjE1LTRhNTQtOTcwZC1mMmE0NTI1ODExMTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ya_zbUNA04g8XGgO7-YGj5QYE23XVworgWfpg_VXD1o"/>
                        </div>
                        <div className="job-timeline__item__label">
                            <div>Dominos' Pizza</div>
                            <div>Customer Service Representative</div>
                        </div>
                        <div className="job-timeline__item__tick-mark tick-right"></div>
                        <div className="job-timeline__item__tick-label-right tick-right">Novemeber 2017</div>
                        <div className="job-timeline__item__tick-mark tick-left"></div>
                        <div className="job-timeline__item__tick-label-left tick-left">May 2017</div>
                        <div className="job-timeline__item__description description-left">
                            <div className="job-timeline__item__description__carot"></div>
                            I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.
                        </div>
                    </div>
                    <div className="job-timeline__item">
                        <div className="job-timeline__item__circle">
                            <img src="https://namify.com/wp-content/uploads/2017/06/Namify_Logo_Color-300x132.png"/>
                        </div>
                        <div className="job-timeline__item__label">
                            <div>Namify LLC</div>
                            <div>Front-End Web Development Intern</div>
                        </div>
                        <div className="job-timeline__item__tick-mark tick-right"></div>
                        <div className="job-timeline__item__tick-label-right tick-right">May 2018</div>
                        <div className="job-timeline__item__tick-mark tick-left"></div>
                        <div className="job-timeline__item__tick-label-left tick-left">January 2018</div>
                        <div className="job-timeline__item__description">
                            <div className="job-timeline__item__description__carot"></div>
                            I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.
                        </div>
                    </div>
                    <div className="job-timeline__item">
                        <div className="job-timeline__item__circle">
                            <img src="https://www.registrationsaver.com/wp-content/uploads/2018/12/Race-Entry.png"/>
                        </div>
                        <div className="job-timeline__item__label">
                            <div>Race Entry</div>
                            <div>QA Analyst</div>
                        </div>
                        <div className="job-timeline__item__tick-mark tick-right"></div>
                        <div className="job-timeline__item__tick-label-right tick-right">Today</div>
                        <div className="job-timeline__item__tick-mark tick-left"></div>
                        <div className="job-timeline__item__tick-label-left tick-left">June 2018</div>
                        <div className="job-timeline__item__description description-right">
                            <div className="job-timeline__item__description__carot"></div>
                            I was a Frontend Web Developement Intern at Namify from January 2018 to May 2018. I worked on the Axomo eCommerce platform while there. I gained experience with the following technologies during my time at Namify AngularJS, .NET, and Microsoft SQL Server.
                        </div>
                    </div>
                    <div className="job-timeline__line"></div>
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
                <div className="skills-section__icons">
                    <div>
                        <i className="fab fa-node-js"></i>
                        <span>Node</span>
                    </div>
                    <div>
                        <i className="fas fa-terminal"></i>
                        <span>Bash</span>
                    </div>
                    <div>
                        <i className="fas fa-database"></i>
                        <span>SQL</span>
                    </div>
                    <div>
                        <i className="fab fa-git-alt"></i>
                        <span>Git</span>
                    </div>
                    <div>
                        <i className="fas fa-cloud"></i>
                        <span>Cloud</span>
                    </div>
                    <div>
                        <i class="fas fa-sitemap"></i>
                        <span>Ruby on Rails</span>
                    </div>
                </div>
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
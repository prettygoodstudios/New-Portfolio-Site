import React, {Component} from "react";



export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer__title-section">
                    <h1>Miguel Rust</h1>
                </div>
                <div className="footer__contact-section">
                    <span>(385) 309-4385</span>
                    <span>prettygoodstuiosapps@gmail.com</span>
                    <span>Orem, UT</span>
                </div>
                <div className="footer__social-section">
                    <a href="https://github.com/prettygoodstudios"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/miguel-rust-659342164/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}
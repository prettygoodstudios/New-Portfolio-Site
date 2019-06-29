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
                    <a>GH</a>
                    <a>LI</a>
                </div>
            </div>
        )
    }
}
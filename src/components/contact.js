import React, {Component} from "react";

export default class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <h1>Contact</h1>
                <div className="contact__attention">
                    <h1>Let's Talk</h1>
                    <div>
                        <span>Phone: (385) 309-4385</span>
                        <span>Email: prettygoodstudiosapps@gmail.com</span>
                        <span>Location: Orem, UT</span>
                    </div>
                </div>
                <div className="contact__form">
                    <label for="contactFormIdentity">Name/Entity</label>
                    <input type="text" name="contactFormIdentity" id="contactFormIdentity"/>
                    <label for="contactFormMessage" name="contactFormMessage" id="contactFormMessage">Message</label>
                    <textarea name="contactFormMessage" id="contactFormMessage" rows="10"></textarea>
                    <center><button>Send</button></center>
                </div>
                <div className="contact__basic-info">
                    <span>Phone: (385) 309-4385</span>
                    <span>Email: prettygoodstudiosapps@gmail.com</span>
                    <span>Location: Orem, UT</span> 
                </div>
            </div>  
        )
    }
}


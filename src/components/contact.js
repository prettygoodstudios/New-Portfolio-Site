import React, {Component} from "react";

export default class Contact extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            message: ""
        }
    }

    updateMessage(e){
        const message = e.target.value;
        this.setState({
            message
        });
    }

    updateName(e){
        const name = e.target.value;
        this.setState({
            name
        });
    }

    sumbitForm(){
        window.open(`mailto:prettygoodstudiosapps@gmail.com?subject=${encodeURI(this.state.name)+encodeURI(" - Contact Form Request")}&body=${this.state.message}`);
        this.setState({
            name: "",
            message: ""
        });
    }

    render(){
        const {name, message} = this.state;
        return(
            <div className="contact" id="contact">
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
                    <input type="text" name="contactFormIdentity" id="contactFormIdentity" value={name} onChange={(e) => this.updateName(e)}/>
                    <label for="contactFormMessage" name="contactFormMessage" id="contactFormMessage">Message</label>
                    <textarea name="contactFormMessage" id="contactFormMessage" rows="10" value={message} onChange={(e) => this.updateMessage(e)}></textarea>
                    <center><button onClick={() => this.sumbitForm()}>Send</button></center>
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


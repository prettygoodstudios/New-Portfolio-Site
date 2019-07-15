import React, {Component} from "react";

let verifiedHuman = false;

window.onloadCallback = () => {
    grecaptcha.render('captcha', {
        'sitekey' : '6LfoT6wUAAAAAKgaJfowl_bhrzF7HYfORPmFwmUy',
        'callback' : () => verifiedHuman = true,
        'theme' : 'dark'
    });
}

export default class Contact extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            message: "",
            error: "",
            success: false,
            email: ""
        }
    }

    componentDidMount(){
    
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

    updateEmail(e){
        const email = e.target.value;
        this.setState({
            email
        });
    }

    sumbitForm(){
        const {name, message, email} = this.state;
        if(verifiedHuman && name != "" && message != "" && email != "" && email.indexOf("@") != -1 && email.split("@")[1].indexOf(".") != -1){
            emailjs.send('gmail', 'template_ARqIPPjo', {...this.state});
            //window.open(`mailto:prettygoodstudiosapps@gmail.com?subject=${encodeURI(this.state.name)+encodeURI(" - Contact Form Request")}&body=${this.state.message}`);
            this.setState({
                name: "",
                message: "",
                error: "",
                email: "",
                success: true
            });
        }else if(name != "" && message != "" && email != "" && email.indexOf("@") != -1 && email.split("@")[1].indexOf(".") != -1){
            this.setState({
                error: "You must prove you are a human."
            });
        }else if(name != "" && email != "" && email.indexOf("@") != -1 && email.split("@")[1].indexOf(".") != -1){
            this.setState({
                error: "You must provide a message."
            });
        }else if(email != "" && email.indexOf("@") != -1 && email.split("@")[1].indexOf(".") != -1){
            this.setState({
                error: "You must provide a name/entity."
            });
        }else{
            this.setState({
                error: "You must provide a valid email."
            });
        }
    }

    render(){
        const {name, message, error, success, email} = this.state;
        return(
            <div className="contact" id="contact">
                <h1>Contact</h1>
                <div className="contact__attention">
                    <h1>Let's Work Together</h1>
                    <div>
                        <span>Phone: (385) 309-4385</span>
                        <span>Email: prettygoodstudiosapps@gmail.com</span>
                        <span>Location: Orem, UT</span>
                    </div>
                </div>
                <div className="contact__form">
                    <h3>Contact Form</h3>
                    <label htmlFor="contactFormIdentity">Name/Entity</label>
                    <input type="text" name="contactFormIdentity" id="contactFormIdentity" value={name} onChange={(e) => this.updateName(e)}/>
                    <label htmlFor="contactFormEmail">Email</label>
                    <input type="email" name="contactFormEmail" id="contactFormEmail" value={email} onChange={(e) => this.updateEmail(e)}/>
                    <label htmlFor="contactFormMessage" name="contactFormMessage" id="contactFormMessage">Message</label>
                    <textarea name="contactFormMessage" id="contactFormMessage" rows="10" value={message} onChange={(e) => this.updateMessage(e)}></textarea>
                    <center><div id="captcha"></div></center>
                    {error && <div className="contact__form__error">{error}</div>}
                    <center><button onClick={() => this.sumbitForm()}>Send</button></center>
                </div>
                <div className="contact__basic-info">
                    <span>Phone: (385) 309-4385</span>
                    <span>Email: prettygoodstudiosapps@gmail.com</span>
                    <span>Location: Orem, UT</span> 
                </div>
                {success && 
                    <div className="contact__modal">
                        <h1>Successfully Sent!</h1>
                        <button onClick={() => this.setState({success: false})}>Dismiss</button>
                    </div>
                }
            </div>  
        )
    }
}


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
            success: false
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

    sumbitForm(){
        const {name, message} = this.state;
        if(verifiedHuman && name != "" && message != ""){
            emailjs.send('gmail', 'template_ARqIPPjo', {...this.state});
            //window.open(`mailto:prettygoodstudiosapps@gmail.com?subject=${encodeURI(this.state.name)+encodeURI(" - Contact Form Request")}&body=${this.state.message}`);
            this.setState({
                name: "",
                message: "",
                error: "",
                success: true
            });
        }else if(name != "" && message != ""){
            this.setState({
                error: "You must prove you are a human."
            });
        }else if(name != ""){
            this.setState({
                error: "You must provide a message."
            });
        }else{
            this.setState({
                error: "You must provide a name/entity."
            });
        }
    }

    render(){
        const {name, message, error, success} = this.state;
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


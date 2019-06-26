import React, {Component} from "react";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            toggleState: "open"
        }
        window.onresize = () => this.updateHeader();
    }

    componentWillUnMount(){

    }

    updateHeader = () => {
        console.log("Updat")
        if(window.innerWidth > 600 && this.state.toggleState == "close"){
            this.setState({
                toggleState: "open"
            });
        }
    }

    toggleMenu = () => {
        this.setState({
            toggleState: this.state.toggleState === "open" ? "close" : "open"
        });
    }

    render(){
        const {toggleState} = this.state;
        return(
            <div className="header">
                <div className="header__title">
                    <h1>Miguel Rust</h1>
                </div>
                <div className={"header__menu "+((toggleState == "open") ? "close-menu" : "open-menu")}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Contact</a>
                </div>
                <div className="header__toggle">
                    <button onClick={this.toggleMenu} className={toggleState}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
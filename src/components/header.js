import React, {Component} from "react";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            toggleState: "open",
            size: "large"
        }
        window.onresize = () => this.updateHeader();
        window.onscroll = (e) => this.updateHeaderHeight(e);
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

    updateHeaderHeight = (e) => {
        console.log(e.pageY);
        if(e.pageY > 100 && this.state.size == "large"){
            this.setState({
                size: "small"
            });
        }else if(this.state.size == "small" && e.pageY <= 100){
            this.setState({
                size: "large"
            });
        }
    }
 
    toggleMenu = () => {
        this.setState({
            toggleState: this.state.toggleState === "open" ? "close" : "open"
        });
    }

    scrollTo = (id) => {
        const element = document.getElementById(id);
        const offSet = element.offsetTop;
        window.scroll({
            top: offSet - 80,
            behavior: "smooth"
        })
    }

    render(){
        const {toggleState, size} = this.state;
        return(
            <div className={"header " + (size == "small" ? "header-small" : "")}>
                <div className="header__title">
                    <h1>Miguel Rust</h1>
                </div>
                <div className={"header__menu "+((toggleState == "open") ? "close-menu" : "open-menu")}>
                    <a onClick={() => this.scrollTo("home")}>Home</a>
                    <a onClick={() => this.scrollTo("about")}>About</a>
                    <a onClick={() => this.scrollTo("portfolio")}>Portfolio</a>
                    <a onClick={() => this.scrollTo("contact")}>Contact</a>
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
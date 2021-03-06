import React, {Component} from "react";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            toggleState: "open",
            size: "large",
            touchStart: {},
            menuWidth: 300,
            innitialLoad: true
        }
        window.setTimeout(() => this.setState({innitialLoad : false}), 200);
        window.onresize = () => this.updateHeader();
        window.onscroll = (e) => this.updateHeaderHeight(e);
        document.addEventListener("touchstart", (e) => this.touchStart(e));
        document.addEventListener("touchend", (e) => this.touchEnd(e));
    }

    componentWillUnMount(){

    }

    updateHeader = () => {
        if(window.innerWidth > 600 && this.state.toggleState == "close"){
            this.setState({
                toggleState: "open"
            });
        }
        if(window.innerWidth <= 600){
            this.setState({
                menuWidth: document.querySelector(".header__menu").clientWidth
            });
        }
    }

    updateHeaderHeight = (e) => {
        if(window.pageYOffset > 100 && this.state.size == "large"){
            this.setState({
                size: "small"
            });
        }else if(this.state.size == "small" && window.pageYOffset <= 100){
            this.setState({
                size: "large"
            });
        }
    }

    touchStart = ({touches}) => {
        const {clientX, clientY} = touches[0];
        this.setState({
            touchStart: {
                clientX,
                clientY
            }
        });
    }

    touchEnd = (e) => {   
        const {clientX, clientY} = e.changedTouches[0];
        const {touchStart, toggleState} = this.state;
        const sideMenu = document.querySelector(".header__menu");
        if(toggleState === "open"){
            if(clientX - touchStart.clientX > 100 && touchStart.clientX < 100){
                this.setState({
                    toggleState: "close"
                });
            }
        }else{
            if(touchStart.clientX - clientX > 50 && touchStart.clientX < sideMenu.clientWidth){
                this.setState({
                    toggleState: "open"
                });
            }
        }
        this.setState({
            touchStart: {}
        });
    }

    toggleMenu = () => {
        this.setState({
            toggleState: this.state.toggleState === "open" ? "close" : "open",
            innitialLoad: false,
            menuWidth: document.querySelector(".header__menu").clientWidth
        });
    }

    scrollTo = (id, topOffSet) => {
        const element = document.getElementById(id);
        const offSet = element.offsetTop;
        window.scroll({
            top: offSet - topOffSet,
            behavior: "smooth"
        })
    }

    render(){
        const {toggleState, size, menuWidth, innitialLoad} = this.state;
        return(
            <div className={"header " + (size == "small" ? "header-small" : "")}>
                <div className="header__title">
                    <h1>Miguel Rust</h1>
                </div>
                <div className={"header__menu side-menu "+((size == "small") ? "mobile-menu" : "")} style={toggleState === "open" ? {left: -menuWidth, ...(innitialLoad ? {display: "none"} : {})} : {left: 0}}>
                    <a onClick={() => this.scrollTo("home", 80)}>Home</a>
                    <a onClick={() => this.scrollTo("about", 50)}>About</a>
                    <a onClick={() => this.scrollTo("portfolio", 60)}>Portfolio</a>
                    <a onClick={() => this.scrollTo("contact", 50)}>Contact</a>
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
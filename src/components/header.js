import React, {Component} from "react";

class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="header__title">
                    <h1>Miguel Rust</h1>
                </div>
                <div className="header__menu">
                    <a>Home</a>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Contact</a>
                </div>
                <div className="header__toggle">
                    <button>Menu</button>
                </div>
            </div>
        );
    }
}

export default Header;
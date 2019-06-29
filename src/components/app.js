import React, {Component} from "react";

import Header from "./header";
import CallToAction from "./callToAction";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

export default class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <CallToAction />
                <About />
                <Portfolio />
                <Contact />
            </div>
        )
    }
}


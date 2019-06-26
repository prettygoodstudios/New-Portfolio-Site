import React, {Component} from "react";

import Header from "./header";
import CallToAction from "./callToAction";
import About from "./about";

export default class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <CallToAction />
                <About />
                <p>Lorum ipsum</p>
            </div>
        )
    }
}


import React, {Component} from 'react';
import Typewriter from "typewriter-effect/dist/core";

const likeIcon = new Image();
likeIcon.src = require("../images/likeicon.png");
const pointerIcon = new Image();
pointerIcon.src = require("../images/pointer.png");
const iconTypes = [likeIcon, pointerIcon];

const drawRoundedRect = (x, y, width, height, borderRadius, context, fill) => {
    const radiusX = borderRadius;
    const radiusY = borderRadius;
    const innerH = height - radiusY * 2;
    const innerW = width - radiusX * 2;
    const left = x + radiusX;
    const top = y + radiusY;
    const right = x + width - radiusX;
    const bottom = y + height - radiusY;
    context.fillStyle = fill;
    //Top Left Circle
    context.beginPath();
    context.arc(left, top, borderRadius, 0, 2 * Math.PI);
    context.fill(); 
    //Top Right Circle
    context.beginPath();
    context.arc(right, top, borderRadius, 0, 2 * Math.PI);
    context.fill();
    //Bottom Left Circle
    context.beginPath();
    context.arc(left, bottom, borderRadius, 0, 2 * Math.PI);
    context.fill();
    //Bottom Right Circle
    context.beginPath();
    context.arc(right, bottom, borderRadius, 0, 2 * Math.PI);
    context.fill();
    //Vertical Rect
    context.fillRect(left,y,innerW,height);
    //Horizontal Rect
    context.fillRect(x, top, width, innerH);
}

class AnimatedIcon {
    constructor(icon, x, y, rad){
        this.icon = icon;
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

   render(context, width){
        context.drawImage(this.icon, this.x, this.y + Math.sin(this.rad)*200, 50, 50);
        if(this.x < width){
            this.x++;
        }else{
            this.x = 0;
        }
        if(this.rad < Math.PI*2){
            this.rad+= 0.1;
        }else{
            this.rad = 0;
        }
   }
}

class CallToAction extends Component {

    constructor(){
        super();
        this.state = {
            canvas: {},
            context: {},
            icons: [],
            newHeight: 20,
            showCarot: false,
            carotFrames: 0
        }
    }

    componentDidMount(){
        this.setState({
            canvas: document.getElementById("animation-wrapper"),
            context: document.getElementById("animation-wrapper").getContext("2d")
        });
        let icons = [];
        for(let i = 0; i < 10; i++){
            const y = Math.floor(Math.random()*400+200);
            const x = -Math.floor(Math.random()*500);
            const rad = Math.floor(Math.random()*Math.PI*2);
            const icon = iconTypes[Math.floor(iconTypes.length*Math.random())];
            icons.push(new AnimatedIcon(icon, x, y, rad));
        }
        this.setState({
            icons
        });
        window.setInterval(() => this.animationLoop(), 1000/30);
        const resizeFunc = window.onresize;
        window.onresize = () => {
            resizeFunc();
            this.setState({
                context: document.getElementById("animation-wrapper").getContext("2d")
            });
        }
        new Typewriter(".call-to-action > h1 > span", {
            strings: "Let me help you enhance your online presence.",
            autoStart: true
        });
    }

    animationLoop(){
        const {context, canvas, icons, newHeight, carotFrames, showCarot} = this.state;
        context.fillStyle = "white";
        context.clearRect(0,0,canvas.width, canvas.height);
        icons.forEach((i) => {
            i.render(context, canvas.width);
        });
        if(newHeight < 300){
            this.setState({
                newHeight: newHeight+1
            });
        }
        if(carotFrames < 30){
            this.setState({
                carotFrames: carotFrames+1
            });
        }else{
            this.setState({
                carotFrames: 0,
                showCarot: !showCarot
            });
        }
        drawRoundedRect(30,30,220,220,10,context, "black");
        drawRoundedRect(40,40,200,200,10,context, "white");
    }

    scrollToAbout = () => {
        const offset = document.getElementById("about").offsetTop;
        window.scroll({
            top: offset - 20,
            behavior: "smooth"
        });
    }

    render(){
        const {newHeight, showCarot} = this.state;
        return(
            <div className="call-to-action" id="home">   
                <h1><span></span></h1>
                <div className="graph">
                    <h3>User Satisfaction & Engagement</h3>
                    <div className="graph__bars">
                        <div className="graph__bars__item">
                            <div className="graph__bars__item__old"></div>
                            <h5>Your Bland Old Site</h5>
                        </div>
                        <div className="graph__bars__item">
                            <div className="graph__bars__item__new-short" style={{height: newHeight}}></div>
                            <h5>Your Snazzy New Site</h5>
                        </div>
                    </div>
                </div>
                <canvas id="animation-wrapper" height={window.innerHeight - 75 + "px"} width={window.innerWidth + "px"}></canvas>
                <div className="call-to-action__carot-wrapper">
                    <span>Scroll To View More</span>
                    <div className={"call-to-action__carot " + (showCarot ? "" : "carot-hide")} onClick={() => this.scrollToAbout()}></div>
                </div>
            </div>
        );
    }
}

export default CallToAction;
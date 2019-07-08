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

class Screen {
    constructor(width, height, bezel, radius){
        this.screenHeight = height;
        this.screenWidth = width;
        this.bezel = bezel;
        this.screenRadius = radius;
    }
    render(context, x, y){
        this.boundingLeft = x + this.bezel + this.screenRadius;
        this.boundingRight = x + this.screenWidth - this.bezel - this.screenRadius;
        this.boundingTop = y + this.bezel + this.screenRadius;
        this.boundingBottom = y + this.screenHeight - this.bezel - this.screenRadius;
        drawRoundedRect(x, y, this.screenWidth, this.screenHeight, this.screenRadius, context, "black");
        drawRoundedRect(x + this.bezel, y + this.bezel, this.screenWidth - this.bezel*2, this.screenHeight - this.bezel*2, 0, context, "white");
    }
}

class Laptop extends Screen{
    constructor(rad, centerX, centerY, radius){
        super(150,100, 10, 10);
        this.rad = rad;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.wavesX = -200;
    }
    render(context){
        this.rad += 0.01;
        if(this.rad > Math.PI*2){
            this.rad = 0;
        }
        const x = this.centerX + this.radius*Math.cos(this.rad);
        const y = this.centerY + this.radius*Math.sin(this.rad);
        super.render(context, x, y);
        const screenRealW = this.boundingRight - this.boundingLeft;
        const screenRealH = this.boundingBottom - this.boundingTop;
        const waveHeight = 5;
        this.wavesX++;
        if(this.wavesX > screenRealW){
            this.wavesX = -screenRealW;
        }
        let wavesOffset = 0;
        for(let wavePos = -2*Math.PI; wavePos < 2*Math.PI; wavePos+=0.01){
            let waveRows = Math.ceil((screenRealH/waveHeight))*2;
            for(let row = 0; row < waveRows; row++){
                let y = row*waveHeight*2+Math.sin(wavePos)*50 + this.boundingTop - screenRealH*1.2;
                let x = this.wavesX + wavesOffset + this.boundingLeft;
                if (y < this.boundingBottom && y > this.boundingTop && x < this.boundingRight && x > this.boundingLeft){
                    context.fillStyle = row % 2 == 0 ? "white" : `rgb(0, 0, ${Math.abs(wavePos)/(Math.PI*2)*255})`;
                    context.beginPath();
                    context.arc(x, y, waveHeight, 0, 2*Math.PI);
                    context.fill();
                }
            }
            wavesOffset+=0.8;
        }
        context.fillStyle = "gray";
        context.fillRect(x, y+this.screenHeight-4, this.screenWidth, 10);
    }
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class Desktop extends Screen{
    constructor(rad, centerX, centerY, radius){
        super(150,100, 10, 10);
        this.rad = rad;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.wavesX = -300;
    }
    render(context){
        this.rad += 0.01;
        if(this.rad > Math.PI*2){
            this.rad = 0;
        }
        const x = this.centerX + this.radius*Math.cos(this.rad);
        const y = this.centerY + this.radius*Math.sin(this.rad);
        super.render(context, x, y);
        context.fillStyle = "gray";
        const standWidth = 10;
        const standBaseWidth = 40;
        const standHeight = 30;
        const screenRealW = this.boundingRight - this.boundingLeft;
        const screenRealH = this.boundingBottom - this.boundingTop;
        const waveHeight = 5;
        this.wavesX++;
        if(this.wavesX > screenRealW){
            this.wavesX = -screenRealW;
        }
        let wavesOffset = 0;
        for(let wavePos = -2*Math.PI; wavePos < 2*Math.PI; wavePos+=0.01){
            let waveRows = Math.ceil((screenRealH/waveHeight))*2;
            for(let row = 0; row < waveRows; row++){
                let y = row*waveHeight*2+Math.sin(wavePos)*50 + this.boundingTop - screenRealH*1.2;
                let x = this.wavesX + wavesOffset + this.boundingLeft;
                if (y < this.boundingBottom && y > this.boundingTop && x < this.boundingRight && x > this.boundingLeft){
                    context.fillStyle = row % 2 == 0 ? "white" : `rgb(${Math.abs(wavePos)/(Math.PI*2)*255}, 0, 0)`;
                    context.beginPath();
                    context.arc(x, y, waveHeight, 0, 2*Math.PI);
                    context.fill();
                }
            }
            wavesOffset+=0.8;
        }
        context.fillStyle = "gray";
        context.fillRect(x+this.screenWidth*0.5-standWidth*0.5, y+this.screenHeight, standWidth, standHeight);
        context.fillRect(x+this.screenWidth*0.5-standBaseWidth*0.5, y+this.screenHeight+standHeight, standBaseWidth, standWidth);
    }
}

class Phone extends Screen{
    constructor(rad, centerX, centerY, radius, width, height){
        super(width, height, 10, 5);
        this.rad = rad;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.wavesX = -0.8*Math.PI*4+this.screenWidth-this.bezel;
    }
    render(context){
        this.rad += 0.01;
        if(this.rad > Math.PI*2){
            this.rad = 0;
        }
        const x = this.centerX + this.radius*Math.cos(this.rad);
        const y = this.centerY + this.radius*Math.sin(this.rad);
        super.render(context, x, y);
        const screenRealW = this.boundingRight - this.boundingLeft;
        const screenRealH = this.boundingBottom - this.boundingTop;
        const waveHeight = 5;
        this.wavesX++;
        if(this.wavesX > screenRealW){
            this.wavesX = -screenRealW;
        }
        let wavesOffset = 0;
        for(let wavePos = -2*Math.PI; wavePos < 2*Math.PI; wavePos+=0.01){
            let waveRows = Math.ceil((screenRealH/waveHeight))*2;
            for(let row = 0; row < waveRows; row++){
                let y = row*waveHeight*2+Math.sin(wavePos)*50 + this.boundingTop - screenRealH*1.2;
                let x = this.wavesX + wavesOffset + this.boundingLeft;
                if (y < this.boundingBottom && y > this.boundingTop && x < this.boundingRight && x > this.boundingLeft){
                    context.fillStyle = row % 2 == 0 ? "white" : `rgb(0, ${Math.abs(wavePos)/(Math.PI*2)*255}, 0)`;
                    context.beginPath();
                    context.arc(x, y, waveHeight, 0, 2*Math.PI);
                    context.fill();
                }
            }
            wavesOffset+=0.8;
        }
        context.fillStyle = "gray";
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
            carotFrames: 0,
            phones: []
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
        const deviceCenterX = window.innerWidth*0.7;
        const deviceCenterY = window.innerHeight*0.5;
        const deviceRadius = 200;
        this.setState({
            icons,
            phones: [new Phone(0, deviceCenterX, deviceCenterY, deviceRadius, 100, 200), new Phone(Math.PI*0.5, deviceCenterX, deviceCenterY, deviceRadius, 150, 120), new Laptop(Math.PI, deviceCenterX, deviceCenterY, deviceRadius), new Desktop(Math.PI*1.5, deviceCenterX, deviceCenterY, deviceRadius)]
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
        const {context, canvas, icons, newHeight, carotFrames, showCarot, phones} = this.state;
        context.fillStyle = "white";
        context.clearRect(0,0,canvas.width, canvas.height);
        /*
        icons.forEach((i) => {
            i.render(context, canvas.width);
        });
        */
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
        phones.forEach((p) => {
            p.render(context);
        });
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
                { /*
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
                */
                }
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
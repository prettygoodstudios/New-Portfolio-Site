import React, {Component} from 'react';

const likeIcon = new Image();
likeIcon.src = "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png?resize=300%2C289";
const pointerIcon = new Image();
pointerIcon.src = "https://www.clipartmax.com/png/middle/310-3102180_computer-hand-computerhand-black-white-overlay-tumblr-mouse-pointer.png";
const iconTypes = [likeIcon, pointerIcon];

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
            newHeight: 20

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
    }

    animationLoop(){
        const {context, canvas, icons, newHeight} = this.state;
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
    }

    render(){
        const {newHeight} = this.state;
        return(
            <div className="call-to-action">   
                <h1>Let me help you enhance your online presence.</h1>
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
            </div>
        );
    }
}

export default CallToAction;
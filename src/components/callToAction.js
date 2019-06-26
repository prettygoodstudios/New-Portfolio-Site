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
            grow: false
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
        window.setTimeout(() => this.setState({grow: true}), 1000);
    }

    animationLoop(){
        const {context, canvas, icons} = this.state;
        context.fillStyle = "white";
        context.clearRect(0,0,canvas.width, canvas.height);
        icons.forEach((i) => {
            i.render(context, canvas.width);
        });
    }

    render(){
        return(
            <div className="call-to-action">   
                <h1>Let me help you enhance your online presence.</h1>
                <div className="graph">
                    <h3>Page Views</h3>
                    <div className="graph__bars">
                        <div className="graph__bars__item">
                            <div className="graph__bars__item__old"></div>
                            <h5>Old Site</h5>
                        </div>
                        <div className="graph__bars__item">
                            <div className={this.state.grow ? "graph__bars__item__new" : "graph__bars__item__new-short"}></div>
                            <h5>New Site</h5>
                        </div>
                    </div>
                </div>
                <canvas id="animation-wrapper" height={window.innerHeight - 75 + "px"} width={window.innerWidth + "px"}></canvas>
            </div>
        );
    }
}

export default CallToAction;
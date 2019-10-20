import React, {Component} from "react";

import geoImage from "../images/frame-001.jpg";
import bioImage from "../images/geofoc.png";
import oldSite from "../images/oldsite.png";
import accuracy from "../images/accuracy.png";

const PortofolioModal = (props) => {
    const {url, title, description, repo, image, toggleModal} = props;
    return(
        <div>
            <div className="portfolio-modal">
                <div className="portfolio-modal__title-bar">
                    <h1>{title}</h1>
                    <button onClick={toggleModal}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <img src={image} />
                <p>{description}</p>
                <div className="portfolio-modal__actions">
                    <a href={url}>View</a>
                    <a href={repo}>Code</a>
                </div>
            </div>
            <div className="portfolio-modal-mask"></div>
        </div>
    );
}

const PortfolioItem = (props) => {
    const {url, image, title, description, repo, toggleModal, show} = props;
    let showModal = false;
    return(
        <div className="portfolio__item">
            <div className="portfolio__item__mask">
                <h3>{title}</h3>
                <div className="portfolio__item__mask__links">
                    <a onClick={toggleModal}>More Info</a>
                </div>
            </div>
            <div className="portfolio__item__content">
                <img src={image} />
            </div>
            {show && <PortofolioModal title={title} url={url} description={description} repo={repo} image={image} toggleModal={toggleModal}/>}
        </div>
    )
}

class Portfolio extends Component {

    constructor(){
        super();
        this.state = {
            items: [
                {
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails",
                    repo: "https://github.com",
                    show: false
                },
                {
                    title: "Bioencounters",
                    description: "Crowdsourcing platform for bioencounters built with Ruby on Rails.",
                    image: bioImage,
                    url: "https://bioencounters.geofoc.us",
                    stack: "Rails",
                    repo: "https://github.com",
                    show: false
                },{
                    title: "Old Portfolio Site",
                    description: "Site showcasing my skills as a web developer. The site includes a blog, about page, trending topics and portfolio page. It was built using Ruby on Rails",
                    image: oldSite,
                    url: "https://miguelrust.herokuapp.com",
                    stack: "Rails",
                    repo: "https://github.com",
                    show: false
                },{
                    title: "Accuracy Accounting",
                    description: "Marketing page for a mock accounting services company. The page was built with React and features adavanced features such as an HTML5 canvas animation and intercative calendar. The interactive calendar depends on a custom rest API that was built with Express, Nodejs and MySQL.",
                    image: accuracy,
                    url: "https://accuracyfrontend.geofoc.us",
                    stack: "React",
                    repo: "https://github.com",
                    show: false
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails",
                    repo: "https://github.com",
                    show: false
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails",
                    repo: "https://github.com",
                    show: false
                }
            ]
        }
    }

    toggleModal = (index) => {
        const tempState = this.state;
        console.log(index)
        tempState.items[index].show = !tempState.items[index].show;
        this.setState(tempState);
    }

    render(){
        return(
            <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-items">
                    {   this.state.items.map((i, x) => {
                        const {title, description, image, url, stack, show, repo} = i;
                        return <PortfolioItem title={title} description={description} image={image} url={url} key={x} stack={stack} toggleModal={() => this.toggleModal(x)} show={show} repo={repo}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;

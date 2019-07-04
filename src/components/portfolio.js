import React, {Component} from "react";

import geoImage from "../images/frame-001.jpg";

const PortfolioItem = (props) => {
    const {url, image, title, description} = props;
    return(
        <a className="portfolio__item" href={url}>
            <div className="portfolio__item__mask">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="portfolio__item__content">
                <img src={image} />
            </div>
        </a>
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
                    stack: "Rails"
                },
                {
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails"
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails"
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails"
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails"
                },{
                    title: "GeoFocus",
                    description: "Web app for photographers built with Ruby On Rails, React, Mapbox, AWS SES and AWS S3. It was deployed to the Heroku Paas.",
                    image: geoImage,
                    url: "https://geofoc.us",
                    stack: "Rails"
                }
            ]
        }
    }

    render(){
        return(
            <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <p>Hover on an item to recieve more information. Click on an item to view.</p>
                <div className="portfolio-items">
                    {   this.state.items.map((i, x) => {
                        const {title, description, image, url, stack} = i;
                        return <PortfolioItem title={title} description={description} image={image} url={url} key={x} stack={stack}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;
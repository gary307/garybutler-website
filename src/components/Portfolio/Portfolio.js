import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
const contentful = require('contentful');

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'qvi9n1jiag8y',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken:
        'd4cc431dff49be778a0a2e068a242fed59331242a12c6dd2f4d2c34981d84c9e'
});

class Portfolio extends Component {
    constructor() {
        super();
    }

    render() {
        const { portfolio, pageSelector } = this.props;

        return (
            <div>
                <div class="portfolio__title">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio">
                    {portfolio.map((item, key) => (
                        <Link
                            to={`work/${item.fields.title
                                .replace(/ /g, '-')
                                .toLowerCase()}`}
                        >
                            <div
                                className="portfolio__item"
                                style={{
                                    background:
                                        'url(' +
                                        item.fields.thumb.fields.file.url +
                                        ')',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <p>{item.fields.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Portfolio;

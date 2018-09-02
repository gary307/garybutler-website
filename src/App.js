import React, { Component } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import About from './components/About/About';
import BodyRoute from './Router';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Link } from 'react-router-dom';

const contentful = require('contentful');

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'qvi9n1jiag8y',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken:
        'd4cc431dff49be778a0a2e068a242fed59331242a12c6dd2f4d2c34981d84c9e'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            portfolio: [],
            workSelection: 0
        };
    }

    work = client
        .getEntries('work')
        .then(entry => {
            this.setState({
                portfolio: entry.items,
                workSelection: 0
            });
        })
        .catch(err => console.log(err));

    workSelector = number => {
        var number;
        var id = this.state.portfolio.filter((item, key) => {
            if (
                item.fields.title
                    .replace(/ /g, '-')
                    .includes(window.location.pathname)
            ) {
                number = key;
            }
        });

        if (id !== this.state.workSelection) {
            this.setState({
                workSelection: number
            });
        }
    };

    closeWork = () => {
        this.setState({
            page: 'Home'
        });
    };

    render() {
        return (
            <div className="gb">
                <header className="gb-header">
                    <h1 className="App-title">GARY BUTLER</h1>
                    <h4>FRONT END WEB DEVELOPER</h4>
                    <nav>
                        {/* <span onClick={this.pageSelection.bind(this, 'About')}>
                            About
                        </span>
                        <span
                            onClick={this.pageSelection.bind(this, 'Portfolio')}
                        >
                            Portfolio
                        </span> */}
                    </nav>
                </header>

                <div>
                    <ReactCSSTransitionGroup
                        transitionName="app-transition"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                    >
                        <BodyRoute
                            closeWork={this.closeWork}
                            workSelect={this.workSelection}
                            portfolio={this.state.portfolio}
                            workSelection={
                                this.state.portfolio[this.state.workSelection]
                            }
                            workId={this.state.workSelection}
                            workSelector={this.workSelector}
                        />
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default App;

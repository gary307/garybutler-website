import React, { Component } from 'react';
import BodyRoute from './Router';
import './App.css';
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
            workData: {}
        };
    }

    work = client
        .getEntries('work')
        .then(entry => {
            var newWorkData = {};
            entry.items.map(item => {
                newWorkData[
                    item.fields.title.replace(/ /g, '-').toLowerCase()
                ] = item.fields;
            });
            this.setState({
                portfolio: entry.items
            });
            return newWorkData;
        })
        .then(workData => {
            this.setState({
                workData: workData
            });
        })
        .catch(err => console.log(err));

    render() {
        return (
            <div className="gb">
                <header className="gb-header">
                    <h1 className="App-title">GARY BUTLER</h1>
                    <h4>FRONT END WEB DEVELOPER</h4>
                    <nav>
                        <Link to="/about">About</Link>
                        <Link to="/">Portfolio</Link>
                    </nav>
                </header>
                <div>
                    <BodyRoute
                        portfolio={this.state.portfolio}
                        workSelection={this.state.workData}
                    />
                </div>
            </div>
        );
    }
}

export default App;

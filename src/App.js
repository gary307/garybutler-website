import React, { Component } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import About from './components/About/About';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

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
      page: 'Home',
      workSelection: ''
    };
  }

  work = client
    .getEntries('work')
    .then(entry => {
      this.setState({
        portfolio: entry.items
      });
    })
    .catch(err => console.log(err));

  workSelection = selection => {
    this.setState({
      page: 'Work',
      workSelection: selection
    });
    console.log(window.pageYOffset);
    window.scrollTo(0, 0);
  };

  pageSelection = selection => {
    this.setState({
      page: selection
    });
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
            <span onClick={this.pageSelection.bind(this, 'About')}>About</span>
            <span onClick={this.pageSelection.bind(this, 'Portfolio')}>
              Portfolio
            </span>
          </nav>
        </header>

        <div>
          <ReactCSSTransitionGroup
            transitionName="app-transition"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.page !== 'About' ? (
              this.state.page === 'Work' ? (
                <Work
                  key="0"
                  workSelection={this.state.portfolio[this.state.workSelection]}
                  closeWork={this.closeWork}
                />
              ) : (
                <Portfolio
                  key="1"
                  workSelect={this.workSelection}
                  portfolio={this.state.portfolio}
                />
              )
            ) : (
              <About key="2" />
            )}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;

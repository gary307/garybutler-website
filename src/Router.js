import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import About from './components/About/About';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const pageComponent = (Page, custProp) => {
    return props => (
        <ReactCSSTransitionGroup
            transitionLeave={true}
            transitionAppear={true}
            transitionExit={true}
            transitionEnter={true}
            transitionAppearTimeout={300}
            transitionLeaveTimeout={100}
            transitionExitTimeout={100}
            transitionName="app-transition"
        >
            <Page
                className="animated-page-wrapper"
                key={Page}
                {...props}
                portfolio={custProp.portfolio}
                workSelection={custProp.workSelection}
            />
        </ReactCSSTransitionGroup>
    );
};

const BodyRoute = props => (
    <div>
        <Switch>
            <Route
                key="0"
                exact
                path="/"
                component={pageComponent(Portfolio, props)}
            />
            <Route key="1" path="/about" component={About} />
            <Route
                key="2"
                path="/work/:id"
                component={pageComponent(Work, props)}
            />
        </Switch>
    </div>
);

export default BodyRoute;

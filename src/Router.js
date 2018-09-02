import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import About from './components/About/About';

const BodyRoute = props => (
    <Router>
        <div>
            <Route
                exact
                path="/"
                component={() => (
                    <Portfolio
                        workSelector={props.workSelector}
                        portfolio={props.portfolio}
                    />
                )}
            />
            <Route path="/about" component={About} />
            <Route
                exact
                path="/"
                component={() => (
                    <Portfolio
                        workSelector={props.workSelector}
                        portfolio={props.portfolio}
                    />
                )}
            />
            <Route
                path="/work/:id"
                component={compProps => (
                    <Work
                        closeWork={props.closeWork}
                        portfolio={props.portfolio}
                        workSelector={props.workSelector}
                        workSelection={props.workSelection}
                        workId={props.workId}
                        {...compProps}
                    />
                )}
            />
        </div>
    </Router>
);

export default BodyRoute;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../ecosystems/home/home";
import LandingPage from "../ecosystems/landing/landing";


const RouterBoss = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </Router>
    );
};

export default RouterBoss;
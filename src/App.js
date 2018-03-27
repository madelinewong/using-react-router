import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";

import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect from="/login/*" to='/login'/>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/signup/:coupon" component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

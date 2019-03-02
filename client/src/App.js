import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import { Input, FormBtn } from "./components/Form";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Jumbotron />

          <form className="formSection">
              <Input
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn>
                Search
              </FormBtn>
          </form>

          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path={NoMatch} />
          </Switch>
      </div>
      </Router>
      );
  }
}

export default App;

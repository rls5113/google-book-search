import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./pages/Search"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./pages/Search"
import Saved from "./pages/Saved"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Header />
      </Router>
    );
  }
}

export default App;

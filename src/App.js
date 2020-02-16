import React, { Component } from "react";
import "./App.css";
import { AllPlants } from "./pages/all-plants/all-plants";
import { AddPlant } from "./pages/add-plant/add-plant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { UserCard } from "./user/user";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={AllPlants} />
          <Route path="/addPlant" component={AddPlant} />
          <Route path="/User" component={UserCard} />
        </Router>
      </div>
    );
  }
}

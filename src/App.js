import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Dashboard } from "./dashboard/dashboard";
import { MyPlants } from "./my-plants/myPlants";
import { MySchedule } from "./my-schedule/mySchedule";
import { AddPlant } from "./add-plant/addPlant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Container } from "reactstrap";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        
            <Header />
      

          <Route exact path="/" component={Dashboard} />
          <Route path="/myPlants" component={MyPlants} />
          <Route path="/mySchedule" component={MySchedule} />
          <Route path="/addPlant" component={AddPlant} />
        </Router>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import { AllPlants } from "./pages/all-plants/all-plants";
import { AddPlant } from "./pages/add-plant/add-plant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Image } from "./add-image/Image";
import { UserCard } from "./user/user";
import { Upload } from "./add-plant/upload";
import { DiscoverLabels } from "./add-plant/discoverLabels";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={AllPlants} />
          <Route path="/myPlants" component={AllPlants} />
          <Route path="/addPlant" component={AddPlant} />
          <Route path="/plants/:id/discover-labels" component={DiscoverLabels} />
          <Route path="/Image" component={Image} />
          <Route path="/User" component={UserCard} />
          <Route path="/upload" component={Upload} />
        </Router>
      </div>
    );
  }
}

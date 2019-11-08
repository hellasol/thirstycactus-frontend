import ReactDOM from "react-dom";
import React, { useState } from "react";
import api from "../api";
import { Col, FormGroup, Label, Input, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { AddPlant } from "../add-plant/addPlant";
import {MySchedule} from "../my-schedule/mySchedule";

export function Dashboard() {
  return (
    <div>
      <MySchedule />
      <AddPlant />
    </div>
  );
}

export default Dashboard;

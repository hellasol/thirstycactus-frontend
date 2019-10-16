import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import React from "react";
import { Route, Link } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export function Sidebar() {
  return (
    <Route
      render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            class="SideNavClass"
            onSelect={selected => {
              const to = "/" + selected;
              if (location.pathname !== to) {
                history.push(to);
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="">
              <NavItem eventKey="">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/">Dashboard</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="myPlants">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-device"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/myPlants/">My Plants</Link>{" "}
                </NavText>
              </NavItem>
              <NavItem eventKey="mySchedule">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-device"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/mySchedule/">My Schedule</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="addPlant">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-device"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/addPlant/">Add Plant</Link>
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
        </React.Fragment>
      )}
    />
  );
}

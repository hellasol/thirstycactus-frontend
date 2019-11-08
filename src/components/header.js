import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { userInfo } from "os";
import {UserName} from "../user/userName"

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { navCollapsed } = this.state;
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand href="/">Thirsty Cactus</NavbarBrand>
          <NavbarToggler className="navbar-toggle" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <Link to="/">Dashboard</Link> */}
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                {/* TODO: MAKE USER PAGE */}
                <UserName />
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manage Plants
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/addPlant/">Add Plant</Link>{" "}
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/mySchedule/">Schedule</Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link to="/myPlants/">My Plants</Link>{" "}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

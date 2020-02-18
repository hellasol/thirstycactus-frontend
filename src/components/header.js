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
import {UserName} from "../user/userName"
import { Row, Col } from 'reactstrap';

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
      <Row>
      <Col >
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand href="/">Thirsty Cactus</NavbarBrand>
          <NavbarToggler className="navbar-toggle" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/addPlant/">Add Plant</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">All Plants</NavLink>
              </NavItem>         
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </Col>
    </Row>
    );
  }
}

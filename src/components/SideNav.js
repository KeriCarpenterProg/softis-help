import React, { Component } from "react";
import { Icon, Navbar, NavItem } from "react-materialize";

class SideNav extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="grey darken-1"
          centerLogo="true"
          alignLinks="right"
          brand={
            <a className="brand-logo" href="#1">
              PlayStation Games
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
          sidenav={
            <div>
              <li>Playstation 5 Games</li>
              <li>More Information</li>
              <li>About Us</li>
            </div>
          }
        >
          <NavItem href="">Playstation 5 Games</NavItem>
          <NavItem href="">More Information</NavItem>
          <NavItem href="">About Us</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default SideNav;

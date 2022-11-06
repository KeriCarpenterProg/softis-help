import React, { Component } from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import FetchGameData from "./FetchGameData";
import DropDown from "./Dropdown";

class Header extends Component {
  render() {
    const {activeGame} = this.props;
    const {clickEvent} = this.props;
    return (
      <div>
        <Navbar
          className="grey darken-1"
          centerLogo={true}
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
              <li><DropDown
                activeGame={activeGame}
                clickEvent={clickEvent}
              /></li>
              <li><FetchGameData /></li>
            </div>
          }
        >

          <NavItem>
              <DropDown
                currentIndex={activeGame}
                clickEvent={clickEvent}
              />
          </NavItem>

         <NavItem>
              <FetchGameData />
         </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Header;

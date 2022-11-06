import React from "react";
import { Select } from "react-materialize";
import games from "../utils/helpers"

class DropDown extends React.Component {
  state = {
    games: games.map((i) => i.name),
  };

  render() {
    const { games } = this.state;
    const {clickEvent} = this.props;
    return (
      <div>
        {/* <section
          id="search"
          className="section section-search grey lighten-1 white-text center scrollspy"
        >
          <div className="container">
            <div className="row dropdown-row"> */}
                <Select
                  id="Select-45"
                  multiple={false}
                  onChange={(e) => {
                    clickEvent(e.target.value);
                  }}
                  options={{
                    classes: "",
                    dropdownOptions: {
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250,
                    },
                  }}
                  value={games[0]}
                >
                  {games.map((name, index) => <option key={index} value={index}>{name}</option> )}
                </Select>
            {/* </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default DropDown;

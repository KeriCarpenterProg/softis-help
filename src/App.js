import React from 'react';
import "./App.css";
import DropDown from './components/Dropdown';
import SideNav from "./components/SideNav";
import Text from './components/Text';
import PictureBox from './components/PictureBox';
import BottomOfPage from './components/BottomOfPage';

class App extends React.Component {
  state = {
    activeGame: 0
  }
  clickButton = (index) => {
    // console.log("I clicked the button and the index value is " + index);
    this.setState({ activeGame: index }, () =>
      console.log("This is the value of activeGame " + this.state.activeGame)
    );
  }
  
  render() {
    const {activeGame} = this.state;

    return (
      <div className="App">
        <SideNav />
        <DropDown
          currentIndex={activeGame}
          clickEvent={this.clickButton}
        />

        <Text activeGame={activeGame} />
        <PictureBox activeGame={activeGame}/>
        <BottomOfPage />
      </div>
    );
  }
}

export default App;

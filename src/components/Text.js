import React from "react";
import games from "../utils/helpers"

class Text extends React.Component {
  state = {
    screenshots: [],
    name: "",
    summary: "",
    coverNum: 0,
  };

  render() {
    const {activeGame} = this.props;
    const a = games[activeGame].screenshots;
    const urls = a.map((value, index) => (
      <div class="col s12 m4" key={index}>
        <img src={value} alt={value} width="100%" />
      </div>
    ));
    // console.log("what is the value of activeGame  " + this.state.activeGame);
    // const currentGame = this.state.activeGame;

    return (
      <div>
      <div className="parallax-background" style={{
        backgroundImage:
          "url(https://images.igdb.com/igdb/image/upload/t_original/ggo7l7nmnscwm2dxwxpm.jpg)",
      }}></div>
      <div className="section ">
        <div class="container">
          <div className="row">
            <div className="col s12 m4">
            <img src={games[activeGame].cover} alt={games[activeGame].name} width="100%"></img>
            </div>
          <div class="col s12 m8">
            <h1>{games[activeGame].name}</h1>
            <p>{games[activeGame].summary}</p>
            <p>Release Date: {games[activeGame].release}</p>
            <p>Platforms: {games[activeGame].platforms}</p>
            <p>Genre: {games[activeGame].genre}</p>
          </div>
        </div>
        </div>
        </div>
      <div className="section">
        <div class="container">
          <div class="row">
            <div class="col s12 m4">
              <div class="video-container">
                <iframe
                  title={games[activeGame].name}
                  width="560"
                  height="315"
                  src={games[activeGame].video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {urls}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Text;

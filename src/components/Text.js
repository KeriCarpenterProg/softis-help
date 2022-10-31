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
      <div className="col s12 m4" key={index}>
        <img src={value} alt={value} width="100%" />
      </div>
    ));
    // const c = "style={backgroundImage: \"url("+games[activeGame].screenshots[0]+")\",}"
    return (
      <div>
      {/* <div className="parallax-background" style={{
        backgroundImage:
          "url(https://images.igdb.com/igdb/image/upload/t_original/sc6qem.jpg)",
  }}></div> */}
      <div className="section ">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
            <img src={games[activeGame].cover} alt={games[activeGame].name} width="100%"></img>
            </div>
          <div className="col s12 m8">
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
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="video-container">
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

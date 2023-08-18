import React from "react";
import logo from "./logo.svg";
import "./App.css";

class FOotter extends React.Component {
  render() {
    return (
      <div className="footer">
        <h1>Made by Vasco Faria</h1>
        <p>React 101</p>
      </div>
    );
  }
}

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      imglink: null,
      loadedCharacter: false,
      name: null,
      height: null,
      wiki: null,
      masters: [],
    };
  }

  getNewCharacter() {
    const rnumber = Math.round(Math.random() * 88);
    console.log("get new character from a button");
    const url = `https://akabab.github.io/starwars-api/api/id/${rnumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const masters2 = data.masters || [];
        this.setState({
          imglink: data.image,
          name: data.name,
          height: data.height,
          wiki: data.wiki,
          masters: masters2,
          loadCharacter: true,
        });
        console.log(data);
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.loadCharacter && (
          <div>
            <img className="imgs" src={this.state.imglink} alt="photo" />
            <h1>Name: {this.state.name}</h1>
            <p>Height: {this.state.height}</p>
            <p>
              <a href={this.state.wiki}>Wiki</a>
            </p>

            <h2>Masters</h2>
            <ul>
              {Array.isArray(this.state.masters) ? (
                this.state.masters.map((m, index) => {
                  return <li key={index}>{m}</li>;
                })
              ) : (
                <li>No masters available</li>
              )}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StarWars />
      <FOotter />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

class UserProfile extends React.Component {
  state = { data: "" };

  componentDidMount() {
    fetch("https://melroune.github.io/starwars-api/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data
        });
      });
  }

  getChar(index) {
    var starChar = {};
    if (this.state.data) {
      starChar = this.state.data[2];
    }
    return starChar;
  }

  render() {
    const char = this.getChar(0);
    return (
      <div className="card bg-warning text-light">
        <img src={char.image} className="card-img-top" alt={char.name} />
        <div className="card-body">
          <h5 className="card-title">Name: {char.name}</h5>
          <p className="card-text">Height: {char.height}</p>
          <p className="card-text">Mass: {char.mass}</p>
          <p className="card-text">Gender: {char.gender}</p>
          <p className="card-text">Eye color: {char.eyeColor}</p>
          <p className="card-text">Species: {char.species}</p>
          <p className="card-text">Skin color: {char.skinColor}</p>
          <p className="card-text">Homeworld: {char.homeworld}</p>
        </div>
        <button
          onClick={() => this.props.setCurrentDisplay("search")}
          type="button"
          className="btn btn-light"
        >
          Search for Love
        </button>
      </div>
    );
  }
}

export default UserProfile;

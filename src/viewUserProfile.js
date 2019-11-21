import React from "react";
import "./App.css";

class UserProfile extends React.Component {
  state = { data: "" };

  render() {
    //console.log(this.props.currentProfile.name);
    return (
      <div className="card bg-warning text-light">
        <img
          src={this.props.currentProfile.image}
          className="card-img-top"
          alt={this.props.currentProfile.name}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {this.props.currentProfile.name}</h5>
          <p className="card-text">
            Height: {this.props.currentProfile.height}
          </p>
          <p className="card-text">Mass: {this.props.currentProfile.mass}</p>
          <p className="card-text">
            Gender: {this.props.currentProfile.gender}
          </p>
          <p className="card-text">
            Eye color: {this.props.currentProfile.eyeColor}
          </p>
          <p className="card-text">
            Species: {this.props.currentProfile.species}
          </p>
          <p className="card-text">
            Skin color: {this.props.currentProfile.skinColor}
          </p>
          <p className="card-text">
            Homeworld: {this.props.currentProfile.homeworld}
          </p>
        </div>
        <div className="btn container">
          <button className="btn btn-block btn-light">
            <i className="fa fa-heart"></i>{" "}
          </button>
          <button
            onClick={() => this.props.setCurrentDisplay("search")}
            type="button"
            className="btn btn-light"
          >
            Search for Love (MAY THE FORCE BE WITH YOU)
          </button>
          <button className="btn btn-block btn-light">
            <i className="fa fa-heart-broken"></i>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default UserProfile;

import React from "react";
// import axios from "axios";

class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      height: "",
      mass: "",
      gender: "",
      homeworld: "",
      image: "",
      eyeColor: "",
      skinColor: "",
      species: ""
    };
  }

  // componentDidMount() {
  //this.fetchCharacter();
  // }

  // fetchCharacter = () => {
  //   axios
  //     .get("https://melroune.github.io/starwars-api/api/all.json")
  //     .then(response => {
  //       //console.log(response);
  //       this.setState({
  //         data: response.data
  //       });
  //     });
  // };

  addProfile = () => {
    //create an obj based on the inputs
    var profile = {
      id: Math.round(Math.random() * 1000),
      name: this.state.name,
      height: this.state.height,
      mass: this.state.mass,
      gender: this.state.gender,
      homeworld: this.state.homeworld,
      image: this.state.image,
      eyeColor: this.state.eyeColor,
      skinColor: this.state.skinColor,
      species: this.state.species
    };
    //push this obj into data array
    return profile;
  };

  handleClickAdd = event => {
    event.preventDefault();
    var newProfile = this.addProfile();
    this.setState({ newProfile });
    // console.log(
    //   "button clicked ",
    //   newProfile,
    //   this.state.data.push(newProfile)
    // );
    this.props.setCurrentProfile(this.state);
    this.props.setCurrentDisplay("viewProfile");
  };

  // componentDidUpdate() {
  //   console.log(this.state.data);
  // }

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1 className="form text-warning">
          <span>[ </span> Sign Up <span> ]</span>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameField"
              aria-describedby="nameField"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="heightField">Height</label>
            <input
              type="text"
              className="form-control"
              id="heightField"
              aria-describedby="heightField"
              value={this.state.height}
              onChange={event => this.setState({ height: event.target.value })}
              placeholder="Your height"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="massField">Weight</label>
            <input
              type="text"
              className="form-control"
              id="massField"
              aria-describedby="massField"
              value={this.state.mass}
              onChange={event => this.setState({ mass: event.target.value })}
              placeholder="Your weight"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genderField">Gender</label>
            <input
              type="text"
              className="form-control"
              id="genderField"
              aria-describedby="genderField"
              value={this.state.gender}
              onChange={event => this.setState({ gender: event.target.value })}
              placeholder="Your gender"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="homeworldField">Homeworld</label>
            <input
              type="text"
              className="form-control"
              id="homeworldField"
              aria-describedby="homeworldField"
              value={this.state.homeworld}
              onChange={event =>
                this.setState({ homeworld: event.target.value })
              }
              placeholder="Your homeworld"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageField">Image</label>
            <input
              type="text"
              className="form-control"
              id="imageField"
              aria-describedby="imageField"
              value={this.state.image}
              onChange={event => this.setState({ image: event.target.value })}
              placeholder="Your image"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eyeColorField">Eye Colour</label>
            <input
              type="text"
              className="form-control"
              id="eyeColorField"
              aria-describedby="eyeColorField"
              value={this.state.eyeColor}
              onChange={event =>
                this.setState({ eyeColor: event.target.value })
              }
              placeholder="Your eye colour"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skinColorField">Skin Colour</label>
            <input
              type="text"
              className="form-control"
              id="skinColorField"
              aria-describedby="skinColorField"
              value={this.state.skinColor}
              onChange={event =>
                this.setState({ skinColor: event.target.value })
              }
              placeholder="Your skin colour"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="speciesField">Species</label>
            <input
              type="text"
              className="form-control"
              id="speciesField"
              aria-describedby="speciesField"
              value={this.state.species}
              onChange={event => this.setState({ species: event.target.value })}
              placeholder="Your species"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning font-weight-bold"
            onClick={this.handleClickAdd}
          >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default AddProfile;

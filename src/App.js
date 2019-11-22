import React from "react";
import axios from "axios";
import Search from "./Search";
import AddProfile from "./AddProfile";
import ViewUserProfile from "./ViewUserProfile";
import Welcome from "./Welcome";
import Header from "./Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentDisplay: "loading",
      registered: false,
      currentProfile: {}
    };
    // values for display: 'loading', 'register', 'search', 'viewProfile'
  }

  //TODO: if the user is registered, do not show the welcome screen, show the list

  componentDidMount() {
    //TODO:  check if there is data in localstorage

    // if there is, put it in the state

    // if there isn't, call the api and put it in the state, then in localstorage

    // fetch the data from the api
    axios
      .get("https://melroune.github.io/starwars-api/api//all.json")
      .then(response => {
        // set the result as state
        this.setState({ data: response.data });
      });
  }

  setCurrentDisplay = display => {
    this.setState({
      currentDisplay: display
    });
  };

  setRegistration = val => {
    this.setState({ registered: val });
  };

  setCurrentProfile = user => {
    // console.log("profile set");
    this.setState({ currentProfile: user });
  };

  renderInterface() {
    if (this.state.currentDisplay === "loading") {
      return <Welcome setCurrentDisplay={this.setCurrentDisplay} />;
    }
    if (this.state.currentDisplay === "register") {
      return (
        <div>
          <Header />
          <AddProfile
            setCurrentProfile={this.setCurrentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
            setRegistration={this.setRegistration}
          />
        </div>
      );
    }
    if (this.state.currentDisplay === "search") {
      return (
        <div>
          <Header />
          <Search
            data={this.state.data}
            setCurrentProfile={this.setCurrentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
          />
        </div>
      );
    }
    if (this.state.currentDisplay === "viewProfile") {
      return (
        <div>
          <Header />
          <ViewUserProfile
            currentProfile={this.state.currentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
          />
        </div>
      );
    }
  }

  render() {
    // console.log(this.state.currentDisplay);
    return <div className="App">{this.renderInterface()}</div>;
  }
}

export default App;

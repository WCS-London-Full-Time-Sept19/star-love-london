import React from "react";
import axios from "axios";
import Search from "./Search";
import AddProfile from "./AddProfile";
import ViewUserProfile from "./viewUserProfile";
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

  componentDidMount() {
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

  setRegistration = () => {
    this.setState({ registered: true });
  };

  setCurrentProfile = user => {
    console.log("profile set");
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
    console.log(this.state.currentDisplay);
    return <div className="App">{this.renderInterface()}</div>;
  }
}

export default App;

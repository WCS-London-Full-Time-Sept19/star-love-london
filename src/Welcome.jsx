import React from "react";
import "./Welcome.css";

const Welcome = props => {
  return (
    <div>
      <div
        id="background"
        className="d-flex flex-column justify-content-around"
      >
        <h1 id="welcome-heading" className="d-1 text-warning text-center">
          Star Love
        </h1>
        <div id="buttonContainer">
          <button
            onClick={() => props.setCurrentDisplay("register")}
            className="btn btn-warning text-light"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

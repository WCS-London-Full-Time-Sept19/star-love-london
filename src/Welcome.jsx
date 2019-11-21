import React from "react";

const Welcome = props => {
  return (
    <div>
      <div id="background">
        <button
          onClick={() => props.setCurrentDisplay("register")}
          className="btn btn-warning"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Welcome;

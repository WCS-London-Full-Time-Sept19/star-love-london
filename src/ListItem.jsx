import React from "react";

const ListItem = props => {
  return (
    <div className="card bg-warning text-light mb-3">
      <div className="row no-gutters">
        <div className="col-4">
          <img src={props.image} className="card-img" alt={props.name} />
        </div>
        <div className="col-8">
          <div className="card-body d-flex flex-direction-row justify-content-between">
            <div className="">
              <h5 className="card-title">{props.name}</h5>
              <div className="card-text">
                <small className="text-light">Species: {props.species}</small>
              </div>
              <div className="card-text">
                <small className="text-light">
                  Homeworld: {props.homeworld}
                </small>
              </div>
            </div>
            <div>
              <button className="btn btn-light">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

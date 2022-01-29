import React from "react";
import "./Card.css";
const Cards = ({ results }) => {
  let display;
  // console.log("array" ,results);
  if (results) {
    display = results.map((x) => {
      const { image, name, location, status } = x;
      return (
        <div key={x.id} className="col-4 position-relative mb-4">
          <div className="border border-2 border-primary rounded-3">
            <img src={image} alt="ll" className="img-fluid" />
            <div className="content p-3">
              <div className="fs-5 fw-bold">{name}</div>
              <div>
                <div className="fs-5">Last Location</div>
                <div className="fs-6">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === "Alive") {
                return (
                  <div className="position-absolute badge bg-success">
                    {status}
                  </div>
                );
              } else if (status === "Dead") {
                return (
                  <div className="position-absolute badge bg-danger">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className="position-absolute badge bg-warning">
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </div>
      );
    });
  } else {
    display = "No data found";
  }
  return <>{display}</>;
};

export default Cards;

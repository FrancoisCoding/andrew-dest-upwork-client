import React, { useState, useEffect } from "react";

const AllDestinations = ({
  destinations,
  destInput,
  handleChange,
  handleCheck,
}) => {
  const [destNames, setDestNames] = useState();

  useEffect(() => {
    if (destinations) {
      const destNames = [];
      destinations.slice(1).map((dest) => destNames.push(dest.B));
      if (destNames.length > 0) {
        const uniqueDest = [...new Set(destNames)];
        setDestNames(uniqueDest);
      }
    }
  }, [destinations]);

  console.log("UNIQUE", destNames);

  return (
    <div className="container">
      <div className="destination-fill">
        <div className="destination-fill-left">
          <p className="input-label">Country of Passport</p>
          <input
            type="text"
            className="destination-input"
            name="country"
            value={destInput.country}
            onChange={handleChange}
          />
        </div>
        <div className="destination-fill-right">
          <p className="input-label">Destination</p>
          <input
            type="text"
            className="destination-input"
            name="destination"
            value={destInput.destination}
            onChange={handleChange}
            disabled
          />
          <div className="destination-fill-check">
            <input
              type="checkbox"
              name="check"
              value={destInput.check}
              onChange={handleCheck}
            />
            <p className="input-label">All Open Destinations</p>
          </div>
        </div>
      </div>

      <div className="destination-border">
        <h1>
          You can visit*
          <span className="green">#</span>* countries at this moment
        </h1>
      </div>

      {destNames ? (
        <div className="alldestination-other">
          <div className="destination-list">
            {destNames.map((dest) => (
              <div>{dest}</div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AllDestinations;

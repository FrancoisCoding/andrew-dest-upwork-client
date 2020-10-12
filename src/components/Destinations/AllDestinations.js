import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDestinations,
  updateCountry,
  updateCheck,
  updateDestination,
} from "../../actions";

const AllDestinations = () => {
  const [destNames, setDestNames] = useState();
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  console.log("Redux State", state);
  const {
    destinations,
    countryInput,
    destinationInput,
    checkInput,
    output,
    textObject,
    outputInfo,
  } = state;

  useEffect(() => {
    dispatch(setDestinations());
  }, []);

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

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "country") {
      dispatch(updateCountry(value));
    } else if (name === "destination") {
      dispatch(updateDestination(value));
    } else {
      dispatch(updateCheck(value));
    }
  };

  return (
    <div className="container">
      <div className="destination-fill">
        <div className="destination-fill-left">
          <p className="input-label">Country of Passport</p>
          <input
            type="text"
            className="destination-input"
            name="country"
            value={countryInput}
            onChange={handleChange}
          />
        </div>
        <div className="destination-fill-right">
          <p className="input-label">Destination</p>
          <input
            type="text"
            className="destination-input"
            name="destination"
            value={destinationInput}
            onChange={handleChange}
            disabled
          />
          <div className="destination-fill-check">
            <input
              type="checkbox"
              name="check"
              onChange={handleChange}
              checked
            />
            <p className="input-label">All Open Destinations</p>
          </div>
        </div>
      </div>

      <div className="destination-border">
        <h1>
          You can visit{" "}
          <span className="green">{199}</span> countries at
          this moment
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

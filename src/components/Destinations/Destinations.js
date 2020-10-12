import React, { useState, useEffect } from "react";
import "./Destinations.css";
import AllDestinations from "./AllDestinations";
import { useSelector, useDispatch } from "react-redux";
import {
  setDestinations,
  setOutput,
  updateCountry,
  updateCheck,
  updateDestination,
  searchDest,
  setTextObject,
  setTextObjectVF,
  setTextObjectVOA,
  setTextObjectETA,
  setTextObjectVR,
} from "../../actions";

const Destinations = (props) => {
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

  const [suggestion, setSuggestion] = useState();

  useEffect(() => {
    dispatch(setDestinations());
  }, []);

  useEffect(() => {
    console.log("DESTINATIONS", destinations);
    console.log("COUNTRY", countryInput);
    if (destinations && countryInput != "") {
      console.log("SETTING OUTPUT");
      dispatch(setOutput());
      const filterDestinations = destinations.filter(
        (x) =>
          x.A.toLowerCase().includes(`${countryInput}`) &&
          x.B.toLowerCase().includes(`${destinationInput}`)
      )[0];
      setSuggestion(filterDestinations);
    }
  }, [countryInput, destinationInput, checkInput]);

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

  const search = (e) => {
    console.log("SEARCH RUNNING");
    dispatch(searchDest());
    if (output) {
      if (output.C === "VF") {
        dispatch(setTextObjectVF());
      } else if (output.C === "VOA") {
        dispatch(setTextObjectVOA());
      } else if (output.C === "ETA") {
        dispatch(setTextObjectETA());
      } else if (output.C === "VR") {
        dispatch(setTextObjectVR());
      } else {
        dispatch(setTextObject());
      }
    }
  };

  return (
    <>
      {state.checkInput ? (
        <AllDestinations
          destinations={destinations}
          handleChange={handleChange}
        />
      ) : (
        <div className="container">
          <div className="destination-top">
            <div className="destination-fill">
              <div className="destination-fill-left">
                <p className="input-label">Country of Passport</p>
                <input
                  type="text"
                  className="destination-input"
                  name="country"
                  value={countryInput}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {suggestion ? (
                  <p className="suggestion">{suggestion.A}</p>
                ) : null}
              </div>
              <div className="destination-fill-right">
                <p className="input-label">Destination</p>
                <input
                  type="text"
                  className="destination-input"
                  name="destination"
                  value={destinationInput}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {suggestion ? (
                  <p className="suggestion">{suggestion.B}</p>
                ) : null}
                <div className="destination-fill-check">
                  <input
                    type="checkbox"
                    name="check"
                    value={checkInput}
                    onChange={handleChange}
                  />
                  <p className="input-label">All Open Destinations</p>
                </div>
              </div>
            </div>
            {destinationInput && countryInput ? (
              <div className="destination-search-btn" onClick={search}>
                Search
              </div>
            ) : null}
          </div>

          <div className="destination-border">
            <h1>
              { destinationInput.length> 0 ? destinationInput.charAt(0).toUpperCase() + destinationInput.slice(1) : 'Destination'} have
              <span className="green"> {textObject.borders} </span>for you to
              visit
            </h1>
          </div>
          <div className="destination-info">
            <div className="destination-info-left">
              <h1>
                Visa Requirement:
                <span className={textObject.vColor}>{textObject.visa}</span>
              </h1>
              {textObject.visa === "Visa-free" ? (
                <p>
                  You are permitted to stay up to{" "}
                  <span className="green">{output.C}</span> days{" "}
                  <span className="green">Visa-free</span>
                </p>
              ) : null}
              <h1>
                Quarantine Required:
                <span className={textObject.color}>
                  {textObject.quarantine}
                </span>
              </h1>
              {textObject.visa === "Visa Required" ? (
                <p>
                  Required to quarantine for{" "}
                  <span className="red">{outputInfo ? outputInfo.D : "#"}</span>{" "}
                  days
                </p>
              ) : null}
            </div>
            <div className="destination-info-right">
              <h1>
                Covid Test Required:
                <span className={textObject.color}>{textObject.covid}</span>
              </h1>
              {textObject.visa === "Visa Required" ? (
                <p>
                  Require a Covid test{" "}
                  <span className="red">{outputInfo ? outputInfo.C : "#"}</span>{" "}
                  hours before arriving
                </p>
              ) : null}
              <h1>
                Temperature Test:
                <span className={textObject.color}>{textObject.temp}</span>
              </h1>
              {textObject.visa === "Visa Required" ? (
                <p>Required to take a temperature test on arrival</p>
              ) : null}
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default Destinations;

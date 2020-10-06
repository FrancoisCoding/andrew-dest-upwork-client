import React, { useState, useEffect } from "react";
import "./Home.css";
import { useHistory, Link } from "react-router-dom";
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

const Home = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const {
    destinations,
    countryInput,
    destinationInput,
    checkInput,
    output,
  } = state;

  const [suggestion, setSuggestion] = useState();

  const history = useHistory();

  useEffect(() => {
    dispatch(setDestinations());
  }, []);

  useEffect(() => {
    if (destinations && countryInput != "") {
      dispatch(setOutput());
      const filterDestinations = destinations.filter((x) =>
        x.A.toLowerCase().includes(`${countryInput}`)
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
    dispatch(searchDest());
    if (output) {
      if (output.C === "VF") {
        dispatch(setTextObjectVF());
        history.push("/destinations");
      } else if (output.C === "VOA") {
        dispatch(setTextObjectVOA());
        history.push("/destinations");
      } else if (output.C === "ETA") {
        dispatch(setTextObjectETA());
        history.push("/destinations");
      } else if (output.C === "VR") {
        dispatch(setTextObjectVR());
        history.push("/destinations");
      } else {
        dispatch(setTextObject());
        history.push("/destinations");
      }
    }
  };

  return (
    <div>
      <main className="container">
        <div className="home-card">
          <h1 className="home-card-title">What borders are opened?</h1>
          <p className="home-card-subtitle">
            "Hours of Travel Research Down to one click"
          </p>
          <div className="home-card-fill">
            <div className="home-card-fill-left">
              <p className="input-label">Country of Passport</p>
              <input
                type="text"
                className="home-card-input"
                name="country"
                value={countryInput}
                onChange={handleChange}
                autoComplete="off"
              />
              {suggestion ? <p className="suggestion">{suggestion.A}</p> : null}
            </div>
            <div className="home-card-fill-right">
              <p className="input-label">Destination</p>
              <input
                type="text"
                className="home-card-input"
                name="destination"
                value={destinationInput}
                onChange={handleChange}
                autoComplete="off"
              />
              <div className="home-card-fill-check">
                <input type="checkbox" name="check" onChange={handleChange} />
                <p className="input-label">All Open Destinations</p>
              </div>
            </div>
          </div>
          {destinationInput && countryInput ? (
            <div className="home-card-btn" onClick={search}>
              Search
            </div>
          ) : null}
        </div>

        <div className="home-card-bottom">
          <div className="home-card-bottom-left">
            <p>
              With up-to-date requirements for 195+ countires, Visalite removes
              all your frustration and time doing the not-so-fun part of
              travelling
            </p>
          </div>
          <div className="home-card-bottom-right">
            <p>
              Be the first to know about Visalite's exciting updates, borders
              opening, travel tips and more!
            </p>
            <div className="home-card-bottom-email">
              <input
                type="text"
                placeholder="Enter your email address"
                className="home-card-bottom-input"
              />
              <div className="home-card-bottom-btn">Subscribe</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

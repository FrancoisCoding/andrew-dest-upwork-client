import React, { useState, useEffect } from "react";
import "./Destinations.css";
import firebaseDest from "../../firebaseDest";
import destInfo from "../../destInfo";
import AllDestinations from "./AllDestinations";

const Destinations = () => {
  const [destinations, setDestinations] = useState();
  const [destInput, setDestInput] = useState({
    country: "",
    destination: "",
    check: false,
  });
  const [output, setOutput] = useState();
  const [outputInfo, setOutputInfo] = useState();
  const [textObject, setTextObject] = useState({
    borders: "Opened Borders",
    visa: "",
    quarantine: "",
    covid: "",
    temp: "",
    vColor: "green",
    color: "green",
  });

  const databaseRef = firebaseDest.database().ref();
  console.log("Output Info", outputInfo);

  useEffect(() => {
    databaseRef.on("value", (snapshot) => {
      setDestinations(snapshot.val());
    });
  }, []);

  useEffect(() => {
    if (destinations && destInput.country != "") {
      setOutput(
        destinations.filter(
          (x) =>
            x.A.toLowerCase().includes(`${destInput.country}`) &&
            x.B.toLowerCase().includes(`${destInput.destination}`)
        )[0]
      );
    }
  }, [destInput]);

  useEffect(() => {
    databaseRef.on("value", (snapshot) => {
      setDestinations(snapshot.val());
    });
  }, []);

  useEffect(() => {
    if (output) {
      if (output.C === "VF") {
        setTextObject({
          borders: "Opened Borders",
          visa: "Visa-free",
          quarantine: "No",
          covid: "No",
          temp: "No",
        });
      } else if (output.C === "VOA") {
        setTextObject({
          borders: "Opened Borders",
          visa: "Visa on Arrival",
          quarantine: "No",
          covid: "No",
          temp: "No",
          vColor: "yellow",
          color: "green",
        });
      } else if (output.C === "ETA") {
        setTextObject({
          borders: "Opened Borders",
          visa: "Electronic Travel Authority",
          quarantine: "No",
          covid: "No",
          temp: "No",
          vColor: "yellow",
          color: "green",
        });
      } else if (output.C === "VR") {
        setTextObject({
          borders: "Opened Borders",
          visa: "Visa Required",
          quarantine: "Yes",
          covid: "Yes",
          temp: "Yes",
          vColor: "red",
          color: "red",
        });
      } else {
        setTextObject({
          borders: "Opened Borders",
          visa: "Visa-free",
          quarantine: "No",
          covid: "No",
          temp: "No",
        });
      }
    }
  }, [output]);

  useEffect(() => {
    if (output) {
      let foundObj = destInfo.find((o) => o.A == output.A);
      setOutputInfo(foundObj);
    }
  }, [destInput]);

  const handleChange = (e) => {
    setDestInput({ ...destInput, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setDestInput({ ...destInput, [e.target.name]: e.target.checked });
  };

  return (
    <>
      {destInput.check ? (
        <AllDestinations
          destinations={destinations}
          destInput={destInput}
          handleChange={handleChange}
          handleCheck={handleCheck}
        />
      ) : (
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
              *Destination country* have
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
                  <span className="green">##</span> days{" "}
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

          <div className="destination-other">
            <h1>Other destinations that you can visit now:</h1>
            <div className="destination-list"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Destinations;

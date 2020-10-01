import React from "react";
import "./Home.css";

const Home = () => {
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
              <input type="text" className="home-card-input" />
            </div>
            <div className="home-card-fill-right">
              <p className="input-label">Destination</p>
              <input type="text" className="home-card-input" />
              <div className="home-card-fill-check">
                <input type="checkbox" />
                <p className="input-label">All Open Destinations</p>
              </div>
            </div>
          </div>
          <div className="home-card-btn">Search</div>
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

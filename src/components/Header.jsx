import React from "react";
import "../css/styles.css";
import "../css/utilities.css";
const Header = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to
            static websites for individuals. Fill out the form to try a demo of
            our platform. <br />
            <a href="features.html" className="btn btn-outline">
              Read More
            </a>
          </p>
        </div>
        <div className="showcase-form card">
          <h2>Request a Demo</h2>
          <form action>
            <div className="form-control">
              <input
                className="inputFileds"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                className="inputFileds"
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                className="inputFileds"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              type="submit"
              defaultValue="Send"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;

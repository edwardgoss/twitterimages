import React from "react";
import "./Landing.css";
import github from "./img/github.png";

function Landing(props) {
  const { handleSearch, searchQuery, handleChange } = props;

  return (
    <div className="main">
      <div className="jumbotron bg-white text-center p-0">
        <h1 className="display-2 text-primary">Twitter Images</h1>
        <div className="form-group has-search">
          <form onSubmit={handleSearch}>
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              value={searchQuery}
              onChange={handleChange}
              autoFocus={true}
              required
            ></input>
            <div class="invalid-feedback">
              Please enter less than 10 keywords.
            </div>
            <button type="button" className="btn btn-outline-primary mt-4">
              Search Twitter
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-light d-flex justify-content-between">
        <div className="text-primary mt-3">
          <a
            href="https://github.com/edwardgoss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              height="32px"
              className="mr-2 ml-2 mb-1"
              alt="github"
            />
            Project Details
          </a>
        </div>
        <div className="text-primary footer-div-right">
          Concept by Edward Goss
        </div>
      </footer>
    </div>
  );
}

export default Landing;

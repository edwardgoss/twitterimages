import React, { useEffect, useState, useLayoutEffect } from "react";
import "./TweetList.css";
import Axios from "axios";

function TweetList(props) {
  const {
    searchResults,
    setSearchResults,
    handleSearch,
    searchQuery,
    handleChange,
    search,
  } = props;

  useEffect(() => {
    Axios.get("http://104.131.119.93:5000/search/" + search)
      .then((response) => {
        setSearchResults(response.data.statuses);
      })
      .catch(console.error);
  }, [search]);

  // console.log(search);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary justify-content-between">
        <a className="navbar-brand text-white font-weight-bold" href="/">
          Twitter Images
        </a>
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2"
            id="search"
            type="search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleChange}
            required
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search Twitter
          </button>
        </form>
      </nav>

      <div className="d-flex flex-wrap justify-content-center">
        {searchResults.map(
          (results) =>
            results.entities.media && (
              <a
                className="img-hover-zoom"
                href={results.entities.media[0].url}
                key={results.id_str}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://awbztncoco.cloudimg.io/v7/${results.entities.media[0].media_url}?func=crop&width=295&height=295`}
                  alt={results.text}
                />
                <div>{`@${results.user.screen_name}: ${results.text}`}</div>
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default TweetList;

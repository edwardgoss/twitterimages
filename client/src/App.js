import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TweetList from "./TweetList";
import Landing from "./Landing";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let newSearchQuery = searchQuery.replace(/#/g, "%23").replace(/@/g, "%3A").toLowerCase()
    setSearch(newSearchQuery);
    window.location = `/search/${newSearchQuery}`;
  };

  return (
    <div>
      <Router>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Landing
              searchResults={searchResults}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              handleChange={handleChange}
              search={search}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/search/:query"
          render={(routeProps) => (
            <TweetList
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              handleChange={handleChange}
              search={routeProps.match.params.query}
              {...routeProps}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;

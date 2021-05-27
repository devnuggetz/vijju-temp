import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="search">
      <input className="search-box" placeholder="Search"></input>
      <div className="buttons">
        <button className="button">Submit</button>
        <button className="button">Report Error</button>
      </div>
    </div>
  );
}

export default Search;

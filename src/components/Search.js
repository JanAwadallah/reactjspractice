import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  const onSearchChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Wikipedia</label>
          <input
            name="search"
            placeholder="search ..."
            value={term}
            onChange={(e) => onSearchChange(e)}
          />
        </div>
      </div>
      <div className="container">
        <SearchResults results={results} />
      </div>
    </div>
  );
}

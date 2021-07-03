import React from "react";

export default function SearchResults({ results }) {
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            target="blank"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          >
            more...
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{renderedResults}</div>;
}

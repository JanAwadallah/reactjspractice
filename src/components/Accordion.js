import React, { useState } from "react";
import "./component.css";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const collapseAll = () => {
    setActiveIndex(null);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    const hiden = index !== activeIndex ? "hiden" : "";
    return (
      <React.Fragment key={item.title}>
        <i
          className="angle up icon collapse"
          id={hiden}
          onClick={() => collapseAll()}
        ></i>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}

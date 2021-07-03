import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Translate from "./components/Translate";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "Quis in nostrud ex id minim pariatur nulla elit. Ullamco officia magna elit officia Lorem. Duis mollit dolor tempor ullamco in excepteur labore in pariatur minim id incididunt. Labore consectetur minim do ut. Magna proident nisi duis reprehenderit elit non Lorem laborum anim. Pariatur occaecat excepteur aliqua nisi reprehenderit.",
  },
  {
    title: "Why use React?",
    content:
      "Quis in nostrud ex id minim pariatur nulla elit. Ullamco officia magna elit officia Lorem. Duis mollit dolor tempor ullamco in excepteur labore in pariatur minim id incididunt. Labore consectetur minim do ut. Magna proident nisi duis reprehenderit elit non Lorem laborum anim. Pariatur occaecat excepteur aliqua nisi reprehenderit.",
  },
  {
    title: "How do you use React?",
    content:
      "Quis in nostrud ex id minim pariatur nulla elit. Ullamco officia magna elit officia Lorem. Duis mollit dolor tempor ullamco in excepteur labore in pariatur minim id incididunt. Labore consectetur minim do ut. Magna proident nisi duis reprehenderit elit non Lorem laborum anim. Pariatur occaecat excepteur aliqua nisi reprehenderit.",
  },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  const status = showDropdown ? "Hide" : "Show";

  return (
    <div className={`ui container mt5`}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/wikisearch">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <br />
      <br />
    </div>
  );
};

import React, { useState } from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointer menu">
      <Link href="/" className={`item`}>
        Accordion
      </Link>
      <Link href="/wikisearch" className={`item`}>
        Search Wikipedia
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;

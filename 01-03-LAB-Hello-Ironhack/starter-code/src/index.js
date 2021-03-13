import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const iconSize = "100px";

const nav = (
  <nav className="navbar">
    <img src="./images/ironhack-logo.svg" alt="Ironhack Logo" />
    <button className="navbar-btn">
      <img src="./images/menu-top.svg" alt="Menu" />
    </button>
  </nav>
);

const header = (
  <div className="content-left">
    <h1>Say hello to React.js</h1>
    <p>
      You will learn a Frontend framework from scratch, to become a Ninja
      Developer.
    </p>
    <button className="btn btn-white">Awesome!</button>
  </div>
);

const text = {
  icon1: {
    title: "Declarative",
    desc: "React makes it painless to create interactive UIs."
  },
  icon2: {
    title: "Components",
    desc: "Build encapsulated components that manage their state."
  },
  icon3: {
    title: "Single-Way",
    desc: "A set of immutable values are passed to the component's."
  },
  icon4: {
    title: "JSX",
    desc: "Statically-typed designed to run on modern browsers."
  }
};

const features = (
  <ul className="content-list">
    <li>
      <img width={iconSize} src="./images/icon1.png" alt={text.icon1.title} />
      <h4>{text.icon1.title}</h4>
      <p>{text.icon1.desc}</p>
    </li>
    <li>
      <img width={iconSize} src="./images/icon2.png" alt={text.icon2.title} />
      <h4>{text.icon2.title}</h4>
      <p>{text.icon2.desc}</p>
    </li>
    <li>
      <img width={iconSize} src="./images/icon3.png" alt={text.icon3.title} />
      <h4>{text.icon3.title}</h4>
      <p>{text.icon3.desc}</p>
    </li>
    <li>
      <img width={iconSize} src="./images/icon4.png" alt={text.icon4.title} />
      <h4>{text.icon4.title}</h4>
      <p>{text.icon4.desc}</p>
    </li>
  </ul>
);

const content = (
  <div>
    <div className="content-top">
      <div className="content">
        {nav}
        {header}
      </div>
    </div>
    <div className="content">{features}</div>
  </div>
);
ReactDOM.render(content, document.getElementById("root"));

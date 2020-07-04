import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="head">
          <img src="images/head.png" alt="picture of protein calculator" />
          <span>
            <strong>Protein Calculator</strong>
          </span>
          <span>
            <i>"...your best fitness mate"</i>
          </span>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Calculator
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <div className="cleaner" />
          </ul>
        </nav>
      </header>
    );
  }
}

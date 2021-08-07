// imports.....................................................
import "./footer.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">
            <Link to="/home">
              {/* <img src={logo} width="270" height="100"></img> */}
              Explorer
            </Link>
          </h1>
          <h2>Contact</h2>
          <div>
            45.4215° N, 75.6972° W | Ottawa, CA
            <br />
            <a
              className="footer__btn"
              href="mailto:explorer.guide.me@gmail.com"
            >
              Email Us
            </a>
          </div>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <ul className="nav__ul">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/DACK-OF-ALL-TRADES/explorer"
                >
                  <Icon name="github" size="big" style={{ margin: "0.5rem" }} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:explorer.guide.me@gmail.com"
                >
                  <Icon name="mail" size="big" style={{ margin: "0.5rem" }} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/ToddKel69978509"
                >
                  <Icon
                    name="twitter"
                    size="big"
                    style={{ margin: "0.5rem" }}
                  />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Find your ideal travel spot</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link to="/top10">Explorer Top 10</Link>
              </li>
              <li>
                <Link to="/Europe">Europe</Link>
              </li>
              <li>
                <Link to="/Asia">Asia</Link>
              </li>
              <li>
                <Link to="/NorthAmerica">North America</Link>
              </li>
              <li>
                <Link to="/SouthAmerica">South America</Link>
              </li>
              <li>
                <Link to="/Africa">Africa</Link>
              </li>
              <li>
                <Link to="/Oceania">Oceania</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a
                  href="https://github.com/DACK-OF-ALL-TRADES/explorer/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.termsfeed.com/live/7cacca9f-0965-4509-903d-17a5f0e327fc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>
            &copy; 2021 <span>Explorer</span>. All rights reserved.
          </p>
          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> from earth.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import "./FooterStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="leftfoot">
          <div>
            <Link to="/"><h1  id="logoTxtSize">Lau Family Recipes</h1></Link>
          </div>
          <div className="social">
            <Socials />
          </div>
          <div>
            <h4 className="cpy">© 2022-2023 Jeremy Lau</h4>
          </div>
        </div>

        <div className="rightfoot">
          <h5 id="findapage">Find a page</h5>
              <div className="footerLinkDiv">
                <Link to="/"><h6 id="hovFooterText">Home</h6></Link>
              </div>
            <h5>
              <div className="footerLinkDiv">
                <Link to="/recipes"><h6 id="hovFooterText">Recipes</h6></Link>
              </div>
            </h5>
            <h5>
              <div className="footerLinkDiv">
                <Link to="/about"><h6 id="hovFooterText">About</h6></Link>
              </div>
            </h5>
            <h5>
              <div className="footerLinkDiv">
              <Link to="/contact"><h6 id="hovFooterText">Contact</h6></Link>
              </div>
            </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer;
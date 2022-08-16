import React from "react";
import { mediaPath } from "../App";

const Footer = () => {
    return (
      <footer className="scene">
          <article className="content">
              <div id="socialmedia">
                  <ul className="group">
                      <li>
                          <a href="https://twitter.com">
                              <img className="icon" src={`${mediaPath}/socialmedia/twitter.png`} alt="icon for twitter"/>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com">
                              <img className="icon" src={`${mediaPath}/socialmedia/facebook.png`} alt="icon for facebook"/>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com">
                              <img className="icon" src={`${mediaPath}/socialmedia/youtube.png`} alt="icon for youtube"/>
                          </a>
                      </li>
                  </ul>
              </div>
          </article>
      </footer>
    );
};

export default Footer;
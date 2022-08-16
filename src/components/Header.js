import React, { useState, useEffect } from 'react';
import {apiEndpoint, mediaPath} from "../App";

const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);
    const loadMenuLinksData = async () => {
        // query API gateway
        const response = await fetch( apiEndpoint + '/menu_links');
        let jsonData = await response.json();
        // assign response to state variable
        setMenuLinksData(jsonData);
    };

    useEffect(() => {
        loadMenuLinksData();
    }, []);

    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                  <h1>Landon Hotel</h1>
                  <h2>West London</h2>
                  <p>
                      <a href="#welcome">
                          <img src={`${mediaPath}/misc/arrow.png`} alt="down arrow"/>
                      </a>
                  </p>
                </div>
            </article>

            <nav id="nav">
              <div className="navbar">
                  <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                  <ul>
                      {
                          menuLinksData.map((link) =>
                            <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                          )
                      }
                  </ul>
              </div>
            </nav>
        </header>
    );
};

export default Header;
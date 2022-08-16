import React, {useEffect, useState} from "react";
import {apiEndpoint} from "../App";

const Welcome = () => {
    const [welcomeImages, setWelcomeImages] = useState([]);
    const loadWelcomeImages = async () => {
        // query API gateway
        const response = await fetch(apiEndpoint + '/welcome_images');
        let jsonData = await response.json();
        // assign response to state variable
        setWelcomeImages(jsonData);
    };

    useEffect(() => {
        loadWelcomeImages();
    }, []);

    return (
      <div className="scene" id="welcome">
          <article className="content">
              <div className="gallery">
                  {
                      welcomeImages.map((image) =>
                        <img className={image.class} src={image.src} alt={image.alt} />
                      )
                  }
              </div>
              <h1>Welcome to the Landon&nbsp;Hotel</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End
                  neighborhood has something for everyone—from theater to dining to historic sights. And the
                  not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks,
                  food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End,
                  browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy
                      information sheet</a>.</p>
          </article>
      </div>
    );
}

export default Welcome;
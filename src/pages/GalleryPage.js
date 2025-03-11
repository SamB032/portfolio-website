import React from 'react';
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {images} from "../helpers/PhotoList";
import "../styles/Photo.css";

function GalleryPage() {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => setIndex(index);

  return (
    <div>
      <div className="photos">
        <h2 className="galleryHeader">Gallery</h2>

        <p className="content text"> 
            These photos were taken using a modern smartphone.
            Feel free to use these if you want.
        </p>
      </div>
    
      <div>
        <Gallery 
          images={images} 
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={210}
        />
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  )
}

export default GalleryPage;

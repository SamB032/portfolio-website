import React from 'react';
import { Gallery } from "react-grid-gallery";
import PhotoItem from "../components/PhotoItem";
import {PhotoList, images} from "../helpers/PhotoList";
import "../styles/Photo.css";

function GalleryPage() {
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
        <Gallery images={images} />
      </div>
    </div>
  )
}

export default GalleryPage;

import React from 'react';
import PhotoItem from "../components/PhotoItem";
import {PhotoList} from "../helpers/PhotoList";
import "../styles/Photo.css";

function Photography() {
    return (
        <div className="photos">
            <h1>My photos</h1>
            <div className="photoList">
                {PhotoList.map((photo) => {
                    return (
                        <PhotoItem image={photo.image}/>
                    )
                })  }
            </div>
        </div>

    )
}

export default Photography;
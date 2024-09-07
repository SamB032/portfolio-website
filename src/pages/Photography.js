import React from 'react';
import PhotoItem from "../components/PhotoItem";
import {PhotoList} from "../helpers/PhotoList";
import "../styles/Photo.css";

function Photography() {
    return (
        <div className="photos">
            <p className="content"> 
                Photography is one of my hobbies. I thought it is a good idea to dedicate a page
                on this website to displaying photos. Most of these were taken using a modern smartphone. 
                It's amazing how good modern smartphones are. Feel free to use these if you want.
            </p>
            <div className="photoList">
                {PhotoList.map((photo, i) => (
                    <PhotoItem key={`PhotoItem-${i}`} image={photo} />
                ))}
            </div>
        </div>

    )
}

export default Photography;
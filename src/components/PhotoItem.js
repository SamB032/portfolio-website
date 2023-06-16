import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css"

function PhotoItem({image}) {
    return (
        <div className="photoItem">
            <LazyLoadImage effect="opacity" src={image} alt="Photo" className="bgImage"/>
        </div>
    );
}

export default PhotoItem;
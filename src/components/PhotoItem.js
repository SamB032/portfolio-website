import React from "react";

function PhotoItem({image}) {
    return (
        <div className="photoItem">
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        </div>
    );
}

export default PhotoItem;
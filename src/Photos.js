import React from "react";
import "./css/Photos.css";

export default function Photos(props) {
  //console.log(props.photos);
  if (props.photos) {
    return (
      <div className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                  src={photo.src.original}
                  alt="result of search"
                  className="img-fluid"
                  onClick={() => window.open(photo.src.original)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

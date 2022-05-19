import React from "react";
import "./css/Photos.css";

export default function Photos(props) {
  //console.log(props.photos);
  if (props.photos) {
    return (
      <div className="photos">
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className=" col-6" key={index}>
                <a href={photo.src.original} rel="noopener">
                  <img src={photo.src.medium} alt="result of search" className="img-fluid" />
                </a>
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

import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./css/Phonetics.css";

export default function Phonetic(props) {
  // console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <div className=" Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} className="AudioPlayer" controls />

        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return (
      <div className=" Phonetic">
        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  }
}

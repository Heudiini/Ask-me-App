import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  //console.log(props.phonetic);

  return (
    <div>
      <div className=" Phonetic">
        <div className="text">{props.phonetic.text}</div>
        <ReactAudioPlayer src={props.phonetic.audio} className="AudioPlayer" controls />
      </div>
    </div>
  );
}
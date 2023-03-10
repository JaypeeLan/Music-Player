import React from "react";
import "../styles/LeftMenu.css";
import Track from "../assets/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

const TrackList = ({ trackname, artistName }) => {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="track" />
        <p>
          sample <span>wizkid</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
};

export default TrackList;

import React from "react";
import "../styles/leftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MenuList } from "./MenuList";
import Menu from "./Menu";
import MenuPlayList from "./MenuPlaylist";
import TrackList from "./TrackList";

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>Spotify</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} menuObject={MenuList} />
      <MenuPlayList />
      <TrackList/>
    </div>
  );
};

export default LeftMenu;

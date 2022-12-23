import React, { useEffect } from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import  AudioList from "./AudioList";
import Banner from "./Banner";

const MainContainer = () => {
  useEffect(() => {
    const allListTags = document
      .querySelector(".menuList")
      .querySelectorAll("li");

    // to remove active class from all the list tags when they are clicked
    function changeMenuActive() {
      allListTags.forEach((elem) => elem.classList.remove("active"));

      // add active class to only the element currently clicked
      // so the active class is removed from the previously clicked tag
      this.classList.add("active");
    }

    allListTags.forEach((elem) =>
      elem.addEventListener("click", changeMenuActive)
    );
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
};

export default MainContainer;

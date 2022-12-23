import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import Songs from "./Songs";

function AudioList() {
  const [songs, setSongs] = useState(Songs);

  //set the first song in the list to the music player as the initial state
  // when the page loads/refreshes
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  // -----------------------------------------------------------

  const [auto, setAuto] = useState(false);
  console.log(songs);

  // to toggle the active class so only one song have the tag at a time
  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((elem) => elem.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((elem) => elem.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => {
    // id parameter is from the clicked song
    Songs.forEach((song) => {
      // we loop through the Songs array to get that
      // particular song and toggle the fav if it matches
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    // update the songs
    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>12 songs</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                {/* ------------------  Song Image ------------------- */}
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="music image" />
                </div>
                {/* ---------------- Start of section  ----------------------- */}
                <div className="section">
                  {/* ------------------Song Name ------------------- */}
                  <p className="songName">
                    {song?.songName}
                    <span className="songSpan">{song?.artist}</span>
                  </p>
                  {/* ----------------Song Number opf listens--------------------- */}
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>
                    {/* ------------------ Song duration ---------------------- */}

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>

                    {/* --------------------- If the song is fav--------------------- */}
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                    {/* ------------------------------------------------------ */}
                  </div>
                </div>
                {/* ------------- end of section---------------- */}
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  );
}

export default AudioList;

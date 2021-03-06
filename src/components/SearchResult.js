import React, { forwardRef } from "react";
import styled from "styled-components";
import "./SearchResult.css";
const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  max-width: 500px;
  padding: 8px;
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
    color: #eee;
  }
`;

const Details = styled.div`
  margin-left: 10%;
  font-family: "Lato", sans-serif;
`;

const SearchResult = forwardRef(
  ({ trackArt, trackName, artistName, trackLink }, ref) => {
    // function to stop all audio playing
    function stopPrevious() {
      var sounds = document.getElementsByTagName("audio");
      for (var i = 0; i < sounds.length; i++) sounds[i].pause();
    }
    // function to play present audio
    function play() {
      document.getElementById(trackName).play();
    }
    return (
      <div className="searchResult" ref={ref}>
        <Card
          onClick={() => {
            // when clicked stop all audio playing.
            stopPrevious();
            // after stopping all play only present audio
            play();
          }}
        >
          <audio id={trackName} title={trackName} src={trackLink}></audio>
          <img
            className="searchResult__img"
            src={trackArt}
            alt={`${trackName}`}
          />
          <Details>
            <p className="searchResult__title">
              {trackName?.replace(/^(.{20}[^\s]*).*/, "$1")}
            </p>
            <p className="searchResult__artistName">
              {artistName?.replace(/^(.{20}[^\s]*).*/, "$1")}
            </p>
          </Details>
        </Card>
      </div>
    );
  }
);

export default SearchResult;

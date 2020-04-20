import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ gotSong }) => {
  if (!gotSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details:</h3>
      <p>{gotSong.title}</p>
      <p>{gotSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { gotSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

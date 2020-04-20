import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "billie jean", duration: "4:05" },
    { title: "thriller", duration: "5:15" },
    { title: "black or white", duration: "3:50" },
    { title: "beat it", duration: "4:37" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

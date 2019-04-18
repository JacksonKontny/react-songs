import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarenta", duration: "5:01" },
    { title: "Hit me", duration: "2:06" },
    { title: "Mombo", duration: "3:01" }
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
  selectedSong: selectedSongReducer
});

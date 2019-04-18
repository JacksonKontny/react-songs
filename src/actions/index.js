export const selectSong = select => {
  return {
    type: "SONG_SELECTED",
    payload: select
  };
};

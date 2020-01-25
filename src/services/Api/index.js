/* eslint-disable max-len */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});

export const getArtist = artistName => {
  return api.get(
    `?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`,
  );
};

export const getAlbum = albumName => {
  return api.get(
    `?method=album.search&album=${albumName}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`,
  );
};

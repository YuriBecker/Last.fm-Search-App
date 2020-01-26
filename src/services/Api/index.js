/* eslint-disable max-len */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});

const API_KEY = process.env.REACT_APP_LASTFM_KEY;

export const getArtist = artistName => {
  return api.get(
    `?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json&autocorrect=1`,
  );
};

export const getArtistTopAlbums = artistName => {
  return api.get(
    `?method=artist.gettopalbums&artist=${artistName}&api_key=${API_KEY}&format=json&autocorrect=1&limit=10`,
  );
};

export const searchAlbums = albumName => {
  return api.get(
    `?method=album.search&album=${albumName}&api_key=${API_KEY}&format=json&autocorrect=1&limit=10`,
  );
};

export const getAlbumInfo = (artistName, albumName) => {
  return api.get(
    `?method=album.getInfo&artist=${artistName}&album=${albumName}&api_key=${API_KEY}&format=json&autocorrect=1`,
  );
};

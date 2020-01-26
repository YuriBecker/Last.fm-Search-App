import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types as searchArtistTypes } from '../../Ducks/searchArtist';
import { getArtist, getArtistTopAlbums } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { artistName } = action;
    // Get artist info and yours top albums
    const [artist, artistTopAlbums] = yield all([
      call(getArtist, artistName),
      call(getArtistTopAlbums, artistName),
    ]);
    // Extract data
    const artistData = artist.data;
    const artistTopAlbumsData = artistTopAlbums.data;

    if (artistData.error) {
      throw new Error(artistData.message);
    }
    // Inject topAlbums data into the artist data
    artistData.artist.albums = artistTopAlbumsData;

    yield put({
      type: searchArtistTypes.SUCCESS,
      info: artistData.artist,
    });
  } catch (e) {
    yield put({
      type: searchArtistTypes.ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(searchArtistTypes.REQUEST, actionWatcher)];

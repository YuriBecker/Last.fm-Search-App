import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { Types as searchArtistTypes } from '../../Ducks/searchArtist';
import { Types as historyTypes } from '../../Ducks/history';
import { getArtist, getArtistTopAlbums } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';
import { getUid } from '../../Selectors/Auth';

function* actionWatcher(action) {
  try {
    const { artistName, saveInHistory } = action;

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

    if (saveInHistory) {
      const uid = yield select(getUid);

      yield put({
        type: historyTypes.ARTIST_ADD,
        uid,
        artistName: artistData.artist.name,
      });
    }

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

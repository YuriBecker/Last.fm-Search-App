export const Types = {
  ALBUM_ADD: 'history/ALBUM_ADD',
  ALBUM_REMOVE: 'history/ALBUM_REMOVE',
  ARTIST_ADD: 'history/ARTIST_ADD',
  ARTIST_REMOVE: 'history/ARTIST_REMOVE',
};

const INITIAL_STATE = [];

// Reducer
const historyReducer = (state = INITIAL_STATE, action) => {
  const { type, albumName, uid, artistName } = action;

  switch (type) {
    case Types.ALBUM_ADD: {
      const index = state.findIndex(data => {
        return data.uid === uid;
      });

      // If alredy have history info
      if (index !== -1) {
        const otherUsersData = state.filter(value => value.uid !== uid);
        // if artistName alredy in history, update index
        if (state[index].albums.some(album => album === albumName)) {
          const cleanAlbums = state[index].albums.filter(album => album !== albumName);
          return [
            ...otherUsersData,
            {
              uid,
              albums: [...cleanAlbums, albumName],
              artists: state[index].artists,
            },
          ];
        }
        return [
          ...otherUsersData,
          {
            uid,
            albums: [...state[index].albums, albumName],
            artists: state[index].artists,
          },
        ];
      }

      return [
        ...state,
        {
          uid,
          albums: [albumName],
          artists: [],
        },
      ];
    }

    case Types.ALBUM_REMOVE: {
      const otherUsersData = state.filter(value => value.uid !== uid);
      const index = state.findIndex(data => {
        return data.uid === uid;
      });

      return [
        ...otherUsersData,
        {
          uid,
          albums: state[index].albums.filter(album => album !== albumName),
          artists: state[index].artists,
        },
      ];
    }

    case Types.ARTIST_ADD: {
      const index = state.findIndex(data => {
        return data.uid === uid;
      });

      // If alredy have history info
      if (index !== -1) {
        const otherUsersData = state.filter(value => value.uid !== uid);
        // if artistName alredy in history, update index
        if (state[index].artists.some(artist => artist === artistName)) {
          const cleanArtists = state[index].artists.filter(artist => artist !== artistName);
          return [
            ...otherUsersData,
            {
              uid,
              artists: [...cleanArtists, artistName],
              albums: state[index].albums,
            },
          ];
        }
        return [
          ...otherUsersData,
          {
            uid,
            artists: [...state[index].artists, artistName],
            albums: state[index].albums,
          },
        ];
      }

      return [
        ...state,
        {
          uid,
          albums: [],
          artists: [artistName],
        },
      ];
    }

    case Types.ARTIST_REMOVE: {
      const otherUsersData = state.filter(value => value.uid !== uid);
      const index = state.findIndex(data => {
        return data.uid === uid;
      });

      return [
        ...otherUsersData,
        {
          uid,
          artists: state[index].artists.filter(artist => artist !== artistName),
          albums: state[index].albums,
        },
      ];
    }

    default:
      return state;
  }
};

// Action Creators
export const actions = {
  addArtists: (uid, artistName) => {
    return { type: Types.ARTIST_ADD, uid, artistName };
  },
  addAlbum: (uid, albumName) => {
    return { type: Types.ALBUM_ADD, uid, albumName };
  },
  removeArtists: (uid, artistName) => {
    return { type: Types.ARTIST_REMOVE, uid, artistName };
  },
  removeAlbum: (uid, albumName) => {
    return { type: Types.ALBUM_REMOVE, uid, albumName };
  },
};

export default historyReducer;

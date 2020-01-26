export const Types = {
  REQUEST: 'searchAlbums/REQUEST',
  SUCCESS: 'searchAlbums/SUCCESS',
  ERROR: 'searchAlbums/ERROR',
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  info: null,
};

// Reducer
const searchAlbumsReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        info: action.info,
      };

    case Types.ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };

    default:
      return state;
  }
};

// Action Creators
export const actions = {
  searchAlbums: albumName => {
    return { type: Types.REQUEST, albumName };
  },
};

export default searchAlbumsReducer;

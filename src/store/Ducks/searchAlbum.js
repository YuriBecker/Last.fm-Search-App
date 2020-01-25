export const Types = {
  REQUEST: 'searchAlbum/REQUEST',
  SUCCESS: 'searchAlbum/SUCCESS',
  ERROR: 'searchAlbum/ERROR',
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  info: null,
};

// Reducer
const searchAlbumReducer = (state = INITIAL_STATE, action) => {
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
  searchAlbum: albumName => {
    return { type: Types.REQUEST, albumName };
  },
};

export default searchAlbumReducer;

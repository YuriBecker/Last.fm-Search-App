export const Types = {
  REQUEST: 'searchArtist/REQUEST',
  SUCCESS: 'searchArtist/SUCCESS',
  ERROR: 'searchArtist/ERROR',
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  info: null,
};

// Reducer
const searchArtistReducer = (state = INITIAL_STATE, action) => {
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
  searchArtist: (artistName, saveInHistory) => {
    return { type: Types.REQUEST, artistName, saveInHistory };
  },
};

export default searchArtistReducer;

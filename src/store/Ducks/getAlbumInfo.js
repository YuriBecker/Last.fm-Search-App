export const Types = {
  REQUEST: 'getAlbumInfo/REQUEST',
  SUCCESS: 'getAlbumInfo/SUCCESS',
  ERROR: 'getAlbumInfo/ERROR',
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  info: null,
};

// Reducer
const getAlbumInfoReducer = (state = INITIAL_STATE, action) => {
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
  getAlbumInfo: mbid => {
    return { type: Types.REQUEST, mbid };
  },
};

export default getAlbumInfoReducer;

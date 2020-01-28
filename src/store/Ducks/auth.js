export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',

  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'auth/SIGNUP_ERROR',

  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'auth/LOGOUT_ERROR',

  VERIFY_REQUEST: 'auth/VERIFY_REQUEST',
  VERIFY_SUCCESS: 'auth/VERIFY_SUCCESS',
  VERIFY_ERROR: 'auth/VERIFY_ERROR',
};

const INITIAL_STATE = {
  isLoggingIn: false,
  isSigningUp: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  signingUpError: false,
  logoutError: false,
  isAuthenticated: false,
  error: null,
  user: {},
};

// Reducer
const authReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        error: action.error,
      };
    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signingUpError: false,
      };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        user: action.user,
      };
    case Types.SIGNUP_ERROR:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: false,
        signingUpError: true,
        error: action.error,
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      };
    case Types.LOGOUT_ERROR:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        error: action.error,
      };
    case Types.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case Types.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    case Types.VERIFY_ERROR:
      return {
        ...state,
        isVerifying: false,
      };
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  requestLogin: (email, password) => {
    return {
      type: Types.LOGIN_REQUEST,
      payload: { email, password },
    };
  },

  requestSignUp: (email, password) => {
    return {
      type: Types.SIGNUP_REQUEST,
      payload: { email, password },
    };
  },

  requestLogout: () => {
    return {
      type: Types.LOGOUT_REQUEST,
    };
  },

  verifyRequest: () => {
    return {
      type: Types.VERIFY_REQUEST,
    };
  },
};

export default authReducer;

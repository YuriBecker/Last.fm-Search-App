export const authUserReduxState = {
  searchArtist: {
    loading: false,
    success: false,
    error: null,
    info: null,
  },
  searchAlbums: {
    loading: false,
    success: false,
    error: null,
    info: null,
  },
  getAlbumInfo: {
    loading: false,
    success: false,
    error: null,
    info: null,
  },

  history: [
    {
      uid: 's0m3F4KeUID',
      albums: ['is this it', 'am'],
      artists: ['The Strokes', 'Arctic Monkeys'],
    },
  ],
  auth: {
    isLoggingIn: false,
    isSigningUp: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    signingUpError: false,
    logoutError: false,
    isAuthenticated: true,
    error: null,
    user: {
      uid: 's0m3F4KeUID',
      displayName: null,
      photoURL: null,
      email: 'becker.yr@gmail.com',
      emailVerified: false,
      phoneNumber: null,
      isAnonymous: false,
      tenantId: null,
      providerData: [
        {
          uid: 'becker.yr@gmail.com',
          displayName: null,
          photoURL: null,
          email: 'becker.yr@gmail.com',
          phoneNumber: null,
          providerId: 'password',
        },
      ],
    },
    verifyingError: false,
  },
};

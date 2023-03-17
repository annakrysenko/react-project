export const initialState = {
  userData: {
    name: null,
    email: '',
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
    id: null,
  },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
  isFetchingCurrentUser: false,
  isRegistratedIn: false,

  endDate: null,
  pagesPerDay: null,
  stats: [],
  rating: null,

  error: null,
};

// const initialState = {
//   goingToRead: [],
//   currentlyReading: [],
//   finishedReading: [],
//   userData: {
//     name: null,
//     email: '',
//     goingToRead: [],
//     currentlyReading: [],
//     finishedReading: [],
//     id: null,
//   },

// };

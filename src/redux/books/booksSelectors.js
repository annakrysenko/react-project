export const getGoingToRead = state => state.books.userData.goingToRead;
export const getFinishedReading = state => state.books.userData.finishedReading;
export const getCurrentlyReading = state =>
  state.books.userData.currentlyReading;
export const getStats = state => state.books.stats;
export const getEndDate = state => state.books.endDate;
export const getStartDate = state => state.books.startDate;
export const getPagesPerDay = state => state.books.pagesPerDay;

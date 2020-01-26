import { createSelector } from 'reselect';

export const getUserHistory = uid => {
  return createSelector(
    state => state.history,
    history => {
      return history.filter(item => item.uid === uid)[0];
    },
  );
};

import { createSelector } from 'reselect';

export const getUserHistory = uid => {
  return createSelector(
    state => state.history,
    history => history.filter(item => item.uid === uid),
  );
};

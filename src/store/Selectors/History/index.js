import { createSelector } from 'reselect';

export const getUserHistory = uid => {
  return createSelector(
    state => state.history,
    history => {
      if (history.length > 0) {
        const index = history.findIndex(data => {
          return data.uid === uid;
        });
        if (index !== -1) return history.filter(item => item.uid === uid)[0];
        return null;
      }
      return null;
    },
  );
};

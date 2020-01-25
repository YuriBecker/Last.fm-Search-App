import showErrorNotification from '../functions/showErrorNotification';

const validateInputSearch = query => {
  if (!query) {
    showErrorNotification("Search can't be empty");
    return false;
  }
  return true;
};

export default validateInputSearch;

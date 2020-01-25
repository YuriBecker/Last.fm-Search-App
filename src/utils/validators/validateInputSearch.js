import { toast } from 'react-toastify';

const validateInputSearch = query => {
  if (!query) {
    toast.error("Search can't be empty");
    return false;
  }
  return true;
};

export default validateInputSearch;

import { toast } from 'react-toastify';

const validatePassword = password => {
  if (password.length < 6) {
    toast.error('Password should be at least 6 characters');
    return false;
  }
  return true;
};

export default validatePassword;

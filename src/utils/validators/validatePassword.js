import showErrorNotification from '../functions/showErrorNotification';

const validatePassword = password => {
  if (password.length < 6) {
    showErrorNotification('Password should be at least 6 characters');
    return false;
  }
  return true;
};

export default validatePassword;

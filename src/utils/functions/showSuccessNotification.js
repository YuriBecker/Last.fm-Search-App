import { toast } from 'react-toastify';

const showSuccessNotification = message => {
  toast.success(message, {
    autoClose: 2000,
  });
};

export default showSuccessNotification;

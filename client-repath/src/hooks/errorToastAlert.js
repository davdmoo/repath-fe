import { ToastContainer, toast } from 'react-toastify';

export const errorToastAlert = (message) => {
  return toast.error(`${message}`, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

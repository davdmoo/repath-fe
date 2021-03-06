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

export const warnToastAlert = (message, position, autoClose, hideProgressBar) => {
  return toast.warn(`${message}`, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorToastAlert2 = (message, position, autoClose, hideProgressBar) => {
  return toast.error(`${message}`, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const successToastAlert = (message, position, autoClose, hideProgressBar) => {
  return toast.success(`${message}`, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

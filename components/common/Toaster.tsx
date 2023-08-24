/* eslint-disable import/no-extraneous-dependencies */
import { toast } from 'react-toastify';

export const showToastMessage = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showToastErrorMessage = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showToastWarningMessage = (message: string) => {
  toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showToastInfoMessage = (message: string) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

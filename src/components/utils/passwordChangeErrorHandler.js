import { errorToast, warningToast } from "./toastUtils";

export const handlePasswordErrors = (errorType) => {
  if (errorType.data.uid) {
    const message = errorType.data.uid[0];
    warningToast(message);
  } else if (errorType.data.token) {
    const message = errorType.data.token[0];
    errorToast(message);
  }
};

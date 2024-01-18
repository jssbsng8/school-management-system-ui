import { errorToast } from "./toastUtils";

export const handleRegistrationError = (errorType) => {
  if (errorType.email) {
    const message = errorType.email[0];
    errorToast(message);
  } else if (errorType.password) {
    const message = errorType.password[0];
    errorToast(message);
  }
};

import React, { useState, useEffect } from "react";
import ConfirmPasswordReset from "../components/forms/ConfirmResetPassword";
import {
  errorToast,
  successToast,
  warningToast,
} from "../components/utils/toastUtils";
import SuccessPage from "./Success";
import requestHandler from "../apiCalls/requestHandler";
import { USER_ENDPOINTS } from "../apiCalls/endpoints";
import { useParams } from "react-router-dom";
import { passwordValidator } from "../components/utils/dataValidator";
import { handlePasswordErrors } from "../components/utils/passwordChangeErrorHandler";

const NewPassword = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState("failed");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const validate = passwordValidator(formData);
      console.log(validate);
      if (validate[1] === "error") {
        warningToast(validate[0]);
      } else {
        const dataPayload = {
          uid: uid,
          token: token,
          new_password: formData.password,
        };

        try {
          const response = await requestHandler(
            "post",
            USER_ENDPOINTS.CONFIRM_RESET_PASSWORD,
            dataPayload
          );

          if (response[0] !== null) {
            setStatus("success");
          } else {
            handlePasswordErrors(response[1]);
            setStatus("failed");
          }
        } catch (error) {
          console.error("Error during activation:", error);
          setStatus("failed");
        }
      }
    };

    if (Object.keys(formData).length !== 0) {
      fetchData();
    }
  }, [formData, uid, token]);

  const handleSubmit = async (password, confirmPassword) => {
    setLoading(true);
    setFormData({ password, confirmPassword });
    try {
      if (status === "success") {
        successToast("Password Changed");
      }
    } catch (error) {
      console.error("Error during password change:", error);
      errorToast("Error during password change");
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {status === "success" && (
        <SuccessPage
          color="green"
          title="Password Successfully Changed"
          body="Your password has been successfully changed. You can now log in with your new password."
          message="Explore your account and enjoy using our services."
          buttonText="Go to Login"
          linkTo="/login"
        />
      )}
      {status === "failed" && (
        <ConfirmPasswordReset onSubmit={handleSubmit} loading={loading} />
      )}
    </React.Fragment>
  );
};

export default NewPassword;

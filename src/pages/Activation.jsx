import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AUTH_ENDPOINTS } from "../apiCalls/endpoints";
import requestHandler from "../apiCalls/requestHandler";
import SuccessPage from "./Success";

function ActivationComponent() {
  const { uid, token } = useParams();
  const [activationStatus, setActivationStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to your Django backend for activation
        const response = await requestHandler(
          "post",
          AUTH_ENDPOINTS.ACTIVATION,
          {
            uid,
            token,
          }
        );
        if (response[0] !== null) {
          setActivationStatus("success");
        } else {
          setActivationStatus("failed");
        }
      } catch (error) {
        console.error("Error during activation:", error);
        setActivationStatus("failed");
      }
    };

    fetchData();
  }, [uid, token]);
  // Render UI based on activationStatus
  return (
    <div>
      {activationStatus === "success" && (
        <SuccessPage
          color="green"
          title="Activation Successful"
          body="It's time to explore your new Dashboard, click the login button below to access your account"
          message="Your Account has been successfully activated and is now ready to use"
          buttonText="Go to Login"
          linkTo="/login"
        />
      )}
      {activationStatus === "failed" && (
        <SuccessPage
          title="Activation Failed: Account Already Activated"
          color="red"
          body="Your account is already activated. If you're having trouble logging in, please use the 'Forgot Password' option or contact support."
          buttonText="Go to Home"
          linkTo="/login"
        />
      )}
    </div>
  );
}

export default ActivationComponent;

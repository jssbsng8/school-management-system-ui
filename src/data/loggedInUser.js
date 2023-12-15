import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { athenticatedUser } from "../apiCalls/authApi";
import { USER_ENDPOINTS } from "../apiCalls/endpoints";

const useLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded user data
    const user = [
      {
        id: 7,
        first_name: "Michael",
        last_name: "Adeeyo",
        username: "ademic",
        email: "mike@example.com",
        role: "Student",
        password: "12345678",
        sex: "Male",
        date_of_birth: "1995-12-07",
        address: "741 Lexington Avenue, New York, NY 10022",
        phone: "212-555-7878",
        img: "/images/avatars/avatar7.png",
      },
    ];
    const storedUser = localStorage.getItem("token");
    const loggedInUserData = user[0];
    // console.log(athenticatedUser(USER_ENDPOINTS.AUTHENTICATED_USER));
    if (storedUser && loggedInUserData) {
      setUser(loggedInUserData);
      setAuth(true);
      
    } else {
      setAuth(false);
      // Redirect to the login page if not logged in
      navigate("/login");
    }
  },[navigate]);

  return { user, auth };
};

export default useLoggedInUser;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate(nav);

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
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const loggedInUserData = user[0];
    // const loggedInUserData = false;

    if (storedUser) {
      setUser(loggedInUserData);
      setAuth(true);
      navigate("/");
    } else {
      setAuth(false);
      // Redirect to the login page if not logged in
      navigate("/login");
    }
  },);

  return { user, auth };
};

export default useLoggedInUser;

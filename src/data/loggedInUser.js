import { useState, useEffect } from "react";

export const useLoggedInUser = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // You can implement your logic to fetch the logged-in user information here
    // For simplicity, I'll set a timeout to simulate an asynchronous operation
    const fetchLoggedInUser = async () => {
      // Simulating an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Replace this with your actual logic to fetch user data (e.g., from an API)
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

      setLoggedInUser(user[0]);
    };

    fetchLoggedInUser();
  }, []);

  return loggedInUser;
};

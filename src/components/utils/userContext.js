import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { athenticatedUser } from "../../apiCalls/authApi";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import { fetchSubjects, getFetchedData } from "../../apiCalls/authApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(null);
  const [subjects, setSubject] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileThumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    /*
      The useEffect hook is responsible for fetching the authenticated user information
      when the component mounts. It uses the location object to determine the current route
      and excludes certain routes (e.g., login, success, reset_password) from triggering the
      authentication fetch.

      Within the try block, it attempts to fetch the authenticated user using the
      athenticatedUser function. If successful, it sets the user information, authentication
      status, and user role using setUser, setAuth, and setRole, respectively. If the user
      fetch is unsuccessful, it calls setUserContext with null values, clears the localStorage,
      and navigates to the login page unless the current route is excluded.

      In case of an error during the fetch, it logs an error message to the console.

      The useEffect has dependencies on the navigate function and the current pathname to
      trigger the fetch when the route changes.
    */

      const fetchAuthenticatedUser = async () => {
        try {
          const currentRoute = location.pathname;
          const excludedRoutes = ["/login", "/success", "/reset_password"];
      
          if (!excludedRoutes.includes(currentRoute)) {
            const getUser = await athenticatedUser(
              USER_ENDPOINTS.AUTHENTICATED_USER
            );
      
            if (getUser) {
              const parsedUserData = JSON.parse(getUser);
      
              // Check if the image data is already in local storage
              const storedImage = localStorage.getItem("userImage");
              const storedThumbnail = localStorage.getItem("thumbnail");
      
              if (storedImage && storedThumbnail) {
                // If image data is in local storage, use it directly
                setProfileImage(storedImage);
                setThumbnail(storedThumbnail);
              } else {
                try {
                  // Fetch user image only if it hasn't been fetched before
                  const fetchedData = await getFetchedData(
                    USER_ENDPOINTS.PROFILE_IMAGE(parsedUserData.id)
                  );
      
                  if (fetchedData && fetchedData.length > 0) {
                    const image_url = fetchedData[0].image;
                    const thumbnail = fetchedData[0].thumbnail;
      
                    // Save the image data in local storage
                    localStorage.setItem("userImage", image_url);
                    localStorage.setItem("thumbnail", thumbnail);
      
                    // Update state with the fetched image data
                    setProfileImage(image_url);
                    setThumbnail(thumbnail);
                  } else {
                    console.error("No image data found for the user.");
                  }
                } catch (error) {
                  console.error("Error fetching user image:", error.message);
                }
              }
      
              setUserContext({
                ...parsedUserData,
                profileImage,
                profileThumbnail,
              });
              setAuth(true);
              setRole(parsedUserData.role);
            } else {
              setUserContext(null, false, null);
              localStorage.clear();
      
              if (!excludedRoutes.includes(currentRoute)) {
                navigate("/login");
              }
            }
          }
        } catch (error) {
          console.error("Error fetching authenticated user:", error);
        }
      };
      
    fetchAuthenticatedUser();
  }, [navigate, location.pathname, profileImage, profileThumbnail]);

  useEffect(() => {
    /*
      useEffect triggers the provided function (fetchDatas(setSubject))
      when the component mounts. The dependency array ([]) ensures it runs only once on mount.
      This effect set the user(teacher/student) subject they are assigned or enrolled.
    */
    fetchSubjects(setSubject);
  }, []);

  const setUserContext = (userData, authStatus, UserRole, userSubjects) => {
    /*
      The setUserContext function is a utility function within the UserProvider component.
      It takes four parameters - userData, authStatus, UserRole, and userSubjects - and updates
      the corresponding state variables: setUser updates the user information,
      setAuth updates the authentication status, setRole updates the user role, and setSubject
      updates the user's assigned or enrolled subjects. This function ensures a synchronized
      update of multiple state variables related to user context in the application.
    */
    setUser(userData);
    setAuth(authStatus);
    setRole(UserRole);
    setSubject(userSubjects);
  };

  const setAuthStatus = (newAuthStatus) => {
    setAuth(newAuthStatus);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        auth,
        role,
        subjects,
        setSubject,
        setUserContext,
        setAuthStatus,
        setRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  /*
    The useUser hook is a custom hook that utilizes the useContext hook to access the
    UserContext provided by the UserProvider. It retrieves the context, and if it's not
    available, it throws an error indicating that useUser must be used within a UserProvider.
    If the context is available, it returns the context, providing a convenient way to access
    user-related information throughout the application.
  */

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

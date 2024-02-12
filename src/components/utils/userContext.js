import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import requestHandler from "../../apiCalls/requestHandler";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileThumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications, setNotifications] = useState([])
  const [userStatus, setUserStatus] = useState({
    role: null,
    isApproved: false,
    promoted: false,
    assignedSubjects: false,
    enrolledSubject: false,
    madeSuperAdmin: false,
    suspended: false,
  });

  const fetchUserImages = async (userId) => {
    try {
      if (!userId) {
        console.error("User ID is not available.");
        return;
      }

      const storedImage = localStorage.getItem("userImage");
      const storedThumbnail = localStorage.getItem("thumbnail");

      if (storedImage && storedThumbnail) {
        setProfileImage(storedImage);
        setThumbnail(storedThumbnail);
      } else {
        const fetchedData = await requestHandler(
          "get",
          USER_ENDPOINTS.PROFILE_IMAGE(userId)
        );

        if (fetchedData[0] && fetchedData[0].length > 0) {
          const { image, thumbnail } = fetchedData[0][0];

          localStorage.setItem("userImage", image);
          localStorage.setItem("thumbnail", thumbnail);

          setProfileImage(image);
          setThumbnail(thumbnail);
        } else {
          console.error("No image data found for the user.");
        }
      }
    } catch (error) {
      console.error("Error fetching user images:", error.message);
    }
  };

  const fetchNotifications = async (userId) => {
    try {
      const fetchedData = await requestHandler(
        "get",
        USER_ENDPOINTS.NOTIFICATIONS(userId)
      );
      if(fetchedData[0]){
        setNotifications(fetchedData[0])
      }
    } catch (error) {
      return
    }
  };

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
        const excludedRoutes = [
          "/login",
          "/success",
          "/reset_password",
          /^\/activation\//,
        ];

        const isRouteExcluded = (route) => {
          return excludedRoutes.some((excludedRoute) => {
            if (excludedRoute instanceof RegExp) {
              return excludedRoute.test(route);
            } else {
              return excludedRoute === route || route.startsWith(excludedRoute);
            }
          });
        };

        const isExcluded = isRouteExcluded(currentRoute);

        if (!isExcluded) {
          const getUser = await requestHandler(
            "get",
            USER_ENDPOINTS.AUTHENTICATED_USER
          );

          if (getUser[0] !== null) {
            const storedImage = localStorage.getItem("userImage");
            const storedThumbnail = localStorage.getItem("thumbnail");
            fetchNotifications(getUser[0].id)
            if (storedImage && storedThumbnail) {
              setProfileImage(storedImage);
              setThumbnail(storedThumbnail);
            } else {
              fetchUserImages(getUser[0].id);
            }

            setUserContext({
              ...getUser[0],
              profileImage,
              profileThumbnail,
            });

            setAuth(true);
            setRole(getUser[0].role);

            setUserStatus((prevState) => ({
              ...prevState,
              isApproved: getUser[0].is_approved,
              role: getUser[0].role,
            }));
          } else {
            setUserContext(null, false, null);
            localStorage.clear();

            if (!isExcluded) {
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

  const setUserContext = (userData, authStatus, UserRole) => {
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
        userStatus,
        notifications,
        setUserContext,
        setAuthStatus,
        setRole,
        setProfileImage,
        setUserStatus,
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

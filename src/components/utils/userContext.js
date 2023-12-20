import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { athenticatedUser } from '../../apiCalls/authApi';
import { USER_ENDPOINTS } from '../../apiCalls/endpoints';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const getUser = await athenticatedUser(USER_ENDPOINTS.AUTHENTICATED_USER);

        if (getUser) {
          const parsedUserData = JSON.parse(getUser);
          setUser(parsedUserData);
          setAuth(true);
          setRole(parsedUserData.role);
          localStorage.setItem('userData', JSON.stringify({
            'auth': true,
            'role': parsedUserData.role
          }));
        } else {
          setUserContext(null, false, null);
          localStorage.clear()
          navigate('/login');
        }
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
      }
    };

    fetchAuthenticatedUser();
  }, [navigate]);

  const setUserContext = (userData, authStatus, UserRole) => {
    setUser(userData);
    setAuth(authStatus);
    setRole(UserRole);
  };

  const setAuthStatus = (newAuthStatus) => {
    setAuth(newAuthStatus);
  };

  return (
    <UserContext.Provider value={{ user, auth, role, setUserContext, setAuthStatus, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

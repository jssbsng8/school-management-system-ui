import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { athenticatedUser } from '../../apiCalls/authApi';
import { USER_ENDPOINTS } from '../../apiCalls/endpoints';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const getUser = await athenticatedUser(USER_ENDPOINTS.AUTHENTICATED_USER);
  
        if (getUser) {
          setUser(JSON.parse(getUser));
          setAuth(true);
          
          const parsedUserData = JSON.parse(getUser);
          localStorage.setItem('userData', JSON.stringify({
            'auth': true,
            'role': parsedUserData.role
          }));
        } else {
          setUserContext(null, false);
  
          localStorage.removeItem('token');
          localStorage.removeItem('userData');
          navigate('/login')
        }
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
      }
    };
  
    fetchAuthenticatedUser();
  }, [navigate]);

  const setUserContext = (userData, authStatus) => {
    setUser(userData);
    setAuth(authStatus);
  };

  const setAuthStatus = (newAuthStatus) => {
    setAuth(newAuthStatus);
    localStorage.setItem('auth', JSON.stringify(newAuthStatus));
  };

  return (
    <UserContext.Provider value={{ user, auth, setUserContext, setAuthStatus }}>
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
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUser = localStorage.getItem('loggedInUser');
    const storedAuth = localStorage.getItem('auth');

    if (storedUser && storedAuth) {
      setUser(JSON.parse(storedUser));
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const setUserContext = (userData, authStatus) => {
    setUser(userData);
    setAuth(authStatus);

    // Save user data and auth status to local storage
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    localStorage.setItem('auth', JSON.stringify(authStatus));
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

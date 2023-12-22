import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { athenticatedUser, get_enrolled_subjects, get_assigned_subjects } from '../../apiCalls/authApi';
import { USER_ENDPOINTS, CORE } from '../../apiCalls/endpoints';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(null);
  const [subjects, setSubject] = useState(null);
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
    // console.log(role);
  }, [navigate]);


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const getRole = userData ? userData.role : null;
  
        if (getRole === "Student") {
          const enrolledSubjectsJsonString = await get_enrolled_subjects(CORE.GET_ENROLLED_SUBJECTS);
          const enrolledSubjects = JSON.parse(enrolledSubjectsJsonString);
          setSubject(enrolledSubjects);
        }
        else if (getRole === "Teacher"){
          const assignedSubjectsJsonString = await get_assigned_subjects(CORE.GET_ASSIGNED_SUBJECTS);
          const assignedSubjects = JSON.parse(assignedSubjectsJsonString);
          setSubject(assignedSubjects);
        }
      } catch (error) {
        console.error('Error fetching enrolled subjects:', error);
      }
    };
  
    fetchData();
  },[])
  
  const setUserContext = (userData, authStatus, UserRole) => {
    setUser(userData);
    setAuth(authStatus);
    setRole(UserRole);
  };

  const setAuthStatus = (newAuthStatus) => {
    setAuth(newAuthStatus);
  };
  
  return (
    <UserContext.Provider value={{ user, auth, role, subjects, setUserContext, setAuthStatus, setRole }}>
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

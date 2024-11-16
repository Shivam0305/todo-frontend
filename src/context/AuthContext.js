// // src/context/AuthContext.js

// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Creating AuthContext
// const AuthContext = createContext();

// // AuthProvider component to wrap around the app and provide context values
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     // Simulate a login check from localStorage or an API
//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setUser(storedUser);
//         }
//     }, []);

//     // Login function to set the user in state and localStorage
//     const login = (userData) => {
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData));  // Store user in localStorage
//         navigate('/');  // Redirect to the home page after login
//     };

//     // Logout function to clear user from state and localStorage
//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('user');  // Clear user from localStorage
//         navigate('/login');  // Redirect to the login page after logout
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Custom hook to use AuthContext in any component
// export const useAuth = () => useContext(AuthContext);

// export default AuthContext;


// src/context/AuthContext.js

// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider to wrap around components that need access to the context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; // Default export for use elsewhere

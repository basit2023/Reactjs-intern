import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const data=JSON.parse( localStorage.getItem('user'))
  const [user, setUser] = useState(data);

  // Example login function
  const login = (userData) => setUser(userData);

  // Example logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
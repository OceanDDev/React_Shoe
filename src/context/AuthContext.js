import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkLogin } from '../services/accountService'; // Import hàm kiểm tra đăng nhập

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = checkLogin(); // Kiểm tra trạng thái đăng nhập từ localStorage
    if (loggedInUser) {
      setUser(loggedInUser);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/users'; // Đảm bảo URL đúng và không có dấu '/' cuối cùng

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}`, { // Endpoint để lấy thông tin người dùng hiện tại
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } // Thêm token vào header
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null); // Nếu có lỗi, xóa thông tin người dùng
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials); // Cập nhật endpoint và credentials
      const { token, userData } = response.data;
      localStorage.setItem('token', token); // Lưu token vào localStorage
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

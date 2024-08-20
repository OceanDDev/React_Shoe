import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const login = async (body) => {
    try {
      const response = await axios.post(`${API_URL}/login`,  body );
      return response.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Đăng nhập thất bại' };
    }
  };
  
  export const checkLogin = () => {
    try {
      const user = localStorage.getItem('login');
      if (user) {
        return JSON.parse(user);
      }
      return null; // Trả về null nếu không có người dùng đăng nhập
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null; // Trả về null nếu có lỗi xảy ra
    }
  };
  
  export const checkAdmin = () => {
    try {
      const user = localStorage.getItem('login');
      if (user) {
        const parsedUser = JSON.parse(user);
        return parsedUser.role === 'admin'; // Kiểm tra nếu người dùng là admin
      }
      return false; // Trả về false nếu không có người dùng hoặc không phải admin
    } catch (error) {
      console.error("Error parsing user data:", error);
      return false; // Trả về false nếu có lỗi xảy ra
    }
  };
  
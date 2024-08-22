import axios from 'axios';

const API_URL = 'https://server-shoe-inky.vercel.app/users';

// Đăng ký người dùng mới
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

// Đăng nhập người dùng
export const login = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/login`, body);
        const { token, userData } = response.data;
        localStorage.setItem('login', JSON.stringify(userData)); // Lưu thông tin người dùng vào localStorage
        localStorage.setItem('token', token); // Lưu token vào localStorage
        return response.data;
    } catch (error) {
        return { success: false, message: error.response?.data?.message || 'Đăng nhập thất bại' };
    }
};

// Kiểm tra trạng thái đăng nhập
// Kiểm tra đăng nhập
export const checkLogin = () => {
  try {
      const user = localStorage.getItem('login');
      if (user) {
          return JSON.parse(user); // Trả về đối tượng người dùng nếu có
      }
      return null; // Trả về null nếu không có người dùng đăng nhập
  } catch (error) {
      console.error("Error parsing user data:", error);
      return null; // Trả về null nếu có lỗi xảy ra
  }
};

// Kiểm tra quyền admin
export const checkAdmin = () => {
  try {
      const user = localStorage.getItem('login');
      if (user) {
          const parsedUser = JSON.parse(user);
          return parsedUser.isAdmin === 1; // Kiểm tra nếu người dùng là admin
      }
      return false; // Trả về false nếu không có người dùng hoặc không phải admin
  } catch (error) {
      console.error("Error parsing user data:", error);
      return false; // Trả về false nếu có lỗi xảy ra
  }
};

export const getUser = async () => {
  try {
      const response = await axios.get(API_URL);
      return response.data;
  } catch (error) {
      console.log('Error fetching all users', error);
      throw error;
  }
};

export const addUser = async (user) => {
  try {
      const response = await axios.post(API_URL, user);
      return response.data;
  } catch (error) {
      console.log('Error adding new user', error);
      throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
      const response = await axios.put(`${API_URL}/${id}`, user);
      return response.data;
  } catch (error) {
      console.log('Error updating user', error);
      throw error;
  }
};

export const deleteUser = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
  } catch (error) {
      console.log('Error deleting user', error);
      throw error;
  }
};
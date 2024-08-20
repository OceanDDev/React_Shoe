import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Đường dẫn tới file App.js của bạn
import { ShoppingContextProvider } from './context/ShoppingContext';
import store  from './store'
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';

// Tìm phần tử gốc của ứng dụng
const container = document.getElementById('root');

// Tạo root
const root = createRoot(container);

// Render ứng dụng
root.render(
  <AuthProvider>
  <ShoppingContextProvider>
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  </ShoppingContextProvider>
  </AuthProvider>
);

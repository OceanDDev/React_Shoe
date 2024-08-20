import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="username form-control1">
        <input
          type="email"
          name="email"
          id="username"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="password form-control1">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
        />
        {error && (
          <div
            className="error"
            style={{
              position: 'absolute',
              bottom: 0,
              background: '#fff',
              padding: 10,
              border: '1px solid #ccc',
              color: 'red',
            }}
          >
            {error}
          </div>
        )}
      </div>
      <div className="recaptcha form-control1">
        This site is protected by reCAPTCHA and the Google{' '}
      </div>
      <div className="submit">
        <button type="submit" className="btn-dangnhap">Đăng nhập</button>
        <div className="forgetpassword">
          <p id="quenmk">Quên mật khẩu?</p> hoặc <Link to="/register">Đăng kí</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

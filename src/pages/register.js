/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { register } from '../services/accountService';

const renderField = ({ input, type, placeholder }) => (
  <div className="form-control1">
    <input {...input} type={type} placeholder={placeholder} />
  </div>
);

const Register = (props) => {
  const { handleSubmit, pristine, submitting, error } = props;
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await register({
        fullname: formData.fullname,
        birthday: formData.birthday,
        email: formData.email,
        password: formData.password,
        isAdmin: formData.isAdmin
      });
      toast.success('Đăng ký thành công!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error('Đăng ký không thành công. Vui lòng thử lại.');
    }
  };

  return (
    <div>
      <div className="content">
        <section className="signup">
          <div className="container">
            <div className="signin-left">
              <div className="sign-title">
                <h1>Tạo tài khoản</h1>
              </div>
            </div>
            <div className="signin-right">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fullname form-control1">
                  <Field
                    name="fullname"
                    type="text"
                    component={renderField}
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="birthday form-control1">
                  <Field
                    name="birthday"
                    type="text"
                    component={renderField}
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div className="email form-control1">
                  <Field
                    name="email"
                    type="email"
                    component={renderField}
                    placeholder="Email"
                  />
                </div>
                <div className="password form-control1">
                  <Field
                    name="password"
                    type="password"
                    component={renderField}
                    placeholder="Password"
                  />
                </div>
                <div className="confirmPassword form-control1">
                  <Field
                    name="confirmpassword"
                    type="password"
                    component={renderField}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="recaptcha form-control1">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
                </div>
                <button className="btn-dangnhap" type="submit" disabled={pristine || submitting}>
                  Đăng Ký
                </button>
                {/* Success and error messages */}
                {error && <p className="error">{error}</p>}
                <div className="backto">
                  <a href="#">
                    <i className="fa fa-long-arrow-alt-left" /> Quay lại trang chủ
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Other sections */}
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'registerForm', // Tên của form
})(Register);

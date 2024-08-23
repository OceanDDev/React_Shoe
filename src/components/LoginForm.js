import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const renderField = ({ input, type, placeholder }) => (
  <div className="form-control1">
    <input {...input} type={type} placeholder={placeholder} />
  </div>
);

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting, error } = props;

  const onSubmit = (formData) => {
    console.log(formData);
    props.onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="username form-control1">
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
          placeholder="Mật khẩu"
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
        <button type="submit" className="btn-dangnhap" disabled={pristine || submitting}>
          Đăng nhập
        </button>
        <div className="forgetpassword">
          <p id="quenmk">Quên mật khẩu?</p> hoặc <Link to="/register">Đăng kí</Link>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'loginForm', 
})(LoginForm);

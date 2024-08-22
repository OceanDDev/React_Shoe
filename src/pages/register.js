/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import { register } from '../services/accountService';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Register = () => {

  const [user, setUser] = useState({
    fullname: '',
    birthday: '',
    email: '',
    password: '',
    confirmpassword: '',
    isAdmin: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (user.password !== user.confirmpassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await register({
        fullname: user.fullname,
        birthday: user.birthday,
        email: user.email,
        password: user.password,
      });
      setSuccess('Registration successful!');
      // Chuyển về trang đăng nhập sau khi đăng ký thành công
      toast.success('Đăng ký thành công!');
      setTimeout(() => { 
        navigate('/login'); 
      },2000)
     

    } catch (error) {
      setError('Registration failed. Please try again.');
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
              <form onSubmit={handleSubmit}>
                <div className="fullname form-control1">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Họ và tên"
                    value={user.fullname}
                    onChange={handleChange}
                  />
                  {/* Error handling for fullname */}
                  {error.fullname && <p>{error.fullname}</p>}
                </div>
                <div className="birthday form-control1">
                  <input
                    type="text"
                    name="birthday"
                    placeholder="mm/dd/yyyy"
                    value={user.birthday}
                    onChange={handleChange}
                  />
                  {/* Error handling for birthday */}
                  {error.birthday && <p>{error.birthday}</p>}
                </div>
                <div className="email form-control1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {/* Error handling for email */}
                  {error.email && <p>{error.email}</p>}
                </div>
                <div className="password form-control1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {/* Error handling for password */}
                  {error.password && <p>{error.password}</p>}
                </div>
                <div className="confirmPassword form-control1">
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={user.confirmpassword}
                    onChange={handleChange}
                  />
                  {/* Error handling for confirmpassword */}
                  {error.confirmpassword && <p>{error.confirmpassword}</p>}
                </div>
                <div className="recaptcha form-control1">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="">Privacy Policy</a> and <a href="">Terms of Service</a> apply.
                </div>
                <button className="btn-dangnhap"> Đăng Ký </button>
                {/* Success and error messages */}
                {success && <p>{success}</p>}
                {error && <p>{error}</p>}
                <div className="backto">
                  <a href="">
                    <i className="fa fa-long-arrow-alt-left" /> Quay lại trang chủ
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="section section-gallery">
          <div className="">
            <div className="hot_sp" style={{ paddingTop: 70, paddingBottom: 50 }}>
              <h2 style={{ textAlign: 'center', paddingTop: 10 }}>
                <a
                  style={{ fontSize: 28, color: 'black', textDecoration: 'none' }}
                  href=""
                >
                  Khách hàng và Runner Inn
                </a>
              </h2>
            </div>
            <div className="list-gallery clearfix">
              <ul className="shoes-gp">
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_1.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_2.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_3.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_4.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_5.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="images/shoes/gallery_item_6.jpg"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="main-footer">
          <div className="container">
            <div className="">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="footer-col footer-block">
                    <h4 className="footer-title">Giới thiệu</h4>
                    <div className="footer-content">
                      <p>
                        Runner Inn trang mua sắm trực tuyến của thương hiệu giày, thời
                        trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời trang
                        mới nhất.
                      </p>
                      <div className="logo-footer">
                        <img src="images/logo-bct.png" alt="Bộ Công Thương" />
                      </div>
                      <div className="social-list">
                        <a href="#" className="fab fa-facebook" />
                        <a href="#" className="fab fa-google" />
                        <a href="#" className="fab fa-twitter" />
                        <a href="#" className="fab fa-youtube" />
                        <a href="#" className="fab fa-skype" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="footer-col footer-link">
                    <h4 className="footer-title">PHÁP LÝ &amp; CÂU HỎI</h4>
                    <div className="footer-content toggle-footer">
                      <ul>
                        <li className="item">
                          <a href="#" title="Tìm kiếm">
                            Tìm kiếm
                          </a>
                        </li>
                        <li className="item">
                          <a href="#" title="Giới thiệu">
                            Giới thiệu
                          </a>
                        </li>
                        <li className="item">
                          <a href="#" title="Chính sách đổi trả">
                            Chính sách đổi trả
                          </a>
                        </li>
                        <li className="item">
                          <a href="#" title="Chính sách bảo mật">
                            Chính sách bảo mật
                          </a>
                        </li>
                        <li className="item">
                          <a href="#" title="Điều khoản dịch vụ">
                            Điều khoản dịch vụ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="footer-col footer-block">
                    <h4 className="footer-title">Thông tin liên hệ</h4>
                    <div className="footer-content toggle-footer">
                      <ul>
                        <li>
                          <span>Địa chỉ:</span> 117-119 Lý Chính Thắng, Phường 7, Quận
                          3, TP. Hồ Chí Minh, Vietnam
                        </li>
                        <li>
                          <span>Điện thoại:</span> +84 (028) 38800659
                        </li>
                        <li>
                          <span>Fax:</span> +84 (028) 38800659
                        </li>
                        <li>
                          <span>Mail:</span> contact@aziworld.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="footer-col footer-block">
                    <h4 className="footer-title">FANPAGE</h4>
                    <div className="footer-content">
                      <div id="fb-root">
                        <div className="footer-static-content">
                          <div
                            className="fb-page"
                            data-href="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/"
                            data-tabs="timeline"
                            data-width=""
                            data-height={215}
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true"
                          >
                            <blockquote
                              cite="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/"
                              className="fb-xfbml-parse-ignore"
                            >
                              <a href="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/">
                                AziWorld Viet Nam
                              </a>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer--copyright">
            <div className="container">
              <hr />
              <div
                className="main-footer--border"
                style={{ textAlign: 'center', paddingBottom: 15 }}
              >
                <p>
                  Copyright © 2019{' '}
                  <a href="https://runner-inn.myharavan.com"> Runner Inn</a>.{' '}
                  <a
                    target="_blank"
                    href="https://www.facebook.com/henrynguyen202"
                  >
                    Powered by HuniBlue
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;

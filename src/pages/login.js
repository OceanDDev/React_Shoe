/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { login } from '../services/accountService';
import LoginForm from '../components/LoginForm';  // Sửa lại tên component từ LoginFrom thành LoginForm
import toast from 'react-hot-toast';

const Login = () => {

  const handleLogin = async (user) => {
    if (user.email && user.password) {
      try {
        const res = await login(user);
        if (res.status === 'OK') {
          console.log(res);
          toast.success('Đăng nhập thành công!');
          let jsonData = JSON.stringify(res.result);
          localStorage.setItem('login', jsonData);
          setTimeout(() => {
            window.location.href=("/"); 
          }, 1000);
        } else {
          toast.error(res.message || 'Đăng nhập thất bại!');
        }
      } catch (error) {
        console.log("Error: " + error);
        toast.error("Sai tên đăng nhập hoặc mật khẩu");
      }
    } else {
      toast.error("Vui lòng nhập email và mật khẩu");
    }
  };

  return (
    <div className="content">
      <section className="signin">
        <div className="container">
          <div className="signin-left">
            <div className="sign-title">
              <h1>Đăng nhập</h1>
            </div>
          </div>
          <div className="signin-right" id="a-sign">
            <LoginForm onLogin={handleLogin}></LoginForm>
          </div>
          <div className="signin-right" id="b-sign">
            {/* Nội dung phục hồi mật khẩu hoặc phần khác nếu cần */}
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
    </div>
  );
};

export default Login;

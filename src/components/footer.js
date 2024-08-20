import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    Giới thiệu
                  </h4>
                  <div className="footer-content">
                    <p>Runner Inn trang mua sắm trực tuyến của thương hiệu giày, thời trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.</p>
                    <div className="logo-footer">
                      <img src="/images/logo-bct.png" alt="Bộ Công Thương" />
                    </div>
                    <div className="social-list">
                      <Link to="#" className="fab fa-facebook"></Link>
                      <Link to="#" className="fab fa-google"></Link>
                      <Link to="#" className="fab fa-twitter"></Link>
                      <Link to="#" className="fab fa-youtube"></Link>
                      <Link to="#" className="fab fa-skype"></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-col footer-link">
                  <h4 className="footer-title">
                    PHÁP LÝ &amp; CÂU HỎI
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul>
                      <li className="item">
                        <Link to="#" title="Tìm kiếm">Tìm kiếm</Link>
                      </li>
                      <li className="item">
                        <Link to="#" title="Giới thiệu">Giới thiệu</Link>
                      </li>
                      <li className="item">
                        <Link to="#" title="Chính sách đổi trả">Chính sách đổi trả</Link>
                      </li>
                      <li className="item">
                        <Link to="#" title="Chính sách bảo mật">Chính sách bảo mật</Link>
                      </li>
                      <li className="item">
                        <Link to="#" title="Điều khoản dịch vụ">Điều khoản dịch vụ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    Thông tin liên hệ
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul>
                      <li><span>Địa chỉ:</span> 117-119 Lý Chính Thắng, Phường 7, Quận 3, TP. Hồ Chí Minh, Vietnam</li>
                      <li><span>Điện thoại:</span> +84 (028) 38800659</li>
                      <li><span>Fax:</span> +84 (028) 38800659</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    FANPAGE
                  </h4>
                  <div className="footer-content">
                    <div id="fb-root">
                      <div className="footer-static-content">
                        <div className="fb-page" data-href="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/" data-tabs="timeline" data-width="" data-height="215" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                          <blockquote cite="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AziWorld-Viet-Nam-908555669481794/">AziWorld Viet Nam</a></blockquote>
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
            <div className="main-footer--border" style={{ textAlign: "center", paddingBottom: "15px" }}>
              <p>Copyright © 2019 <a href="https://runner-inn.myharavan.com"> Runner Inn</a>. </p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer;

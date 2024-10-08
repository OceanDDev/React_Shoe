/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const About = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-3 d-none d-sm-block d-sm-none d-md-block">
        <div className="sidebar-page">
          <div className="group-menu">
            <div className="page_menu_title title_block">
              <h2>Danh mục trang</h2>
            </div>
            <div className="layered layered-category">
              <div className="layered-content">
                <ul className="menuList-links">
                  <li className="">
                    <a href="home.html" title="Trang chủ">
                      <span>Trang chủ</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="product.html" title="Bộ sưu tập">
                      <span>Bộ sưu tập</span>
                    </a>
                  </li>
                  <li className="has-submenu level0 ">
                    <a title="Sản phẩm">
                      Sản phẩm{" "}
                      <span
                        className="icon-plus-submenu"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      />
                    </a>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body" style={{ border: 0 }}>
                        <ul className="menu-product">
                          <li>
                            <a
                              href="detailproduct.html"
                              title="Sản phẩm - Style 1"
                            >
                              Sản phẩm - Style 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="detailproduct.html"
                              title="Sản phẩm - Style 2"
                            >
                              Sản phẩm - Style 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="detailproduct.html"
                              title="Sản phẩm - Style 3"
                            >
                              Sản phẩm - Style 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="active">
                    <a href="introduce.html" title="Giới thiệu">
                      <span>Giới thiệu</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="blog.html" title="Blog">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="contact.html" title="Liên hệ">
                      <span>Liên hệ</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box_image visible-lg visible-md">
            <div className="banner">
              <a href="">
                <img
                  src="//theme.hstatic.net/1000375638/1000480323/14/page_banner.jpg?v=321"
                  alt="Runner Inn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9 col-sm-12 col-xs-12">
        <div className="page-wrapper">
          <div className="heading-page">
            <h1>Giới thiệu</h1>
          </div>
          <div className="wrapbox-content-page">
            <div className="content-page ">
              <p>
                Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
                Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng,
                thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng
                khi mua hàng trên website của bạn.
              </p>
              <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
              <div>
                <ul>
                  <li>
                    <span>Bạn là ai</span>
                    <br />
                  </li>
                  <li>
                    <span>Giá trị kinh doanh của bạn là gì</span>
                    <br />
                  </li>
                  <li>
                    <span>Địa chỉ cửa hàng</span>
                    <br />
                  </li>
                  <li>
                    <span>
                      Bạn đã kinh doanh trong ngành hàng này bao lâu rồi
                    </span>
                    <br />
                  </li>
                  <li>
                    <span>Bạn kinh doanh ngành hàng online được bao lâu</span>
                    <br />
                  </li>
                  <li>
                    <span>Đội ngũ của bạn gồm những ai</span>
                    <br />
                  </li>
                  <li>
                    <span>Thông tin liên hệ</span>
                    <br />
                  </li>
                  <li>
                    <span>
                      Liên kết đến các trang mạng xã hội (Twitter, Facebook)
                    </span>
                    <br />
                  </li>
                </ul>
              </div>
              <p>
                Bạn có thể chỉnh sửa hoặc xoá bài viết này tại{" "}
                <a href="" style={{ color: "black" }}>
                  <strong>đây</strong>
                </a>
                hoặc thêm những bài viết mới trong phần quản lý{" "}
                <a href="" style={{ color: "black" }}>
                  <strong>Trang nội dung</strong>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default About

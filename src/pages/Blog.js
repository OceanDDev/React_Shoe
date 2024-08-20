/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Blog = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-3 d-none d-sm-block d-sm-none d-md-block">
      <div className="sidebar-blog">
        <div className="news-latest">
          <div className="sidebarblog-title title_block">
            <h2>Bài viết mới nhất</h2>
          </div>
          <div className="list-news-latest layered">
            <div className="item-article clearfix">
              <div className="post-image">
                <a href="">
                  <img
                    src="images/blog/n-1.jpg"
                    alt="Adidas Falcon nổi bật mùa Hè với phối màu color block"
                  />
                </a>
              </div>
              <div className="post-content">
                <h3>
                  <a href="">
                    Adidas Falcon nổi bật mùa Hè với phối màu color block
                  </a>
                </h3>
                <span className="author">
                  <a href="">Be Nguyen</a>
                </span>
                <span className="date">11.06.2019</span>
              </div>
            </div>
            <div className="item-article clearfix">
              <div className="post-image">
                <a href="">
                  <img
                    src="images/blog/n-2.jpg"
                    alt="Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya Runner"
                  />
                </a>
              </div>
              <div className="post-content">
                <h3>
                  <a href="">
                    Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya
                    Runner
                  </a>
                </h3>
                <span className="author">
                  <a href="">Be Nguyen</a>
                </span>
                <span className="date">11.06.2019</span>
              </div>
            </div>
            <div className="item-article clearfix">
              <div className="post-image">
                <a href="">
                  <img
                    src="images/blog/n-3.jpg"
                    alt="Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế chuyển màu đẹp mắt"
                  />
                </a>
              </div>
              <div className="post-content">
                <h3>
                  <a href="">
                    Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế
                    chuyển màu đẹp mắt
                  </a>
                </h3>
                <span className="author">
                  <a href="">Runner Inn</a>
                </span>
                <span className="date">11.06.2019</span>
              </div>
            </div>
            <div className="item-article clearfix">
              <div className="post-image">
                <a href="">
                  <img src="images/blog/n-4.jpg" alt="Bài viết mẫu" />
                </a>
              </div>
              <div className="post-content">
                <h3>
                  <a href="">Bài viết mẫu</a>
                </h3>
                <span className="author">
                  <a href="">Runner Inn</a>
                </span>
                <span className="date">10.06.2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-blog">
          <div className="group-menu">
            <div className="sidebarblog-title title_block">
              <h2>
                Danh mục blog
                <span className="fa fa-angle-down" />
              </h2>
            </div>
            <div className="layered-category">
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
                  <a
                    title="Sản phẩm"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
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
                <li className="">
                  <a href="introduce.html" title="Giới thiệu">
                    <span>Giới thiệu</span>
                  </a>
                </li>
                <li className="active">
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
      </div>
    </div>
    <div className="col-md-9 col-sm-12 col-xs-12">
      <div className="heading-page clearfix">
        <h1>Tin tức</h1>
      </div>
      <div className="blog-content">
        <div className="list-article-content blog-posts">
          {/* Begin: Nội dung blog */}
          <article className="blog-loop">
            <div className="blog-post row">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <a
                  href="detailblog.html"
                  className="blog-post-thumbnail"
                  title="Adidas Falcon nổi bật mùa Hè với phối màu color block"
                  rel="nofollow"
                >
                  <img
                    src="images/blog/n-1.jpg"
                    alt="Adidas Falcon nổi bật mùa Hè với phối màu color block"
                  />
                </a>
              </div>
              <div className="col-md-8 col-xs-12 col-sm-12">
                <h3 className="blog-post-title">
                  <a
                    href="detailblog.html"
                    title="Adidas Falcon nổi bật mùa Hè với phối màu color block"
                  >
                    Adidas Falcon nổi bật mùa Hè với phối màu color block
                  </a>
                </h3>
                <div className="blog-post-meta">
                  <span className="author vcard">Người viết: Huni</span>
                  <span className="date">
                    <time pubdate="" dateTime="2019-06-11">
                      11.06.2019
                    </time>
                  </span>
                </div>
                <p className="entry-content">
                  Cuối tháng 5, adidas Falcon đã cho ra mắt nhiều phối màu đón
                  chào mùa Hè khiến giới trẻ yêu thích không thôi. Tưởng
                  chừng...
                </p>
              </div>
            </div>
          </article>
          <article className="blog-loop">
            <div className="blog-post row">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <a
                  href="detailblog.html"
                  className="blog-post-thumbnail"
                  title="Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya Runner"
                  rel="nofollow"
                >
                  <img
                    src="images/blog/n-2.jpg"
                    alt="Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya Runner"
                  />
                </a>
              </div>
              <div className="col-md-8 col-xs-12 col-sm-12">
                <h3 className="blog-post-title">
                  <a
                    href="detailblog.html"
                    title="Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya Runner"
                  >
                    Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya
                    Runner
                  </a>
                </h3>
                <div className="blog-post-meta">
                  <span className="author vcard">Người viết: Huni</span>
                  <span className="date">
                    <time pubdate="" dateTime="2019-06-11">
                      11.06.2019
                    </time>
                  </span>
                </div>
                <p className="entry-content">
                  Là một trong những đôi giày chạy bộ tốt nhất vào những năm
                  1994, 1995, Saucony&nbsp;Aya Runner vừa có màn trở lại vô cùng
                  ấn...
                </p>
              </div>
            </div>
          </article>
          <article className="blog-loop">
            <div className="blog-post row">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <a
                  href="detailblog.html"
                  className="blog-post-thumbnail"
                  title="Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế chuyển màu đẹp mắt"
                  rel="nofollow"
                >
                  <img
                    src="images/blog/n-3.jpg"
                    alt="Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế chuyển màu đẹp mắt"
                  />
                </a>
              </div>
              <div className="col-md-8 col-xs-12 col-sm-12">
                <h3 className="blog-post-title">
                  <a
                    href="detailblog.html"
                    title="Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế chuyển màu đẹp mắt"
                  >
                    Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế
                    chuyển màu đẹp mắt
                  </a>
                </h3>
                <div className="blog-post-meta">
                  <span className="author vcard">Người viết: Huni</span>
                  <span className="date">
                    <time pubdate="" dateTime="2019-06-11">
                      11.06.2019
                    </time>
                  </span>
                </div>
                <p className="entry-content">
                  Là một trong những mẫu giày retro có nhiều phối màu gradient
                  đẹp nhất từ trước đến này,&nbsp;Nike Vapormax Plus vừa có màn
                  trở lại...
                </p>
              </div>
            </div>
          </article>
          <article className="blog-loop">
            <div className="blog-post row">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <a
                  href="detailblog.html"
                  className="blog-post-thumbnail"
                  title="Bài viết mẫu"
                  rel="nofollow"
                >
                  <img src="images/blog/n-4.jpg" alt="Bài viết mẫu" />
                </a>
              </div>
              <div className="col-md-8 col-xs-12 col-sm-12">
                <h3 className="blog-post-title">
                  <a href="detailblog.html" title="Bài viết mẫu">
                    Bài viết mẫu
                  </a>
                </h3>
                <div className="blog-post-meta">
                  <span className="author vcard">Người viết: Huni</span>
                  <span className="date">
                    <time pubdate="" dateTime="2019-06-10">
                      10.06.2019
                    </time>
                  </span>
                </div>
                <p className="entry-content">
                  Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng
                  bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng,...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="sortpagibar pagi clearfix text-center">
          <div id="pagination" className="clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <span className="page-node current">1</span>
              <a className="page-node" href="">
                2
              </a>
              <a className="next" href="">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 31 10"
                  style={{
                    enableBackground: "new 0 0 31 10",
                    width: 31,
                    height: 10
                  }}
                  xmlSpace="preserve"
                >
                  <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 " />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { getHotProducts } from '../services/productService';
const Home = () => {
 const [hotProducts,setHotProducts] = useState([]) ;
 useEffect(()=>{
  const fetchHotProducts = async () => { 
    try {
     const num = 5; // Số lượng sản phẩm hot bạn muốn lấy, có thể thay đổi tùy ý
        const hotProductsData = await getHotProducts(num);
        setHotProducts(hotProductsData);
    } catch (error) {
      console.log("Error fetching products:",error);
    }
  };
  fetchHotProducts()
 },[])
  return (
    <div>
    
      <>
  {/*Content*/}
  <img
                     
                      
                     src="images/collection_banner.jpg"
                     alt=""
                />
  <div className="content">
    <div className="container">
      <div className="hot_sp" style={{ paddingBottom: 10 }}>
        <h2 style={{ textAlign: "center", paddingTop: 10 }}>
          <a
            style={{ fontSize: 28, color: "black", textDecoration: "none" }}
            href=""
          >
            Sản phẩm bán chạy
          </a>
        </h2>
        <div
          className="view-all"
          style={{ textAlign: "center", paddingTop: "-10px" }}
        >
          <a style={{ color: "black", textDecoration: "none" }} href="">
            Xem thêm
          </a>
        </div>
      </div>
    </div>
    {/*Product*/}
    <div className="container" style={{ paddingBottom: 50 }}>
      <div className="row">
      {hotProducts.map(product =>(
        <div className="col-md-3 col-sm-6 col-xs-6 col-6" key={product._id} >
          <div className="product-block">
            <div className="product-img fade-box">
            <Link  to={`/productDetail/${product._id}`}>
              <p href="#" title="Adidas EQT Cushion ADV" className="img-resize">
                <img
          src={`https://server-shoe-wheat.vercel.app/images/${product.image}`}
          alt="Adidas EQT Cushion ADV"
                  className="lazyloaded"
                />
                <img
          src={`https://server-shoe-wheat.vercel.app/images/${product.image}`}
          alt="Adidas EQT Cushion ADV"
                  className="lazyloaded"
                />
              </p>
              </Link>
        
            </div>
            <div className="product-detail clearfix">
              <div className="pro-text">
                <a
                  style={{
                    color: "black",
                    fontSize: 14,
                    textDecoration: "none"
                  }}
                  href="#"
                  title="Adidas EQT Cushion ADV"
                  inspiration=""
                  pack=""
                >
  {product.product_name}
                </a>
                </div>
              <div className="pro-price">
                <p className="">{product.price} $</p>
              </div>
            </div>
          </div>
        </div>
     
      ))}
        
      </div>
      
    </div>
    <section className="section wrapper-home-banner">
      <div className="container-fluid" style={{ paddingBottom: 50 }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 home-banner-pd">
            <div className="block-banner-category">
              <a href="#" className="link-banner wrap-flex-align flex-column">
                <div className="fg-image fade-box">
                  <img
                    className="lazyloaded"
                    src="images/shoes/block_home_category1_grande.jpg"
                    alt="Shoes"
                  />
                </div>
                <figcaption className="caption_banner site-animation">
                  <p>Bộ sưu tập</p>
                  <h2>Đại sứ thương hiệu</h2>
                </figcaption>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 home-banner-pd">
            <div className="block-banner-category">
              <a href="#" className="link-banner wrap-flex-align flex-column">
                <div className="fg-image fade-box">
                  <img
                    className="lazyloaded"
                    src="images/shoes/block_home_category2_grande.jpg"
                    alt="Shoes"
                  />
                </div>
                <figcaption className="caption_banner site-animation">
                  <p>Bộ sưu tập</p>
                  <h2>Thương hiệu</h2>
                </figcaption>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 home-banner-pd">
            <div className="block-banner-category">
              <a href="#" className="link-banner wrap-flex-align flex-column">
                <div className="fg-image">
                  <img
                    className="lazyloaded"
                    src="images/shoes/block_home_category3_grande.jpg"
                    alt="Shoes"
                  />
                </div>
                <figcaption className="caption_banner site-animation">
                  <p />
                  <h2>Blog</h2>
                </figcaption>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="content">
        <div className="container">
          
        </div>
        {/*Product*/}
      </div>
      <div
        className="container product"
        style={{ width: "100%", margin: "auto" }}
      >
        <div className="owl-carousel owl-theme owl-product-setting">
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <div className="product-block">
                <div className="product-img fade-box">
                  <a
                    href="#"
                    title="Adidas Ultraboost W"
                    className="img-resize"
                  >
                    <img
                      src="images/shoes/801432_01_b16d089f8bda434bacfe4620e8480be1_grande.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                    <img
                      src="images/shoes/shoes fade 4.jpg"
                      alt="Adidas Ultraboost W"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="product-detail clearfix">
                  <div className="pro-text">
                    <a
                      style={{
                        color: "black",
                        fontSize: 14,
                        textDecoration: "none"
                      }}
                      href="#"
                      title="Adidas Ultraboost W"
                      inspiration=""
                      pack=""
                    >
                      Adidas Ultraboost W
                    </a>
                  </div>
                  <div className="pro-price">
                    <p className="">5,300,000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="">
      <div className="content">
        <div className="container">
          <div className="hot_sp">
            <h2 style={{ textAlign: "center", paddingTop: 10 }}>
              <a
                style={{ fontSize: 28, color: "black", textDecoration: "none" }}
                href=""
              >
                Bài viết mới nhất
              </a>
            </h2>
            <br />
          </div>
        </div>
      </div>
      {/*New*/}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="post_item">
                <div className="post_featured">
                  <a href="#" title="Adidas EQT Cushion ADV">
                    <img
                      className="img-resize"
                      style={{ paddingBottom: 15 }}
                      src="images/shoes/new-1.jpg"
                      alt="Adidas Falcon nổi bật mùa Hè với phối màu color block"
                    />
                  </a>
                </div>
                <div className="pro-text">
                  <span className="post_info_item">Thứ Ba 11,06,2019</span>
                </div>
                <div className="pro-text">
                  <h3 className="post_title">
                    <a
                      style={{
                        color: "black",
                        fontSize: 18,
                        textDecoration: "none"
                      }}
                      href="#"
                      inspiration=""
                      pack=""
                    >
                      Adidas Falcon nổi bật mùa Hè với phối màu color block
                    </a>
                  </h3>
                </div>
                <div style={{ textAlign: "center", paddingBottom: 30 }}>
                  <span>
                    Cuối tháng 5, adidas Falcon đã cho ra mắt nhiều phối màu đón
                    chào mùa Hè khiến giới trẻ yêu thích không thôi. Tưởng chừng
                    thương hiệu sẽ tiếp tục...
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post_item">
                <div className="post_featured">
                  <a href="#" title="Adidas EQT Cushion ADV">
                    <img
                      className="img-resize"
                      style={{ paddingBottom: 15 }}
                      src="images/shoes/new-2.jpg"
                      alt="Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya Runner"
                    />
                  </a>
                </div>
                <div className="pro-text">
                  <span className="post_info_item">Thứ Ba 11,06,2019</span>
                </div>
                <div className="pro-text">
                  <h3 className="post_title">
                    <a
                      style={{
                        color: "black",
                        fontSize: 18,
                        textDecoration: "none"
                      }}
                      href="#"
                      inspiration=""
                      pack=""
                    >
                      Saucony hồi sinh mẫu giày chạy bộ cổ điển của mình – Aya
                      Runner
                    </a>
                  </h3>
                </div>
                <div style={{ textAlign: "center", paddingBottom: 30 }}>
                  <span>
                    Là một trong những đôi giày chạy bộ tốt nhất vào những năm
                    1994, 1995, Saucony Aya Runner vừa có màn trở lại vô cùng ấn
                    tượngCó vẻ như 2019...
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post_item">
                <div className="post_featured">
                  <a href="#" title="Adidas EQT Cushion ADV">
                    <img
                      className="img-resize"
                      style={{ paddingBottom: 15 }}
                      src="images/shoes/new-3.jpg"
                      alt="Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế chuyển màu đẹp mắt"
                    />
                  </a>
                </div>
                <div className="pro-text">
                  <span className="post_info_item">Thứ Ba 11,06,2019</span>
                </div>
                <div className="pro-text">
                  <h3 className="post_title">
                    <a
                      style={{
                        color: "black",
                        fontSize: 18,
                        textDecoration: "none"
                      }}
                      href="#"
                      inspiration=""
                      pack=""
                    >
                      Nike Vapormax Plus trở lại với sắc tím mộng mơ và thiết kế
                      chuyển màu đẹp mắt
                    </a>
                  </h3>
                </div>
                <div style={{ textAlign: "center", paddingBottom: 30 }}>
                  <span>
                    Là một trong những mẫu giày retro có nhiều phối màu gradient
                    đẹp nhất từ trước đến này, Nike Vapormax Plus vừa có màn trở
                    lại bá đạo dành cho...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section wrapper-home-newsletter">
      <div className="container-fluid">
        <div className="content-newsletter">
          <h2>Đăng ký</h2>
          <p>
            Đăng ký nhận bản tin của Runner Inn để cập nhật những sản phẩm mới,
            nhận thông tin ưu đãi đặc biệt và thông tin giảm giá khác.
          </p>
          <div className="form-newsletter">
            <form action="" acceptCharset="UTF-8" className="">
              <div className="form-group">
                <input type="hidden" id="contact_tags" />
                <input
                  required=""
                  type="email"
                  defaultValue=""
                  placeholder="Nhập email của bạn"
                  aria-label="Email Address"
                  className=""
                />
                <button type="submit" className="">
                  <span>Gửi</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-gallery">
      <div className="">
        <div className="hot_sp" style={{ paddingTop: 70, paddingBottom: 50 }}>
          <h2 style={{ textAlign: "center", paddingTop: 10 }}>
            <a
              style={{ fontSize: 28, color: "black", textDecoration: "none" }}
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
</>

    </div>
  )
}

export default Home

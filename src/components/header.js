import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkLogin } from '../services/accountService';
import './header.css';  
import { useShoppingContext } from '../context/ShoppingContext';

const Header = () => {
  const navigate = useNavigate();
  const { cartQty } = useShoppingContext();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [input, setInput] = useState("");
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [user, setUser] = useState(null); // Sử dụng user để chứa thông tin người dùng

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await checkLogin(); // Đảm bảo checkLogin trả về đối tượng người dùng
      setUser(loggedInUser);
    };

    fetchUser();
  }, []);

  const search = () => {
    if (input.trim()) {
      navigate(`/products?search=${input}`);
      setInput("");
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const onLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <div className="header">
        <a style={{ color: '#ffffff', textDecoration: 'none' }} href="/index.html">
          MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG NỘI THÀNH 300K - ĐỔI TRẢ TRONG 30 NGÀY - ĐẢM BẢO CHẤT LƯỢNG
        </a>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" className="logo-top" alt="Logo" />
          </Link>
          <div className="desk-menu collapse navbar-collapse justify-content-md-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">TRANG CHỦ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">BỘ SƯU TẬP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">GIỚI THIỆU</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">LIÊN HỆ</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-nav ml-auto">
            <div className="account-icon" onClick={toggleAccountMenu} style={{ cursor: 'pointer', position: 'relative' }}>
              <i className="fas fa-user-alt" style={{ color: "#272727", marginTop: "13px" }}></i>
              {showAccountMenu && (
  <div
    className="account-menu"
    style={{
      position: 'absolute',
      top: '40px',
      right: '0',
      backgroundColor: 'white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      borderRadius: '8px',
      zIndex: '1000',
      padding: '10px 20px',
      minWidth: '150px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
        margin: '0',
      }}
    >
      {!user ? (
        <>
          <li style={{ marginBottom: '10px' }}>
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: '#333',
                padding: '8px 0',
                display: 'block',
              }}
            >
              Đăng nhập
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{
                textDecoration: 'none',
                color: '#333',
                padding: '8px 0',
                display: 'block',
              }}
            >
              Đăng ký
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              onClick={onLogout}
              style={{
                textDecoration: 'none',
                color: '#333',
                padding: '8px 0',
                display: 'block',
              }}
            >
              Đăng xuất 
            </Link>
            
          </li>
          {user.isAdmin && (
            <li>
              <Link
                to="/admin"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  padding: '8px 0',
                  display: 'block',
                }}
              >
                Trang quản trị
              </Link>
            </li>
          )}
        </>
      )}
    </ul>
  </div>
)}

            </div>

            <Link to="#" onClick={toggleSearchBar}>
              <i className="fas fa-search" style={{ color: "black", marginTop: "13px" }}></i>
            </Link>

            {showSearchBar && (
              <div className="search-bar active">
                <input value={input} onChange={handleInputChange} type="text" placeholder="Nhập từ khóa..." />
                <button type="button" onClick={search}>Tìm kiếm</button>
              </div>
            )}

            <Link className="cart-icon" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-badge">{cartQty}</span>
            </Link>

            {user && (
              <Link style={{ color: "#272727", marginTop: "12px" }} to="#">
                <i>Xin chào {user.fullname}</i>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="owl-carousel owl-theme owl-carousel-setting">
        <div className="item"><img src="images/slideshow_1.jpg" className="d-block w-100" alt="Slideshow 1" /></div>
        <div className="item"><img src="images/slideshow_2.jpg" className="d-block w-100" alt="Slideshow 2" /></div>
      </div>
    </div>
  );
}

export default Header;

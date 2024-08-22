/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import './cart.css';  
import { useShoppingContext } from '../context/ShoppingContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { checkLogin } from '../services/accountService'; // Giả sử bạn có authService để kiểm tra trạng thái đăng nhập từ localStorage

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartQty, totalPrice, increaseQty, decreaseQty, removeCartItem } = useShoppingContext();
  const { user } = useAuthContext(); // Sử dụng `user` để kiểm tra trạng thái đăng nhập

  // Kiểm tra trạng thái đăng nhập khi component được mount
  useEffect(() => {
    const user = checkLogin();
    if (user) {
      // Nếu cần, có thể xử lý thêm trạng thái đăng nhập ở đây
    }
  }, []);

  const handlePurchase = () => {
    if (user) {
      navigate('/checkout'); // Điều hướng đến trang checkout nếu đã đăng nhập
    } else {
      alert('Bạn cần đăng nhập để mua hàng!');
      navigate('/login'); // Điều hướng đến trang đăng nhập nếu chưa đăng nhập
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {cartQty} items
              </div>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="alert alert-warning" role="alert">
              Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src={`https://server-shoe-inky.vercel.app/images/${item.image}`}/>
                  </div>
                  <div className="col">
                    <div className="row text-muted">{item.product_name}</div>
                  </div>
                  <div className="col">
                    <button className="bt1" style={{ border: "none" }} onClick={() => decreaseQty(item._id)}>-</button>
                    <a className="border">{item.qty}</a>
                    <button className="bt2" style={{ border: "none" }} onClick={() => increaseQty(item._id)}>+</button>
                  </div>
                  <div className="col">
                    € {item.price}{" "}
                    <span className="close">
                      <button style={{ border: "none" }} onClick={() => removeCartItem(item._id)}>✕</button>
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="back-to-shop">
            <a href="#">←</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5><b>Summary</b></h5>
          </div>
          <hr />
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">Standard-Delivery- €5.00</option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">€ {totalPrice}</div>
          </div>
          <button className="btn" onClick={handlePurchase}>
            MUA HÀNG
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

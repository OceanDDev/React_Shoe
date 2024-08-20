import React from 'react';
import { useShoppingContext } from '../context/ShoppingContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useShoppingContext();
  const { isAuthenticated } = useAuthContext();
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const onSubmit = (data) => {
    console.log(data);
    clearCart();

    toast.success('Mua hàng thành công!', {
      onClose: () => {
        navigate('/'); // Navigate to home after toast is closed
      }
    });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h4><b>Checkout</b></h4>
      </div>
      <div className="checkout-details">
        <div className="row">
          <div className="col-md-8">
            <div className="order-items">
              {cartItems.length === 0 ? (
                <div className="alert alert-warning" role="alert">
                  Giỏ hàng của bạn đang trống.
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-details">
                      <img src={`http://localhost:3000/images/${item.image}`} alt={item.product_name} />
                      <div>
                        <h6>{item.product_name}</h6>
                        <p>€ {item.price} x {item.qty}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5><b>Summary</b></h5>
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h5>SHIPPING DETAILS</h5>
                <input type="text" placeholder="Full Name" {...register('fullName', { required: 'Full Name is required' })} />
                {errors.fullName && <small>{errors.fullName.message}</small>}
                
                <input type="email" placeholder="Email" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' } })} />
                {errors.email && <small>{errors.email.message}</small>}
                
                <input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
                {errors.address && <small>{errors.address.message}</small>}
                
                <input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
                {errors.city && <small>{errors.city.message}</small>}
                
                <input type="text" placeholder="State" {...register('state', { required: 'State is required' })} />
                {errors.state && <small>{errors.state.message}</small>}
                
                <input type="text" placeholder="Zip Code" {...register('zip', { required: 'Zip Code is required' })} />
                {errors.zip && <small>{errors.zip.message}</small>}
              </div>

              <hr />

              <div>
                <h5>PAYMENT DETAILS</h5>
                <input type="text" placeholder="Name on Card" {...register('cardName', { required: 'Name on Card is required' })} />
                {errors.cardName && <small>{errors.cardName.message}</small>}
                
                <input type="text" placeholder="Card Number" {...register('cardNumber', { required: 'Card Number is required' })} />
                {errors.cardNumber && <small>{errors.cardNumber.message}</small>}
                
                <input type="text" placeholder="Expiration Date (MM/YY)" {...register('expDate', { required: 'Expiration Date is required' })} />
                {errors.expDate && <small>{errors.expDate.message}</small>}
                
                <input type="text" placeholder="CVV" {...register('cvv', { required: 'CVV is required' })} />
                {errors.cvv && <small>{errors.cvv.message}</small>}
              </div>

              <hr />

              <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">€ {totalPrice}</div>
              </div>
              <button className="btn-place-order" type="submit">
                ĐẶT HÀNG
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;

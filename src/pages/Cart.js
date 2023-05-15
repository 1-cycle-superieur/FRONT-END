import React from 'react';
import '../css/cart.css';
import '../css/products.css';
import Header from '../components/Header';
import Order from '../components/Order'; 
function Cart() {
  return (
    <>
      <Header/>
      <section>
        <div className="header2">
          <h6>Home / Shopping Bag </h6>
          <h4 id="state">Shopping Bag</h4><h4> {'>'} Place Order {'>'} Pay {'>'} Order Complete</h4>
        </div>

        <div className="small-container cart-page">
          <table>
            <thead>
              <tr>
                <th id="item">Item</th>
                <th id="price">Price</th>
                <th id="qty">Quantity</th>
                <th id="total">Total</th>
              </tr>
            </thead>
            <tbody>
              <Order/>
              <Order/>
              <Order/>
              <Order/>
              <Order/>
            </tbody>
          </table>
        </div>

        <div className="order">
          <h4>Order Summary</h4>
          <h6>Sub Total</h6>
          <h5>95OO Da</h5>
          <button className="checkout-btn">Checkout Now</button>
        </div>
      </section>
    </>
  );
}

export default Cart;

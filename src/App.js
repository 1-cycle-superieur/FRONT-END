import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './pages/Products'
import ProductDetails from './pages/Product-Details'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import React from 'react'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Products" element={<Products/>} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/ProductDetails"element={<ProductDetails/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;







/*
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

<Route path="/Signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />

import React from 'react';
import './cart.css';
import './style.css';
import Header from './components/Header';
import Order from './components/Order'; 
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



--- Product details page ---
import React, { useState } from 'react';
import './style.css';
import './product.css';
import Header from './components/Header';
import img1 from './imgs/f1.jpg';
import img2 from './imgs/f2.jpg';
import img3 from './imgs/f4.jpg';
import img4 from './imgs/f5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';


function ProductsPage() {
  const images = [img1, img2, img3, img4];

  const handleClick = (src) => {
    document.getElementById('MainImg').src = src;
  };

  return (
    <>
      <Header/>
      <section id="product-details" className="section-p1">
        <div className="single-pro-image">
          <img src={images[0]} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            {images.map((image, index) => (
              <div key={index} className="small-img-col">
                <img
                  src={image}
                  width="100%"
                  className="small-img"
                  alt=""
                  onClick={() => handleClick(image)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Summer T-Shirt</h4>
          <h2>2500 DA</h2>
          <select>
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <input type="number" value="1" />
          <button className="add-cart">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eum
            laudantium, mollitia odio ipsa iure sit quam fugiat distinctio!
            Quasi est reiciendis, similique cumque doloribus distinctio
            repellendus perspiciatis quos iste corporis. Eum laudantium,
            mollitia odio ipsa iure sit quam fugiat distinctio! Quasi est
            reiciendis, similique cumque doloribus distinctio repellendus
            perspiciatis quos iste corporis.
          </span>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;


--- Products page ---
import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import img1 from './imgs/f1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './style.css';

function ProductsPage() {
  const toggleHeart = (number) => {
    const heartIcon = document.getElementById(`heart-icon-${number}`);
    if (heartIcon.classList.contains("far")) {
      heartIcon.classList.remove("far");
      heartIcon.classList.add("fas");
      heartIcon.style.color = "red";
    } else {
      heartIcon.classList.remove("fas");
      heartIcon.classList.add("far");
      heartIcon.style.color = "black";
    }
  };

  return (
    <div>
      <Header/>
      <section id="product1" className="section-p1">
        <h2>Products</h2>
        <p>For each one of you</p>
        <div className="pro-container">
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(1)} id="heart-icon-1" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(2)} id="heart-icon-2" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(3)} id="heart-icon-3" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(4)} id="heart-icon-4" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(5)} id="heart-icon-5" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(6)} id="heart-icon-6" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(7)} id="heart-icon-7" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(8)} id="heart-icon-8" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(9)} id="heart-icon-9" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(10)} id="heart-icon-10" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(11)} id="heart-icon-11" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(12)} id="heart-icon-12" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(13)} id="heart-icon-13" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(14)} id="heart-icon-14" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
          </div>
          <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(15)} id="heart-icon-15" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <a href="#">
              <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ProductsPage;*/

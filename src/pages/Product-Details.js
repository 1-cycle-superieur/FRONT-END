import React, { useState } from 'react';
import '../css/products.css';
import '../css/product.css';
import Header from '../components/Header';
import img1 from '../imgs/f1.jpg';
import img2 from '../imgs/f2.jpg';
import img3 from '../imgs/f4.jpg';
import img4 from '../imgs/f5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';


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
          <Link to={'/Cart'}>
          <button className="add-cart">Add To Cart</button>
          </Link>
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
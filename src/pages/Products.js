import React, { useState } from 'react';
import '../css/products.css';
import Header from '../components/Header';
import img1 from '../imgs/f1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

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
            <Link to={'/Wishlist'}>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(1)} id="heart-icon-1" className="far fa-heart" />
              </Link>
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
             <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link> 
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
              <Link to={'/ProductDetails'}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
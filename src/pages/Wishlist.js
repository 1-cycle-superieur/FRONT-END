import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Header from "../components/Header";
import WishlistItem from "../components/WishlistItem";
import '../css/Wishlist.css';

function Wishlist () {
    return (
        <>
      <Header/>
      <section>
        <div className="header2">
          <h6>Home / Wishlist </h6>
          <h4 id="state">Wishlist</h4>
        </div>

        <div className="small-container wishlist-page">
          <table>
            <thead>
              <tr>
                <th id="item">Item</th>
                <th id="price">Price</th>
                <th id="act">Action</th>
              </tr>
            </thead>
            <tbody>
              <WishlistItem/>
              <WishlistItem/>
              <WishlistItem/>
              <WishlistItem/>
            </tbody>
          </table>
        </div>
      </section>
    </>

    )
      
    
  }
  export default Wishlist;
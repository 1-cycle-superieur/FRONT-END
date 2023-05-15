import logo from '../imgs/Logo.png';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export default function Header(){
    return (
      <section id="header">
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div>
          <ul id="navbar">
            <div id='navbar-items'>
            <li>
              <a className="active">
                Home
              </a>
            </li>
            <li>
            <Link to={'/Products'}>
            <a className="id">
                Products
              </a>
              </Link>
            </li>
            <li>
            <Link to={'/Products'}>
            <a className="id">
                Men
              </a>
              </Link>
            </li>
            <li>
            <Link to={'/Products'}>
            <a className="id">
                Women
              </a>
              </Link>
            </li>
            <li>
            <Link to={'/Products'}>
            <a className="id">
                Kids
              </a>
              </Link>
            </li>
            </div>
            <li>
            <Link to={'/Cart'}>
            <a>
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
              </Link>
            </li>
            <li>
            <Link to={'/Wishlist'}>
            <a>
              <FontAwesomeIcon icon={faHeart} />
              </a>
              </Link>
            </li>
            <li>
            <Link to={'/Signin'}>
            <a>
                <FontAwesomeIcon icon={faUserCircle} />
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    )
}
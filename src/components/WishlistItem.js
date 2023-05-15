import img from '../imgs/f1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export default function WishlistItem(){
    return (
      <tr>
      <td>
        <div className="product-info">
          <img src={img} alt="" />
          <div>
            <p>Summer T-Shirt</p>
            <a href="#" className='faTrash'>
             <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
          <div className="wishlist">
          <button id="checkout-btn">
          <Link to={'/Cart'}>
            <a>Add to Cart</a>
          </Link>
          </button>
        </div>
        </div>
      </td>
      <td>2500 DA</td>
    </tr>
    )
}
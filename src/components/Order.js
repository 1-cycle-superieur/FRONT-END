import img from '../imgs/f1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Order (){
    return (
        <tr>
                <td>
                  <div className="cart-info">
                    <img src={img} alt="" />
                    <div>
                      <p>Summer T-Shirt</p>
                      <a href="#" className='faTrash'>
                       <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </div>
                  </div>
                </td>
                <td>2500 DA</td>
                <td><input type="number" defaultValue="1" /></td>
                <td id="total-dinars">2500DA</td>
              </tr>
    )
}
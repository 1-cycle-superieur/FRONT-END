import './content.css'
import {FaEllipsisV,FaPlus} from 'react-icons/fa';
import data from './Data'
import axios from "axios"
import robe from "../images/robe.jpg"

import { NavLink } from 'react-router-dom';
function content(){
  function affich(){
    
     axios.get("http://localhost:4000/products/list").then((data)=>console.log(data))
  }
 
    function Affichier() {
        var select = document.querySelector('.ul');
        if (select.style.display === "none") {
          select.style.display = "block";
        } else {
          select.style.display = "none";
        }
      }
    function toggleSelect1() {
      axios.get("http://localhost:4000/products/list").then((data)=>console.log(data))
        var select = document.getElementById('list1');
        if (select.style.display === "none") {
          select.style.display = "block";
        } else {
          select.style.display = "none";
        }
      }
      function toggleSelect2() {
       
        var select = document.getElementById('list2');
        if (select.style.display === "none") {
          select.style.display = "block";
        } else {
          select.style.display = "none";
        }
      }
      function toggleSelect3() {
        var select = document.getElementById('list3');
        if (select.style.display === "none") {
          select.style.display = "block";
        } else {
          select.style.display = "none";
        }
      }
      const tabel=data.map((item)=>{
        return(
          <tr>
            <td>{item.id}</td>
            <td>{item.photo}</td>
            <td>{item.name}</td>
            <td>{item.Categorie}</td>
            <td>{item.price}</td>
            <td>{item.Stock}</td>
          </tr>
        )
      })
      
   
return(
    <div className="contentt">
    <div className='top'>
    <p>Dashbord / Products</p>
    
    <button> <i><FaPlus/></i>
    <NavLink to="/AjouterProduct">
    Add Product
    </NavLink>
    </button>
    
    </div>
         <div className='filter'>
         <h3 onClick={affich}>Filter Products</h3>
         <div className='select'  >
           <div className='select-btn'  onClick={toggleSelect1}>
             <sapn className='bnt-text'>Categories</sapn>
             <i class="fa-solid fa-chevron-down"></i>
           </div>
           <form className='fromList' id='list1'>
           <input type="checkbox" id="All" name="All"/>
           <label for="All">All</label>
           <input type="checkbox" id="men" name="Men"/>
           <label for="men">Men</label>
           <input type="checkbox" id="women" name="Women"/>
           <label for="women">Women</label>
           <input type="checkbox" id="kids" name="Kids"/>
           <label for="kids">Kids</label>
           
           </form>
         </div>
         <div className='select'>
         <div className='select-btn' onClick={toggleSelect2}>
         <sapn className='bnt-text' >Color</sapn>
         <i class="fa-solid fa-chevron-down"></i>
         </div>
         <form className='fromList' id='list2'>
           <input type="checkbox" id="All" name="All"/>
           <label for="All">All</label>
           <input type="checkbox" id="men" name="Men"/>
           <label for="men">Men</label>
           <input type="checkbox" id="women" name="Women"/>
           <label for="women">Women</label>
           <input type="checkbox" id="kids" name="Kids"/>
           <label for="kids">Kids</label>
           
           </form>
         </div>
         
         <div className='select'>
         <div className='select-btn' onClick={toggleSelect3}>
         <sapn className='bnt-text' >Pric</sapn>
         <i class="fa-solid fa-chevron-down"></i>
         </div>
         <form className='fromList' id='list3'>
           <input type="checkbox" id="All" name="All"/>
           <label for="All">All</label>
           <input type="checkbox" id="men" name="Men"/>
           <label for="men">Men</label>
           <input type="checkbox" id="women" name="Women"/>
           <label for="women">Women</label>
           <input type="checkbox" id="kids" name="Kids"/>
           <label for="kids">Kids</label>
           
           </form>
         </div>
         
         
    </div>
    <div className='tabelProducts'>
    <table>
    <thead>
    <tr>
                            <th>Id</th>
                            <th>photo</th>
                            <th>Name</th>
                            <th>Categorie</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
    </tr>
    </thead>
    <tbody>
                        <tr>
                            <td>11111</td>
                            <td><img className='imageP' src={robe}/></td>
                            <td>robe</td>
                            <td>Femme</td>
                            <td>2000 DZ</td>
                            <td>in stock</td>
                            <td>
                            <button>Show more</button>
                            {/* <div className='Showmore'>
                            <div className='ul'>
                                <ul>
                                <li>Show more</li>
                                <li>Edit</li>
                                <li>Delet</li>
                                </ul>
                                </div>
                                <button onClick={Affichier} className='button'><i><FaEllipsisV /></i></button>
                            </div> */}
                            </td>
                        </tr>
                        <tr>
                            <td>11111</td>
                            <td><img className='imageP' src={robe}/></td>
                            <td>Ikram</td>
                            <td>Active</td>
                            <td>01/01/2023</td>
                            <td>Active</td>
                            <td>
                            <button>Show more</button>
                            {/* <div className='Showmore'>
                            <div className='ul'>
                                <ul>
                                <li>Show more</li>
                                <li>Edit</li>
                                <li>Delet</li>
                                </ul>
                                </div>
                                <button onClick={Affichier} className='button'><i><FaEllipsisV /></i></button>
                            </div> */}
                            </td>
                        </tr>
                       
                       
                       
                     
                       
                       
                       
                        
                    </tbody>
   
    </table>
    </div>
    </div>
)
}
export default content;

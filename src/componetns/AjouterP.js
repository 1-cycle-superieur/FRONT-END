import './Ajouterp.css'
import { NavLink } from 'react-router-dom';
import ImageUpload from "./ImageUpload";
function AjouterP(){
    return(
      <div className='Edit'>
        <h2>Products / <span>Ajouter Products</span> </h2>
        <form>
            <div className='info'>
                <h3>General information</h3>
                
                    <div className='inputText'>
                    <label for="productname" class="formbold-form-label">
                       Product name
                    </label>
                 <input
                    type="text"
                    name="productname"
                    id="productname"
                    class="formbold-form"
                 />
                    </div>
                    <div className='inputText'>
                    <label for="matricule" class="formbold-form-label">
                       Matricule
                    </label>
                 <input
                    type="text"
                    name="matricule"
                    id="matricule"
                    class="formbold-form"
                 />
                    </div>
                    <div className='inputText'>
                    <label for="quantite" class="formbold-form-label">
                    Quantité
                    </label>
                    <input
                     type="number"
                      name="quantite"
                       id="quantite"
                       class="formbold-form"
                         />
                    </div>
                    <div className='categorie'>
                    <p>Categorie</p>
                    <div className="inputcheckbox">

                        
                        <label class="gender">Homme
                           <input type="radio" name="gender" value="homme"/>
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Femme
                           <input type="radio" name="gender" value="femme"/>
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Enfant
                           <input type="radio" name="gender" value="enfant" />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Unisex
                           <input type="radio" name="gender" value="unisex" />
                           <span class="checkmark"></span>
                        </label>
                    </div>
                    </div>
                    <div className='inputText'>
                    <label for="quantite" class="formbold-form-label">
                    Color
                    </label>
                    <input
                     type="text"
                      name="quantite"
                       id="quantite"
                       class="formbold-form"
                         />
                    </div>
                    <div className='inputText'>
                    <label for="quantite" class="formbold-form-label">
                    size
                    </label>
                    <input
                     type="text"
                      name="quantite"
                       id="quantite"
                       class="formbold-form"
                         />
                    </div>
                    
                 {/* <div class="'inputText'" >
              
                 <label className="formbold-form-label" for='size' >size </label>
                 <input className='formbold-form' id='size' type='text'  /> */}
                
                 {/* <label className='labelnumber' for='size' >XXL 
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 <label className='labelnumber' for='size' >XXL 
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 <label className='labelnumber' for='size' >XXL 
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 <label className='labelnumber' for='size' >XXL 
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 <label className='labelnumber' for='size' >XXL
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 <label className='labelnumber' for='size' >XXL 
                 <input className='inputNumber' id='size' type='number' value="1" />
                 </label>
                 */}
                 
                 
                 
                 
                
                {/* </div> */}
                    
                
            </div>
            <div className='image'>
               <h3>Image</h3>
               <div className='Editproductt'>
                 {/* <div className='color'>
                    <label className='colorP' for="colorP">color</label>
                    <input type="color" id="colorP" name="head" value="#28BD55"/>
                 </div> */}
                 {/* <ImageUpload /> */}
                 {/* <div className='ProductImage'>
                
                 <img src='' className='imageProuduct'></img> */}
                 <ImageUpload />
                 
                 {/* </div> */}
               </div>
               <div className='saveB'>
               <button className='save' type='submit'>Save Product</button>
               </div>
            </div>
            
            </form> 
        </div>
    )

                
       
//         <div class="formbold-main-wrapper">
  
//   <div class="formbold-form-wrapper">

//     <form action="" method="POST">

//       <div class="formbold-input-flex">
//         <div>
//           <label for="productname" class="formbold-form-label">
//             Product name
//           </label>
//           <input
//             type="text"
//             name="productname"
//             id="productname"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="prix" class="formbold-form-label"> Prix </label>
//           <input
//             type="text"
//             name="prix"
//             id="prix"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>

//       <div class="formbold-input-flex">
//         <div>
//           <label for="categorie" class="formbold-form-label"> Categorie </label>
//           <input
//             type="categorie"
//             name="categorie"
//             id="categorie"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="Marque" class="formbold-form-label"> Marque </label>
//           <input
//             type="text"
//             name="Marque"
//             id="Marque"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>
//       <div class="formbold-input-flex">
//         <div>
//           <label for="taille" class="formbold-form-label"> Taille </label>
//           <input
//             type="text"
//             name="taille"
//             id="state"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="couleur" class="formbold-form-label"> Couleur </label>
//           <input
//             type="text"
//             name="couleur"
//             id="country"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>

//       {/* <div class="formbold-input-flex"> */}
//         {/* <div>
//           <label for="marque" class="formbold-form-label"> Marque</label>
//           <input
//             type="text"
//             name="marque"
//             id="marque"
//             class="formbold-form-input"
//           />
//         </div> */}
//         <div className='button'>
        
//         <button class="formbold-btn"> Ajouter</button>
        
//         {/* </div> */}
//       </div>
//     </form>
//   </div>
// </div>

        
//     )
}
export default AjouterP;
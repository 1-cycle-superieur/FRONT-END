import './EditP.css'
// import robe from '../images/robe.jpg'
import robe from '../images/robe.jpg'
import { useState } from 'react';
import ImageUpload from "./ImageUpload";
 function EditP(){
   const [uploadImage, setUploadImage] = useState("");

  const handleImageUpload = (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setUploadImage(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };
 
// function ImageUpload() {
//    const [selectedImage, setSelectedImage] = useState(null);
 
//    const handleImageUpload = (event) => {
//      const file = event.target.files[0];
//      setSelectedImage(URL.createObjectURL(file));
//    };
function Affichier() {
   var select = document.querySelector('.ul');
   if (select.style.display === "none") {
     select.style.display = "block";
   } else {
     select.style.display = "none";
   }
 }
 
   
    return(
        <div className='Edit'>
        <h2>Products / <span>Edit Products</span> </h2>
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
                    
                    <div className='deuxInput'>
                    <div className='inputText'>
                       <label for="quantite" class="formbold-form-label"> size </label>
                       <input type="text" name="quantite"  id="quantite" class="formbold-form" />
                    </div>
                    <div className='inputText'>
                       <label for="quantite" class="formbold-form-label"> Marque </label>
                        <input type="number" name="quantite" id="quantite" class="formbold-form"/>
                    </div>
                    
                    </div>
                    
                
            </div>
            <div className='image'>
               <h3>Image</h3>
               <div className='Editproduct'>
                 {/* <div className='color'>
                    <label className='colorP' for="colorP">color</label>
                    <input type="color" id="colorP" name="head" value="#28BD55"/>
                 </div> */}
                 {/* <ImageUpload /> */}
                 <div className='ProductImage'>
                 {/* <div id="displayimage" style={{ backgroundImage: `url(${uploadImage})` }}></div> */}
                 <img src={robe } className='imageProuduct'></img>
                 <label  for="photoP"></label>

                 <input type="file"  id="photoP" name="photoP" accept="image/*" onChange={handleImageUpload} ></input>
                 </div>
               </div>
               <div className='saveB'>
               <button className='save' type='submit'>Save Product</button>
               </div>
            </div>
            
            </form> 
        </div>
    )
}
export default EditP;
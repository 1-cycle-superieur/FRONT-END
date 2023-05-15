import { Component } from "react";
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Products from './page/Prodcuts'
import Users from './page/Users'
import Ajouterproducts from './page/AjouterProducts';
import EditProduct from './page/EditProduct';
function App (){
    
    return(
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Products />} />
           <Route path="/Users" element={<Users />} />
           <Route path="/AjouterProduct" element={<Ajouterproducts />} />
           <Route path="/EditProduct" element={<EditProduct />} />
           </Routes>
        </BrowserRouter>
    )
  
}
export default App;

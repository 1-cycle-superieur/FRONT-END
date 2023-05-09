import { Component } from "react";
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Products from './page/Prodcuts'
import Users from './page/Users'
function App (){
    
    return(
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Products />} />
           <Route path="/Users" element={<Users />} />
           </Routes>
        </BrowserRouter>
    )
  
}
export default App;

import Sidebar from "../componetns/Sidebar";
import Header from "../componetns/Header";
import AjouterP from "../componetns/AjouterP";
import "./AjouterProd.css"
function Ajouterproducts(){
    return(
        <div className="content">
            
        <Sidebar/>
        
        <div className='center'>
        <Header/>
        <AjouterP/>
        </div>
    
</div>
    )
}
export default Ajouterproducts;
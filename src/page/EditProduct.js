import Sidebar from "../componetns/Sidebar";
import Header from "../componetns/Header";
import EditP from '../componetns/EditP'
function EditProduct(){
    return(
        <div className="content">
            
        <Sidebar/>
        <div className='center'>
        <Header/>
        <EditP />
        </div>
    
</div>
    )
}
export default EditProduct;
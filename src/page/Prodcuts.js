import './Products.css'
import Sidebar from '../componetns/Sidebar';
import Header from '../componetns/Header';
import Content from '../componetns/content'
// import logo from './images/Logo.png'
function Prodcuts(){
    return(
        <div className="content">
            
                <Sidebar/>
                <div className='center'>
                <Header/>
                <Content/>

                </div>
            
        </div>
    )
}
export default Prodcuts;
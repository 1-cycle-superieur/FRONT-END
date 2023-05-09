import User from '../images/user.jpg';
import './Header.css'


function Header(){
    return(
        <div className="header">
            <div className="left">
            <h1>Products</h1>
            {/* <p>Dashbord / Products</p> */}
            </div>
            <div className="right">
            <p>Name Admin</p>
            <div className="pofileImage">
            
            <img src={User}/>
            </div>
           
            </div>
        </div>
    )
}
export default Header;
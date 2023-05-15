import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png'
import './Sidebar.css'
import {FaListUl ,FaHome,FaUsers} from 'react-icons/fa';
import{FcSettings} from 'react-icons/fc'
import{SiGoogleanalytics} from "react-icons/si"

function Sidebar(){
    
   const linkStyle="isactive"
   const menuItem="menuItem"
    return(
        <div className='sidebar'>
            <div className='logo'>
            <img src={logo}></img>
            </div>
            <div className='menu'>
                   
                    <NavLink  className={({isActive})=>(isActive?linkStyle:menuItem)} to="/Dashbord" >
                    <div className='Item'>
                    <i><FaHome /></i>
                       <span>Dashbord</span>
                    </div>
                    </NavLink>
                    <NavLink className={({isActive})=>(isActive?linkStyle:menuItem)} to="/Users" >
                    <div className='Item'>
                    <i><FaUsers /></i>
                       <span>Users</span>
                    </div>
                    </NavLink>
                   
                    <NavLink className={({isActive})=>(isActive?linkStyle:menuItem)} to="/" >
                    <div className='Item'>
                    <i><FaListUl /></i>
                       <span>Products</span>
                    </div>
                    </NavLink>
                    <NavLink className={({isActive})=>(isActive?linkStyle:menuItem)} to="/Orders">
                    <div className='Item'>
                    <i><FaListUl /></i>
                       <span>Orders</span>
                    </div>
                    </NavLink>
                    <NavLink className={({isActive})=>(isActive?linkStyle:menuItem)} to="/Analytics">
                    <div className='Item'>
                       <i><SiGoogleanalytics/></i>
                       <span>Analytics</span>
                    </div>
                    </NavLink>
                    <NavLink className={({isActive})=>(isActive?linkStyle:menuItem)} to="/Setting">
                    <div className='Item'>
                    <i><FcSettings/></i>

                       <span>Setting</span>
                    </div>
                    </NavLink>
                  
                </div>
           
        </div>
//         {   icon:"fa-solid fa-house",
//         name:"Dashboard",
//     },
//     {icon:"fa-solid fa-users",
//     name:'Users',
// },
// {icon:"fa-solid fa-list",
// name:'Products',
// },
// {icon:"fa-solid fa-list",
// name:'Orders',
// },
// {icon:"fa-solid fa-chart-simple",
// name:'Analytics',
// },
// {icon:"fa-solid fa-gear",
// name:'Setting',
// }

    )
}
export default Sidebar;
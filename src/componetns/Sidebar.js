import { NavLink } from 'react-bootstrap';
import logo from '../images/Logo.png'
import './Sidebar.css'
import {FaListUl ,FaHome,FaUsers,SiGoogleanalytics} from 'react-icons/fa';

function Sidebar(){
    
    return(
        <div className='sidebar'>
            <div className='logo'>
            <img src={logo}></img>
            </div>
            <div className='menu'>
                    {/* {SidebarList.map((item,index)=>{
                        return(
                            <NavLink >
                            <div className='menuItem'>
                            
                            <i class={item.icon}></i>
                            <span>{item.name}</span>
                            </div>
                            </NavLink>

                        )
                    })} */}
                    <NavLink  >
                    <div className='menuItem'>
                    <i><FaHome /></i>
                       <span>Dashbord</span>
                    </div>
                    </NavLink>
                    <NavLink  >
                    <div className='menuItem'>
                    <i><FaUsers /></i>
                       <span>Users</span>
                    </div>
                    </NavLink>
                    <NavLink >
                    <div className='menuItem'>
                    <i><FaListUl /></i>
                       <span>Products</span>
                    </div>
                    </NavLink>
                    <NavLink >
                    <div className='menuItem'>
                    <i><FaListUl /></i>
                       <span>Orders</span>
                    </div>
                    </NavLink>
                    <NavLink >
                    <div className='menuItem'>
                       <i class="fa-solid fa-chart-simple"></i>
                       <span>Analytics</span>
                    </div>
                    </NavLink>
                    <NavLink >
                    <div className='menuItem'>
                    <i class="fa-solid fa-gear"></i>

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
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../imgs/Logo.png';
import '../css/loginsignup.css';
import { Link, NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <>
         <div className="line"> 
         <Link to={'/Products'}>
           <img id="header2" src={logo} />
         </Link>
            </div>
          <section className="sec">
          <form>
          <h1>Log In</h1>
                        <label htmlFor="email">
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                        />
                        <label htmlFor="password">
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                        />

                        <button>Sign In</button>
                    <p>
                        Don't have an account ?<br />
                        <span>
                        <Link to={'/Signup'}>
                        <a>Register</a>       
                       </Link>
                        </span>
                    </p>
                    </form>
          </section>
        </>
    )
}

export default Login;
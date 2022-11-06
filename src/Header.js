import logo from './logo.svg';
import React from 'react';
import './Header.css'
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonCircle} from "react-icons/bs";


function Header() {
  return (
    <div className='header'>
        
           
        <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
        />
         
         <div className='header__center'>
                <input type="text" />
                
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <div>
      
             <BsGlobe/>
            </div>
            <div>
      
             < AiOutlineMenu/>
            </div>
            <div>
      
             < BsPersonCircle/>
            </div>
                
            </div>
        
    </div>
    )
}
export default Header
import React,{useState} from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Logo from '../../Image/Logo.png'
import '../../components/Navbar/Navbar.css'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import logowhite from "../../Image/Logo-white.png"
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
  return (
   <div className="top-bar">
     <header>
        <motion.div 
         variants={{
            hidden:{opacity:0,x:-60},
            visible:{opacity:1,x:0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:0.5}}
        className="logo">
            <NavLink to='/'>
             <div className="logo-img">
                <img src={Logo} alt='logo'/>
             </div>
             <h1>Furino</h1>
            </NavLink>
        </motion.div>
        <motion.div 
        variants={{
            hidden:{opacity:0,y:-30},
            visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:1}}
        className={`menu ${isVisible ? 'visible' : ''}`}>
            <div className="logo-mobile">
                <div className="logomobile-img">
                    <img src={logowhite} alt='logo'/>
                </div>
                <div className="close-menu" onClick={toggleVisibility}>
                    <IoCloseOutline />
                </div>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </motion.div>
        <motion.div
         variants={{
            hidden:{opacity:0,x:60},
            visible:{opacity:1,x:0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:0.5}} 
        className="menu-icon">
            <div className="search-icon">
                <GoSearch />
            </div>
           <div className="wishlist">
                <GoHeart />
           </div>
            <div className="cart">
                <LiaShoppingBagSolid />
            </div>
            <div className="hamburger" onClick={toggleVisibility}>
                <AiOutlineMenu />
            </div>
        </motion.div>
    </header>
   </div>
  )
}

export default Navbar
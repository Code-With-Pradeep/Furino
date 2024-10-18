import React from 'react'
import fimg from '../../Image/Logo.png'
import { NavLink } from 'react-router-dom'
import '../Footer/Footer.css'
import CopyRights from '../Copyrights/CopyRights'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-section">
                <div className="footer-logo">
                    <div className="logo-area">
                    <img src={fimg} alt='logo'/><p>Furino</p>
                    </div>
                    <p>Furino Furniture offers affordable, stylish, and easy-to-assemble furniture perfect for modern living.</p>
                </div>
                <div className="footer-links">
                    <h4 className='footer-title'>Links</h4>
                    <div className="link-tab">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/shop'>Shop</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </div>
                </div>
                <div className="footer-links">
                    <h4 className='footer-title'>Help</h4>
                   <div className="link-tab">
                   <NavLink to='/Payment Options'>Payment Options</NavLink>
                    <NavLink to='/Returns'>Returns</NavLink>
                    <NavLink to='/Privacy Policies'>Privacy Policies</NavLink>
                   </div>
                </div>
                <div className="newsletter-block">
                    <h4 className='footer-title'>Newsletter</h4>
                    {/* <p>Discover Trends with Furino Furniture's Newsletter!</p> */}
                    <div className="newsletter-box">
                        <input type='text' />
                    </div>
                </div>
            </div>
            <CopyRights />
        </div>
    </footer>
  )
}

export default Footer
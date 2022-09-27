import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './HomeMain.css';
import {Link} from "react-router-dom"
import { useState } from 'react';

const HomeMain = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  const [loading,setLoading] =useState(false)

  const hand=() =>{
    setLoading(true)
    setToggleMenu(false)
  }
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to={"/"} >
          <img src="https://ciudadenredsas.info/mademarmol/wp-content/uploads/sites/42/2019/05/logo-final-1.png" alt="app__logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans dropdown "> Galeria 
        <div className="dropdown-content">
         <p> <Link to="/Galary" className='ho' >Galeria de mademarmol</Link></p>
         <p><Link to="/Sinterizadas" className='ho' >Piedras sinterizadas </Link></p>
          <p><Link to="/Granitos" className='ho' >Granitos exoticos</Link></p>
          <p><Link to="/Quarztone" className='ho' >Quartone</Link></p>
          
        </div>
    
    </li>
        <li className="p__opensans"><a href="https://ecommerce-sable-one.vercel.app" target="_blank" >Ecommerce</a></li>
      </ul>
      <div className="app__navbar-login">
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link onClick={() => setToggleMenu(false)}  to="/">Home</Link></li>
              <li><a onClick={() => setToggleMenu(false)} href="https://ecommerce-sable-one.vercel.app" target="_blank" >Ecommerce</a></li>
              <li><Link to="#" onClick={hand}>Galeria</Link></li>
            </ul>
          </div>
        )}
        {loading && (
                  <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                    <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                    <ul className="app__navbar-smallscreen_links">
                      <li><Link onClick={() => setLoading(false)}  to="/Galary">Galeria de mademarmol</Link></li>
                      <li><Link onClick={() => setLoading(false)}  to="/Sinterizadas">Piedras sinterizadas</Link></li>
                      <li><Link onClick={() => setLoading(false)}  to="/Granitos">Granitos exoticos</Link></li>
                      <li><Link onClick={() => setLoading(false)}  to="/Quarztone">Quartone</Link></li>
                    </ul>
                  </div>
                )}
        </div>
    </nav>
  );
};

export default HomeMain;

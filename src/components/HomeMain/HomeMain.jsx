import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './HomeMain.css';
import {Link} from "react-router-dom"

const HomeMain = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to={"/"} >
          <img src="https://ciudadenredsas.info/mademarmol/wp-content/uploads/sites/42/2019/05/logo-final-1.png" alt="app__logo" />

        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/contact">Coctatanos</Link></li>
        <li className="p__opensans"><Link to="/Galary">Galeria</Link></li>
        <li className="p__opensans"><a href="https://marmol-1gvul0der-rolandoto.vercel.app" target="_blank" >Ecommerce</a></li>
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
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobre la empresa</a></li>
              <li><a onClick={() => setToggleMenu(false)} href="https://marmol-1gvul0der-rolandoto.vercel.app" target="_blank" >Ecommerce</a></li>
              <li><Link  onClick={() => setToggleMenu(false)} to="/Galary">Galeria</Link></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contactanos</a></li>
            </ul>
          </div>
        )}

      
      </div>
    </nav>
  );
};

export default HomeMain;

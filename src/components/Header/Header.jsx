import React from 'react';
import images from '../../constants/images';
import SubHeading from '../SubHeading/SubHeading';
import './Header.css';

const Header = () => (
  <div className="app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="app__header-h1">Bienvenido a mademarmol</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>MADEMARMOL dedicada a la producción de muebles para
            el hogar como closet, cocinas integrales, muebles para baño,
            escritorios y puertas
      </p>
      <button type="button" className="custom__button">Explorar mas</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.home} alt="header_img" />
    </div>
  </div>
);

export default Header;
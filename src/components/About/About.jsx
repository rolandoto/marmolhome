import React from 'react';
import { images } from '../../constants';
import './About.css';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Realizar diseños 3D y renders de los muebles (cocinas, muebles de baño,
closet, etc.) de COCINAS INTEGRALES MADEMARMOL, teniendo en cuenta
las exigencias y especificaciones de los diferentes clientes, done puedan
ser observados los detalles y especificaciones del diseño, que permitan la
toma de decisions por parte del cliente antes de la compra.</p>
        <button type="button" className="custom__button">Conocer mas</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.about} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Objectivos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Generar una comunicación con el cliente, a través de diseños 3D para
dechlir detalles del mueble y motivar la decisión de compra</p>
        <button type="button" className="custom__button">Conocer mas</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
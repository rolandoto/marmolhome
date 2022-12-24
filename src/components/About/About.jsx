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
        <h1 className="headtext__cormorant">Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Realizar diseños 3D cocinas, muebles de baño,
closet, etc.) teniendo en cuenta
las exigencias y especificaciones de los diferentes clientes, donde puedan
ser observados los detalles y especificaciones del diseño, que permitan la
toma de decisions por parte del cliente antes de la compra.</p>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.about} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Objetivos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Generar una comunicación con el cliente, a través de diseños 3D para
definir detalles del mueble y motivar la decisión de compra, apoyar al vendedor en su proceso comercial,
entregandole Productos  de gran calidad,donde se vean proporciones,ubicaciones y materiales de los proyectos planteados y tener una herramienta potencializadora de venta</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
import React from 'react';
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';

import './Author.css';

const Author = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.mader} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant">Porque creer en nosotros</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Nuestra
amplia
experiencia
nos
permite
presentarles soluciones y alternativas a cada una de las
necesidades del cliente, asesorando y contribuyendo al
mejoramiento de los hogares, brindando un excelente
servicio con honestidad, lealtad, compromiso
y
responsabilidad en todo momento.</p>
        </div>
       
      </div>

      <div className="app__chef-sign">
        <p>Sara Roman</p>
        <p className="p__opensans">Fundadora</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Author;

import React from 'react';
import { data, images } from '../../constants';
import MenuItem from '../MenuItem/MenuItem';
import SubHeading from '../SubHeading/SubHeading';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="" />
      <h1 className="headtext__cormorant">Product Especial</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Tipos de Madera</p>

       
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
        <div className="app__specialMenu-menu_img">
        <img src={"https://github.com/rolandoto/galeria/blob/main/E2A52689-C639-45AC-ADDC-3295D5AABF41.JPEG?raw=true"} alt="menu__img" />
      </div>
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Tipos de mesones</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
        <div className="app__specialMenu-menu_img">
        <img src={"https://github.com/rolandoto/galeria/blob/main/WhatsApp%20Image%202022-10-22%20at%208.45.21%20AM.jpeg?raw=true"} alt="menu__img" />
      </div>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
    </div>
  </div>
);

export default SpecialMenu;

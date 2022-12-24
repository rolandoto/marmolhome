import React from "react";
import "./Style.css"

const Social =() =>{

    return (
        <div className="container-bar">
            <input type="checkbox" id="btn-social" />
            <label for="btn-social" className="fa fa-play"></label>
                <div className="icon-social">
                    <a  className="fab fa-whatsapp"  href="https://api.whatsapp.com/send/?phone=573015525536&text=Bienvenido%20a%20mademarmol" target="_blank" >
                        <span id="title">whatsapp</span>
                    </a>
                    <a  className="fa fa-instagram"  href="https://www.instagram.com/mademarmol_9/" target="_blank" >
                        <span id="title">Instagram</span>
                    </a>
                    <a  className="fa fa-facebook" href="https://www.facebook.com/mademarmolcocinas/" target="_blank"   >
                        <span id="title">Facebook</span>
                    </a>
                    <a   className="fab fa-tiktok"  href="https://www.tiktok.com/@mademarmolantioquia" target="_blank" >
                        <span id="title">TikTok</span>
                    </a>
                </div>
	</div>
    )

}

export default Social 
import React from "react";
import "./Style.css"

const Social =() =>{

    return (
        <div className="container-bar">
            <input type="checkbox" id="btn-social" />
            <label for="btn-social" className="fa fa-play"></label>
                <div className="icon-social">
                    <a  className="fa fa-facebook" href="https://www.facebook.com/mademarmolcocinas/" target="_blank"   >
                        <span id="title">Facebook</span>
                    </a>
                    <a  className="fa fa-twitter"  href="https://twitter.com/mademarmol01" target="_blank"  >
                        <span id="title">Twitter</span>
                    </a>
                    
                    <a  className="fa fa-instagram"  href="https://www.instagram.com/mademarmol_9/" target="_blank" >
                        <span id="title">Instagram</span>
                    </a>
                    <a   className="fab fa-tiktok"  href="https://www.tiktok.com/@mademarmol_9" target="_blank" >
                        <span id="title">TikTok</span>
                    </a>
                </div>
	</div>
    )

}

export default Social 
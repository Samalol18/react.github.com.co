import React from "react";
import Logo from "./logo.png";
import "./Footer.css"

export default function index(){
    return(
        <div class="footerPrincipal-container">
            <img class="footerPrincipal-img" src={Logo} alt="" />
            <p class="footerPrincipal-p">&copy Copyright eCommerce Remington - 2024</p>
            <a class="footerPrincipal-text" href="#">Términos del servicio</a>
            <a class="footerPrincipal-text" href="#">Política de privacidad</a>
            <a class="footerPrincipal-text" href="https://maps.app.goo.gl/rBUfscbHRms64HSn8">Ubicacion</a>
        </div>
    );
}
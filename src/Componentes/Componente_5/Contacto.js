import React from "react";
import "./Contacto.css";
import Telef from "./Telefono.svg";
import Email from "./Email.svg";
import Insta from "./Instagramsvg.svg";
import Whats from "./Whatsapp.svg";

export default function index(){
    return(
        <div>
            <h2 class="contenidoPrincipal-subtitulo" id="Contacto">Contactanos</h2>
            <nav class="contacto">
                <p><img src={Telef} alt="" />018000410203</p>
                <p><a href="mailto:david.samaniego.8520@miremington.edu.co"><img src={Email} alt="" />david.samaniego.8520@miremington.edu.co</a></p>
                <p><a href="https://wa.me/573208701818"><img src={Whats} alt="" />3208701818</a></p>
                <p><a href="https://www.instagram.com/uniremingtonoficial/"><img src={Insta} alt="" />uniremingtonoficial</a></p>
            </nav>
        </div>
    );
}
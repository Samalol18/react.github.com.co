import React from "react";
import Proyecto from "./Proyecto_nuevo.png";
import "./Portada.css"

export default function index(){
    return(
        <nav class="contenidoPrincipal">
        <div>
            <img class="Portada" src={Proyecto} alt="Proyecto" />
        </div>
            <h2 class="contenidoPrincipal-subtitulo" id="Productos">Nuestros productos</h2>
        </nav>
    );
}
import React from "react";
import "./Total.css";

export default function index(){
    return(
        <div>
                    <h2 class="contenidoPrincipal-subtitulo" id="Carrito">Carrito</h2>
                    <div class="carritoContainer">
                    </div>
                    <h2 class="total">Total: <strong class="precioTotal"></strong></h2> 
        </div>
    );
}

import React from "react";
import logo from "./logo.png";
import carrito from "./carrito.svg"
import "./Cabeza.css"

export default function index(){
    return(
        <div class="container">
            <h1 class="headerPrincipal-titulo" >
                <img src={logo} alt="Logo" />
                <a>Travel Goods</a>
            </h1>
            <nav class="headerPrincipal-nav">
                <a class="headerPrincipal-nav-menu">INICIO</a>
                <a class="headerPrincipal-nav-menu" href="#Productos">PRODUCTOS</a>
                <a class="headerPrincipal-nav-menu" href="#Contacto">CONTACTO</a>
            </nav>
            <a href="#Carrito"><img src={carrito} alt="Carrito" /></a>
        </div>
    );
}
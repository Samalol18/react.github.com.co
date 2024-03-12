import React from "react";
import Neck from "./Neck Wallet.png";
import Impermeable from "./Funda Impermeable.png";
import Cargador from "./Cargador Portatil.png";
import Mochila from "./Mochila De Viaje.png";
import Maleta from "./Maletas De Viaje.png";
import Kit from "./Kit De Higiene Oral.png";
import Libro from "./Libro Electronico.png";
import Toalla from "./Toalla de Manos.png";
import USB from "./Multi USB.png";
import Protector from "./Protector solar.png";
import Chanclas from "./Chanclas.png";
import Acampar from "./Tienda de acampar.png";
import Audifonos from "./Audifonos.png";
import Botiquin from "./Botiquin.png";
import "./Produc.css"

export default function index(){
    return(
        <nav class="containersPrincipal">
        <div class="containers">
            <div class="card">
                <figure>
                    <img src={Neck} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Neck Wallet</h3>
                    <p>50000</p>
                    <button class="boton" data-id="1">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Impermeable} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Funda Impermeable</h3>
                    <p>20000</p>
                    <button class="boton" data-id="2">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Cargador} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Cargador Portatil</h3>
                    <p>60000</p>
                    <button class="boton" data-id="3">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Mochila} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Mochila De Viaje</h3>
                    <p>120000</p>
                    <button class="boton" data-id="4">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Maleta} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Maletas De Viaje</h3>
                    <p>250000</p>
                    <button class="boton" data-id="5">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Kit} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Kit De Higiene Oral</h3>
                    <p>15000</p>
                    <button class="boton" data-id="6">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Libro} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Libro Electronico</h3>
                    <p>300000</p>
                    <button class="boton" data-id="7">Comprar</button>
                </div>
            </div>
        </div>
        <div class="containers">
            <div class="card">
                <figure>
                    <img src={Toalla} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Toalla de Manos</h3>
                    <p>25000</p>
                    <button class="boton" data-id="8">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={USB} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Multi USB</h3>
                    <p>45000</p>
                    <button class="boton" data-id="9">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Protector} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Protector Solar</h3>
                    <p>20000</p>
                    <button class="boton" data-id="10">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Chanclas} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Chanclas</h3>
                    <p>30000</p>
                    <button class="boton" data-id="11">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Acampar} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Tienda De Acampar</h3>
                    <p>90000</p>
                    <button class="boton" data-id="12">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Audifonos} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Audifonos</h3>
                    <p>350000</p>
                    <button class="boton" data-id="13">Comprar</button>
                </div>
            </div>
            <div class="card">
                <figure>
                    <img src={Botiquin} alt="" />
                </figure>
                <div class="contenido">
                    <h3>Botiquin</h3>
                    <p>5000</p>
                    <button class="boton" data-id="14">Comprar</button>
                </div>
            </div>
        </div>
    </nav>
    );
}
import React from "react";

//SASS
import '../../styles/_section_one.scss'

//IMAGES
import logo from '../../assets/LOGO-ASHIRA-2020.png'
import _imagen_servicio from '../../assets/IMG_7047.jpg'

const Section_one = () => {

    return(
        <header className="section section_one">
            <nav className="navbar">
                <figure className="imagen_logo"><img src={logo} alt="logo" /></figure>
                <ul className="ulist">
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    
                </ul>

                
            </nav>

            
            <section className="imagen_portada_container">
                <figure className="imagen_servicio"><img className="imagen_desktop" src={_imagen_servicio} alt="imagen_servicio" />
                    <div className="bienvenido">
                        <h1>BIENVENIDO</h1>
                        <h2>ASHIRA reiki</h2>
                        <button className="reserva"><a href="">RESERVA</a></button>
                    </div>
                    
                </figure>
                

            </section>
        </header>
    )
}

export {Section_one}
 
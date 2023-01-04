import React from "react";

//SASS
import '../../styles/_section_one.scss'

//IMAGES
import logo from '../../assets/LOGO-ASHIRA-2020.png'
import _imagen_servicio from '../../assets/IMG_6885.jpg'

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

                <div><button><a href="">RESERVA</a></button></div>
            </nav>

            

            <figure className="imagen_servicio"><img src={_imagen_servicio} alt="imagen_servicio" /></figure>
        </header>
    )
}

export {Section_one}
 
import React from "react";

//SASS
import '../../styles/_section_one.scss'

const Section_one = () => {

    return(
        <header className="section section_one">
            <nav className="navbar">
                <figure className="imagen_logo"><img src="" alt="logo" /></figure>
                <ul className="ulist">
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    <li><a href="">section 1</a></li>
                    
                </ul>

                <div><button>reserva</button></div>
            </nav>

            <figure className="imagen_servicio"><img src="" alt="imagen_servicio" /></figure>
        </header>
    )
}

export {Section_one}
 
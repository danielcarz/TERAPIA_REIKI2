import React from "react";

//SASS
import '../../styles/_section_three.scss'

//IMAGEN
/* import masaje_relajante from '../../assets/Reflexología.jpg';
import embarazo from '../../assets/Reiki-en-el-embarazo.jpg';
import cuencos from '../../assets/terapia-de-sonido-con-cuencos.jpg'
import masoterapia from '../../assets/Masoterapia-china.jpg'
import relajante from '../../assets/Masaje-relajante.jpg'
import reiki from '../../assets/Reiki.jpg' */

const Section_three = () => {

    return(

        <section className="section_three">
            <h2>TERAPIAS Y SESIONES</h2>
            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>REFLEXIOLOGIA</h3>
                </section>
                <figure class="card_imagen">
                    <img src={masaje_relajante} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

           
        </section>
    )
}

export {Section_three}
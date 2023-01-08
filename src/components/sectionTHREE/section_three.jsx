import React from "react";

//SASS
import '../../styles/_section_three.scss'

//IMAGEN
import reflexiologia from '../../assets/Reflexología.jpg'
import masaje_relajante from '../../assets/Reflexología.jpg';
import embarazo from '../../assets/Reiki-en-el-embarazo.jpg';
import cuencos from '../../assets/terapia-de-sonido-con-cuencos.jpg'
import masoterapia from '../../assets/Masoterapia-china.jpg'
import relajante from '../../assets/Masaje-relajante.jpg'
import reiki from '../../assets/Reiki.jpg'

const Section_three = () => {

    return(

        <section className="section_three">
            <h2>TERAPIAS Y SESIONES</h2>
            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>REFLEXIOLOGIA</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>

                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={reflexiologia} alt="IMAGEN SERVICIOS"/>
                </figure>

            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3> LIMPIEZA ENERGÉTICA DE ESPACIOS</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>

                    </div>
                </section>
                <figure class="card_imagen">
                    <img src="" alt="IMAGEN espacios"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3> ENCUENTROS PARA SANAR EL ALMA</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src="" alt="IMAGEN encuentros"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3> MASAJE RELAJANTE</h3>
                    <div className="info_price" >
                    <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={relajante} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>TERAPIA DE SONIDO CON CUENCOS TIBETANOS</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={cuencos} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>REIKI EN EL EMBARAZO</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={embarazo} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>MASOTERAPIA CHINA</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={masoterapia} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

            <section class="card_container">
                <section class="card_info_wrapper">
                    <h3>TERAPIA REIKI</h3>
                    <div className="info_price" >
                        <p>$100.000.00 COP</p>
                    </div>
                </section>
                <figure class="card_imagen">
                    <img src={reiki} alt="IMAGEN SERVICIOS"/>
                </figure>
            </section>

           
        </section>
    )
}

export {Section_three}
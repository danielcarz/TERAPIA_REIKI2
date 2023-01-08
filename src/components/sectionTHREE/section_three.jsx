import React from "react";

//SASS
import '../../styles/_section_three.scss'

//IMAGEN
import masaje_relajante from '../../assets/Reflexología.jpg';
import embarazo from '../../assets/Reiki-en-el-embarazo.jpg';
import cuencos from '../../assets/terapia-de-sonido-con-cuencos.jpg'
import masoterapia from '../../assets/Masoterapia-china.jpg'
import relajante from '../../assets/Masaje-relajante.jpg'
import reiki from '../../assets/Reiki.jpg'

const Section_three = () => {

    return(

        <section className="section_three">
            
            <section className="servicios_wrapper">
                <h2>REFLEXIOLOGIA</h2>
                <figure className="imagen_servicios"><img src={masaje_relajante} alt="servicios" />
                    <section className="servicios_introduccion">
                        
                        <p className="introduccion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
                     </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> LIMPIEZA ENERGÉTICA DE ESPACIOS</h2>

                <figure className="imagen_servicios"><img src="" alt="imagen limpieza" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> ENCUENTROS PARA SANAR EL ALMA</h2>

                <figure className="imagen_servicios"><img src="" alt="imagen encuentros" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> MASAJE RELAJANTE</h2>
                <figure className="imagen_servicios"><img src={relajante} alt="servicios" />
                    <section className="servicios_introduccion">
                        
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> TERAPIA DE SONIDO CON CUENCOS TIBETANOS</h2>

                <figure className="imagen_servicios"><img src={cuencos} alt="servicios" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> REIKI EN EL EMBARAZO</h2>

                <figure className="imagen_servicios"><img src={embarazo} alt="servicios" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
                <h2> MASOTERAPIA CHINA</h2>

                <figure className="imagen_servicios"><img src={masoterapia} alt="servicios" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

            <section className="servicios_wrapper">
            <h2> TERAPIA REIKI</h2>

                <figure className="imagen_servicios"><img src={reiki} alt="servicios" />
                    <section className="servicios_introduccion">
{/*                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos alias fugit sint atque aperiam commodi quidem explicabo. Voluptates, labore.</p>
 */}                    </section>

                </figure>
                
            </section>

           
        </section>
    )
}

export {Section_three}
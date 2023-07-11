import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div id='contact' className='contacto section-padding'>
        <div className="contacto-title">
                <h1>Contactame</h1>
            </div>
            <div className="contacto-content">
                <form className="contacto-form">
                    <div className="form-inputs">
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Correo Electrónico"/>
                        <input type="text" placeholder="Número"/>
                    </div>
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje
                    "></textarea>
                </form>
                <div className="contacto-form_button">
                    <a href="#"><b>Enviar mensaje</b></a>
                </div>
            </div>
    </div>
  )
}

export default Contacto
import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div id='contact' className='contacto section-padding'>
        <div className="contacto-title">
                <h1>Contactame</h1>
            </div>
            <div className="contacto-content">
                <form className="contacto-form" id="contacto-form">
                    <div className="form-inputs">
                        <input type="text" name="nombre" placeholder="Nombre"/>
                        <input type="text" name="correo" placeholder="Correo Electrónico"/>
                        <input type="text" name="numero" placeholder="Número"/>
                    </div>
                    <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                </form>
                <button className="button-general" type="submit" form="contacto-form" value="value">
                    Enviar mensaje
                </button>
            </div>
    </div>
  )
}

export default Contacto
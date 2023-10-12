import React, { useRef } from 'react';
import './Contacto.css'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function Contacto() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault(); // Esto prevee que la pagina no se recarge cuando se envia el email
        emailjs.sendForm('service_05f1fof', 'template_fdz04tm', form.current, 'D9Nn0LUdEKVx-1KRb')
        .then((result) => {
            Swal.fire({  
                title: 'Correcto',  
                text: 'Se envió un mensaje',
                icon: 'success',
                confirmButtonColor: '#01497C',
              }); 
            }, (error) => {
            Swal.fire({
                title: 'Error',
                text: 'Hubo algún error porfavor intentelo más tarde',
                icon: 'error',
                confirmButtonColor: '#01497C'
            })
            }
        );
    };
  return (
    <div id='contact' className='contacto section-padding'>
        <div className="contacto-title">
                <h1>Contactame</h1>
            </div>
            <div className="contacto-content">
                <form className="contacto-form" id="contacto-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-inputs">
                        <input type="text" name="from_name" placeholder="Nombre" required/>
                        <input type="email" name="from_email" placeholder="Correo Electrónico" required/>
                        <input type="number" name="from_number" placeholder="Número" required/>
                    </div>
                    <textarea name="message" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                </form>
                <button className="button-general" type="submit" form="contacto-form" value="value">
                    Enviar mensaje
                </button>
            </div>
    </div>
  )
}

export default Contacto
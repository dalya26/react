import '../estyle/cssPgp.css';
//import './/estyle/logoML.png';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function HomeP(){
    const endpoint = 'http://127.0.0.1:8000/api';

    let navigate = useNavigate();
    function navigateTo(string) {
        navigate(string);
    }

    const login = (row) => {
        navigateTo('/login');
    }

    useEffect(() => {
        mostrarAlerta();
    }, []);
    const mostrarAlerta = () => {

        Swal.fire(
            {
                
                icon: 'info',
                title: 'Aviso de Privacidad',
                html: '<p><b>Roll Call</b> de S.A. de CV mejor conocido como Roll Call, con domicilio en Carretera Federal México-Pachuca km 37.5, Predio Sierra Hermosa, Tecámac Edo. Méx. y portal de internet http://127.0.0.1:8000/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br><br><b>¿Para qué fines utilizaremos sus datos personales?</b><br><br> Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:  Respuesta a mensajes del formulario de contacto, registro de profesores, registros de materias, registro de alumnos y gestión de asistencias de alumnos. <br><br><b>¿Dónde puedo consultar el aviso de privacidad integral?</b><br><br>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico: <br><br><b>juanjolotex17@gmail.com </b></p>',
                footer: 'Última actualización de este aviso de privacidad: 04/03/2023 '
            });
    }

return(


<div class='bodyHP'>
    <header>
        <h2 class="logo">My List</h2>
        <nav class="navigation">
            <button class="btnLogin-popup" onClick={() => login()}>Login</button>
        </nav>
    </header>

    <div class="wrapper">
        <div >
            <div class="logoM"><img class="imagen" src="https://ayuda.mascaradelatex.com/hc/article_attachments/1500004826121/reloj.gif"></img></div>
            <div class="textouno">
                <span class="titulo"><h1>Bienvenido.</h1></span>
                <div class="descrip">
                    <span>La puntualidad es el respeto hacia el tiempo de los demás.</span>
                </div>
            </div>
        </div>
    </div>

    <div class="foter">
        <footer>
            <p> &copy; My List 2023 - Algunos derechos reservados.</p>
        </footer>
    </div>
</div>
)
}

export default HomeP
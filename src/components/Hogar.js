
import React,{useEffect, useState,useRef } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import LoginComponent from './LoginComponent';
import { tab } from '@testing-library/user-event/dist/tab';
import Swal from 'sweetalert2';

//import inicio from 'src//assets/inicio.png';
const imagen = require.context('../assets/img', true);

const Hogar = () => {

  const endpoint = 'http://127.0.0.1:8000/api';
  const toast = useRef(null);
  let navigate  = useNavigate();

  const [datosLogin,setDatosLogin] = useState({
    email: '',
    password: '',
  });

   //Aviso de Privacidad
    useEffect(()=>{
        mostrarAlerta();
      }, []);
      const mostrarAlerta=()=>{

        Swal.fire(
          {
            icon: 'info',
            title:'Aviso de Privacidad',
            html:'<p><b>Roll Call</b> de S.A. de CV mejor conocido como Roll Call, con domicilio en Carretera Federal México-Pachuca km 37.5, Predio Sierra Hermosa, Tecámac Edo. Méx. y portal de internet http://127.0.0.1:8000/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br><br><b>¿Para qué fines utilizaremos sus datos personales?</b><br><br> Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:  Respuesta a mensajes del formulario de contacto, registro de profesores, registros de materias, registro de alumnos y gestión de asistencias de alumnos. <br><br><b>¿Dónde puedo consultar el aviso de privacidad integral?</b><br><br>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico: <br><br><b>juanjolotex17@gmail.com </b></p>', 
            footer:'Última actualización de este aviso de privacidad: 04/03/2023 '
          });
      }
      
  const inputChange = (event) => {
    
    setDatosLogin({
      ...datosLogin,
      [event.target.name] : event.target.value
    })
  }

  function navigateTo(string)
  {
      navigate(string);
  }
  
  const show = () => {
    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Datos no válidos!!' });
  };

  const fn_login = async (event)=> {
    event.preventDefault();

    await axios.post(`${endpoint}/login`, datosLogin)
    .then((response) => {
      
      console.log("Validando Acceso..")
      console.log(response.data)

      if(response.data.acceso === "Ok")
      {
        console.log("Ok....")

        localStorage.setItem('token',"Ok")
        navigateTo('/alumnos')
      }
      else
      {
        show();
      }

    }).catch((error) => {
      
    })

  }

  return (

<Card role="region" className="md:w-25rem">   
  <center> 
    <div class="contenedorUno">
      <Image src={imagen(`./inicio8.png`)} alt="Image" height="350" width="650"/>
      <br></br>
      <h1>Bienvenido Sea Usted !!</h1>
      <br></br>  
      
      <div className="card flex justify-content-center">
         
          <Link to={`/admin`}><Button label="Administrador" severity="warning" text /></Link>
          <Link to={`/docente`}><Button label="Docente " severity="help" text navigateTo={'/docente'}/></Link>
          <Link to={`/alumnado`}><Button label="Alumno" severity="danger" text navigateTo={'/alumnado'}/></Link>
      </div>
    </div>
  </center> 
</Card>
      
  )
}

export default Hogar
import './estyle/cssLC.css';
import React,{useState,useRef } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

const LoginComponent = () => {

  const endpoint = 'http://127.0.0.1:8000/api';
  const toast = useRef(null);
  let navigate  = useNavigate();

  const [datosLogin,setDatosLogin] = useState({
    email: '',
    password: '',
  });

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
        navigateTo('/pgpA')
      }
      else
      {
        show();
      }

    }).catch((error) => {
      
    })

  }

  return (

  <body>
  <div class='cuerpo'> 
    <div class="content">
          <Avatar className="logouser" icon="pi pi-user" shape="circle" size="xlarge" style={{ backgroundColor: 'slateblue', color: '#ffffff' }} />
      <br></br>
      <h1 class='titulo'>Inicar sesión</h1>
      <br></br>  
        <span className="p-float-label">
          <InputText className="p-float-label" name="email" value={datosLogin.email} onChange={(e) => inputChange(e)} />
          <label>Correo</label>
      </span>
      <br></br>
        <span className="p-float-label">
          <InputText type='password' name="password" 
          value={datosLogin.password} 
          feedback={false}
              onChange={(e) => inputChange(e)} />
              <label>Contraseña</label>
      </span>
      <br></br>
      <div>
          <label class="cilb">Solo cuentas institucionales.</label><br></br>
          <button class='btn-acces' onClick={fn_login} >Iniciar</button>
      </div>
    </div>
  </div>
  </body> 
  )
}

export default LoginComponent
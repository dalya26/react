import React,{useState,useRef } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';

//import inicio from 'src//assets/inicio.png';
const imagen = require.context('../assets/img', true);

const LoginComponentS = () => {

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
        navigateTo('/pgpS')
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
    <Image src={imagen(`./inicio3.png`)} alt="Image" width="250"/>
      <h1>Bienvenido Estudiante</h1>
      <br></br>
      <div className="card flex justify-content-center">
          <InputText name="email" value={datosLogin.email} onChange={(e) => inputChange(e)} />
      </div>
      <br></br>
      <div className="card flex justify-content-center">
          <Password name="password" 
          value={datosLogin.password} 
          feedback={false}
          onChange={(e) => inputChange(e)} />
      </div>
      <br></br>
      <div className="card flex justify-content-center">
          <InputText name="rol" value={datosLogin.rol = '3'} onChange={(e) => inputChange(e)} disabled />
      </div>
      <br></br>
      <div className="card flex justify-content-center">
          <Button label="Accesar" icon="pi pi-heart" rounded text severity="help" onClick={fn_login} />
      </div>
    </div>
  </center> 
</Card>
      
  )
}

export default LoginComponentS
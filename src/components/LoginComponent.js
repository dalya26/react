import './estyle/cssLC.css';
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { Menubar } from 'primereact/menubar';
import {useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';

const LoginComponent = () => {

  const endpoint = 'http://127.0.0.1:8000/api';

  let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;

  const legendTemplate = (
    <div >
      <span className="pi pi-user"></span>
      <span className="font-bold text-lg" style={{marginLeft:'8px'}}>Iniciar Sesión</span>
    </div>
  );

  const date = new Date();

  const [dataTime, setDataTime] = useState({
    horas: date.getHours(),
    minutos: date.getMinutes(),
    segundos: date.getSeconds()
  });


  useEffect(() => {

    const timer = setInterval(() => {

      const date = new Date();
      setDataTime({
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds()
      });
      

    }, 1000);


    return () => clearInterval(timer);

  }, []);



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
    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Datos incorrectos!!' });
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
        navigateTo('/indexp')
      }
      else
      {
        show();
      }

    }).catch((error) => {
      
    })

  }

  return (

    <div>
      <header className="card">
        <Menubar start={start} />
      </header>

      <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft:'250px', marginRight:'250px' }} legend={legendTemplate}>
        <div style={{ marginLeft:'450px'}}>
          <h1 style={{ fontFamily: 'monospace', marginLeft:'450', marginTop:'15px'}}>MY LIST</h1>
          <div >
            <p>
              {dataTime.horas < 10 ? ` 0${dataTime.horas}` : dataTime.horas} h : {dataTime.minutos < 10 ? ` 0${dataTime.minutos}` : dataTime.minutos} min : {dataTime.segundos < 10 ? ` 0${dataTime.segundos}` : dataTime.segundos} seg
            </p>
            <p style={{ justifyContent:'inherit'}}>
              La puntualidad no solo es llegar a tiempo, tambien es irse a tiempo.
            </p>
          </div>
        </div>
          
          <div>
            <span className="p-float-label" style={{ marginTop:'-250px', marginLeft: '35px', fontSize: '25px', fontFamily: 'monospace' }}>
              <InputText name="email" value={datosLogin.email} onChange={(e) => inputChange(e)} />
              <label style={{ fontSize: '19px', fontFamily: 'monospace' }}>Correo</label>
            </span>
          </div>
          <p></p>
          <br></br>

          <div className="card flex justify-content-center" style={{ marginLeft: '35px', fontSize: '25px', fontFamily: 'monospace' }}>
            <span className="p-float-label" style={{ fontSize: '35px', fontFamily: 'monospace' }}>
              <Password name="password" value={datosLogin.password} feedback={false} onChange={(e) => inputChange(e)} />
              <label style={{ fontSize: '19px', fontFamily: 'monospace' }}>Contraseña</label>
            </span>
          </div>
          <br></br>
          <div className="card flex justify-content-center" style={{ marginLeft: '70px', fontSize: '25px', fontFamily: 'monospace' }}>
            <Button label="Iniciar" onClick={fn_login} icon="pi pi-user" className="p-button-rounded p-button-success p-button-text" outlined />
          </div>
      </Fieldset>
    </div>

  )
}

export default LoginComponent
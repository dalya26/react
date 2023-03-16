import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import './estyle/cssSA.css';
import { Tooltip } from 'primereact/tooltip';


const ShowMaterias = () => {
    const [topics, setTopics] = useState([]);
  const endpoint = 'http://127.0.0.1:8000/api';
 
  let navigate = useNavigate();

  function navigateTo(string){
    navigate(string);
  }

  const home = (row) => {
    navigateTo('/pgpA');
  }
  const out = (row) => {
    navigateTo('/');
  }
  const prof = (row) => {
    navigateTo('/t/');
  }
  const alum = (row) => {
    navigateTo('/alumnos');
  }

  const newm = (row) => {
    navigateTo('/topic/ne');
  }

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between">
        <span >MATERIAS.</span>
        <a class="newe" onClick={() => newm()}  style={{width: '10', height: '10'}} >New</a>
    </div>
  );
  
  const footer = `In total there are ${topics ? topics.length : 0} materias registrados.`;

  const bodyTemplate = (rowData) => {
    return <div>
    <Button label='Update' className="p-button-rounded p-button-success p-button-text"  onClick={() => editTopic(rowData)}/>
      <Button label='Delete' className="p-button-rounded p-button-danger p-button-text"  onClick={() => deleteTopic(rowData.id)}/>
    </div>
  }

  const editTopic = (row) =>{
    //navigateTo ('student/create/' + row.id);
    navigateTo ('/topic/ne/' + row.id);
    console.log("Click: " + row.nombre);
  }


  useEffect(() => {
    getAllTopics();
}, []);


const getAllTopics = async () =>{
  
    await axios.get(`${endpoint}/materias`)
    .then(response => {
      console.log(response.data);
      setTopics(response.data)
    }).catch(function (error){
      console.log(error);
    })
  } 

//eliminar

const deleteTopic = async (_id) => {
    await axios.post(`${endpoint}/materia/borrar`,{
        id: _id
    }).then(response => {
      getAllTopics();
    }).catch(function (error){
      console.log(error)
    })
}

//Vista

return (
    <div>
    <header>
        <h2 class="logo">My List</h2>
        <nav class="navigation">
            <a onClick={() => home()}>School</a>
            <a onClick={() => prof()}>Profesores</a>
            <a onClick={() => alum()}>Estudiantes</a>
            <button class="btnLogin-popup" onClick={() => out()}>Salir</button>
        </nav>
    </header>
    <div class="tabla">
        <div className="card">
            <DataTable value={topics} header={header} footer={footer} responsiveLayout="scroll">
                <Column field="nombre" header="Nombre"></Column>
                <Column field="profesor" header="Profesor"></Column>
                <Column field="horario" header="Horario"></Column>
                <Column header="Acciones" body={bodyTemplate}></Column>
            </DataTable>
        </div>
    </div>
    </div>
  )
}
export default ShowMaterias
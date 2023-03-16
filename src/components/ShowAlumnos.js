import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import './estyle/cssSA.css';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';


const ShowAlumnos = () => {
  const [students, setStudents] = useState([]);
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
const mat = (row) => {
  navigateTo('/m');
}
const newe = (row) => {
  navigateTo('/student/ne');
}

const header = (
  <div className="flex flex-wrap align-items-center justify-content-between">
      <span >ESTUDIANTES.</span>
      <a class="newe" onClick={() => newe()}>New </a>
  </div>
);

const footer = `In total there are ${students ? students.length : 0} estudiantes registrados.`;
  

const bodyTemplate = (rowData) => {
  return <div>
  <Button icon="pi pi-file-edit" rounded text severity="success" iconPos="right" onClick={()=> editStudent(rowData)}/>
  <Button icon="pi pi-times" rounded text severity="danger" iconPos="right" onClick={()=> deleteStudent(rowData.id)}/>
  </div>

}

const editStudent = (row) =>{
  navigateTo ('/student/ne/' + row.id);
  console.log("Click: " + row.nombre);
}


  useEffect(() => {
    getAllStudents();
}, []);


const getAllStudents = async () =>{
  
    await axios.get(`${endpoint}/alumnos`)
    .then(response => {
      console.log(response.data);
      setStudents(response.data)
    }).catch(function (error){
      console.log(error);
    })
  }

//eliminar

const deleteStudent = async (_id) => {
    await axios.post(`${endpoint}/alumno/borrar`,{
        id: _id
    }).then(response => {
      getAllStudents();
    }).catch(function (error){
      console.log(error)
    })
}

return (
  <div>
    <header>
        <h2 class="logo">My List</h2>
        <nav class="navigation">
            <a onClick={() => home()}>School</a>
            <a onClick={() => prof()}>Profesores</a>
            <a onClick={() => mat()}>Materias</a>
            <button class="btnLogin-popup" onClick={() => out()}>Salir</button>
        </nav>
    </header>
    <div class="tabla">
      <div className="card">
         <DataTable value={students} header={header} footer={footer} responsiveLayout="scroll">
            <Column field="nombre" header="Nombre" class='nomc'></Column>
            <Column field="apetpat" header="Apellido Paterno" class='appc'></Column>
            <Column field="apetmat" header="Apellido materno" class='apmc'></Column>
            <Column field="matricula" header="Matrícula" class='mac'></Column>
            <Column field="edad" header="Edad" class='edc'></Column>
            <Column field="sexo" header="Sexo" class='sec'></Column>
            <Column field="nombre_materia" header="Materia" class='matc'></Column>              
            <Column header="Acciones" body={bodyTemplate} class='accc'></Column>
            </DataTable>
        </div>
    </div>
    </div>
  )
}

export default ShowAlumnos
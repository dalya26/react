import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import './estyle/cssSA.css';
import { Menubar } from 'primereact/menubar';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';
 

const ShowProfesores = () =>{
    const [teachers, setTeachers] = useState([]);
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
  const alum = (row) => {
    navigateTo('/alumnos');
  }
  const mat = (row) => {
    navigateTo('/m');
  }

  const newp = (row) => {
    navigateTo('/teacher/ne');
  }

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between">
        <span >PROFESORES.</span>
        <a class="newe" onClick={() => newp()}>New</a>
    </div>
  );
  
  const footer = `In total there are ${teachers ? teachers.length : 0} profesores registrados.`;
    

const bodyTemplate = (rowData) => {
    return <div>
    <Button icon="pi pi-file-edit" rounded text severity="success" iconPos="right" onClick={()=> editTeacher(rowData)}/>
    <Button icon="pi pi-times" rounded text severity="danger" iconPos="right" onClick={()=> deleteTeacher(rowData.id)}/>
    </div>
  
  }

const editTeacher = (row) =>{
    navigateTo ('/teacher/ne/' + row.id);
    console.log("Click: " + row.nombre);
  }

  
  useEffect(() => {
    getAllTeachers();
  }, []);

//duda, ¿Cómo le hago aquí?
  
//La duda continua

const getAllTeachers = async () =>{
  
    await axios.get(`${endpoint}/profesores`)
    .then(response => {
      console.log(response.data);
      setTeachers(response.data)
    }).catch(function (error){
      console.log(error);
    })
  }

//eliminar

const deleteTeacher = async (_id) => {
    await axios.post(`${endpoint}/profesor/borrar`,{
        id: _id
    }).then(response => {
      getAllTeachers();
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
            <a onClick={() => alum()}>Estudiantes</a>
            <a onClick={() => mat()}>Materias</a>
            <button class="btnLogin-popup" onClick={() => out()}>Salir</button>
        </nav>
    </header>
    <div class="tabla">
        <div className="card">
            <DataTable value={teachers} header={header} footer={footer} responsiveLayout="scroll">
                <Column field="nombre" header="Nombre"></Column>
                <Column field="apetpat" header="Apellido paterno"></Column>
                <Column field="apetmat" header="Apellido materno"></Column>
                <Column field="matricula" header="Matrícula"></Column>
                <Column field="edad" header="Edad"></Column>
                <Column field="sexo" header="Sexo"></Column>
                <Column field="cedula" header="Cedula"></Column>
                <Column field="asignatura" header="Division"></Column>
                <Column field="habilidades" header="Habilidades"></Column>
                <Column field="nombre_materia" header="Materia"></Column>
                <Column header="Acciones" body={bodyTemplate}></Column>
            </DataTable>
        </div>
      </div>
    </div>
  )


}
export default ShowProfesores
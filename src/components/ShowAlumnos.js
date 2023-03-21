import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import './estyle/cssSA.css';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Fieldset } from 'primereact/fieldset';


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

const newe = (row) => {
  navigateTo('/student/ne');
}

const footer = `En total hay ${students ? students.length : 0} estudiantes registrados.`;
  

  const bodyTemplate = (rowData) => {
        return <div>
            <Button icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" iconPos="right" onClick={() => editStudent(rowData)} />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" iconPos="right" onClick={() => deleteStudent(rowData.id)} />
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

  let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;

  const legendTemplate = (
    <div >
      <span className="pi pi-user-edit"></span>
      <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Estudiantes</span>
    </div>
  );

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: (event) => {
        navigateTo('/indexp')
      }
    },
    {
      label: 'Grupos',
      icon: 'pi pi-users',
      items: [
        {
          label: 'Ver Grupos',
          icon: 'pi pi-user-plus',
          command: (event) => {
            navigateTo('/grup')
          }
        },
        {
          label: 'Nuevo Grupo',
          icon: 'pi pi-user-plus',
          command: (event) => {
            navigateTo('/grup/ne')
          }
        },
        {
          separator: true
        },
        {
          label: 'Importar',
          icon: 'pi pi-file-import'

          //poner navegacion para exportar grupos en pdf
        },
        {
          label: 'Exportar',
          icon: 'pi pi-file-export',
          items: [
            {
              label: 'CSV',
              icon: 'pi pi-file-excel'
              //poner navegacion para exportar grupos en pdf
            },
            {
              label: 'PDF',
              icon: 'pi pi-file-pdf'
              //poner navegacion para exportar grupos en pdf
            }
          ]
          //poner navegacion para importar grupos en csv
        }
      ]
    },
    {
      label: 'Profesores',
      icon: 'pi pi-briefcase',
      command: (event) => {
        navigateTo('/t/')
      }
    },
    {
      label: 'Materias',
      icon: 'pi pi-user-edit',
      command: (event) => {
        navigateTo('/m')
      }
    },
    {
      label: 'Ajustes',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Perfil',
          icon: 'pi pi-user',
          command: (event) => {
            navigateTo('/prfil')
          }
        }
      ]
    }
  ];

return (
  <div>
    <header className="card">
      <Menubar model={items} start={start} />
    </header>

    <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft: '150px', marginRight: '100px' }} legend={legendTemplate}>
      <div style={{ marginLeft: '980px' }}>
        <Button label='New' className="p-button-rounded p-button-warning p-button-text" onClick={() => newe()} />
      </div>
      <div className="card">
         <DataTable value={students} footer={footer} responsiveLayout="scroll">
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
  </Fieldset>
</div>
  )
}

export default ShowAlumnos
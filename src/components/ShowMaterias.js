import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
//import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { Menubar } from 'primereact/menubar';


const ShowMaterias = () => {
    const [topics, setTopics] = useState([]);
  const endpoint = 'http://127.0.0.1:8000/api';
 
  let navigate = useNavigate();

  function navigateTo(string){
    navigate(string);
  }
  
  const footer = `En total hay ${topics ? topics.length : 0} materias registrados.`;

  const bodyTemplate = (rowData) => {
    return <div>
      <Button icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" iconPos="right" onClick={() => editTopic(rowData)} />
      <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" iconPos="right" onClick={() => deleteTopic(rowData.id)} />
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

  let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
  const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;

  const legendTemplate = (
    <div >
      <span className="pi pi-folder"></span>
      <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Materias</span>
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
      label: 'Estudiantes',
      icon: 'pi pi-user-edit',
      command: (event) => {
        navigateTo('/alumnos')
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

  const out = (row) => {
    navigateTo('/');
  }

  const newm = (row) => {
    navigateTo('/topic/ne');
  }
return (
  <div>
    <header className="card">
      <Menubar start={start} model={items} end={end} />
    </header>
    <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft: '150px', marginRight: '200px' }} legend={legendTemplate}>
      <div style={{ marginLeft: '980px' }}>
        <Button label='New' className="p-button-rounded p-button-warning p-button-text" onClick={() => newm()} />
      </div>
      <div className="card">
            <DataTable value={topics} footer={footer} responsiveLayout="scroll">
                <Column field="nombre" header="Nombre"></Column>
                <Column field="profesor" header="Profesor"></Column>
                <Column field="horario" header="Horario"></Column>
                <Column header="Acciones" body={bodyTemplate}></Column>
            </DataTable>
        </div>
    </Fieldset>
    </div>
  )
}
export default ShowMaterias
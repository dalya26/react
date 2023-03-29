import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { SlideMenu } from 'primereact/slidemenu';

const PlistaView = () => {
  const [students, setStudents] = useState([]);
  const endpoint = 'http://127.0.0.1:8000/api';

  let navigate = useNavigate();

  function navigateTo(string) {
    navigate(string);
  }

  const toast = useRef(null);

    const showS = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }
    const showE = () => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
  }

  const si = async(_id)=>{
    const pase = {
      id_alumno: _id,
      asistio:true
    };
    await axios.post(`${endpoint}/guardarpaselista`, pase)
    .then((response)=>{
      console.log("Guardando...")
      console.log(response.data)
      }).catch((error) => {
    })
  }
  const no = async(_id)=>{
    const pase = {
      id_alumno: _id,
      asistio:false
    };
    await axios.post(`${endpoint}/guardarpaselista`, pase)
    .then((response)=>{
      console.log("Guardando...")
      console.log(response.data)
      }).catch((error) => {
    })
    navigateTo('/plist')
  }

  const out = (row) => {
    navigateTo('/');
  }

  const bodyTemplateCheck = (rowData) => {
    return <div> 
      <Button style={{ fontSize: '25px', fontFamily: 'monospace' }} icon="pi pi-plus-circle" className="p-button-rounded p-button-success p-button-text" iconPos="right" onClick={() => si(rowData.id)} />
      <Button style={{ fontSize: '25px', fontFamily: 'monospace' }} icon="pi pi-minus-circle" className="p-button-rounded p-button-danger p-button-text" iconPos="right" onClick={() => no(rowData.id)}/>
      </div>;
  }

  
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
            navigateTo('/gp')
          }
        },
        {
          label: 'Nuevo Grupo',
          icon: 'pi pi-user-plus',
          command: (event) => {
            navigateTo('/gp/ne')
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
            navigateTo('/perfil')
          }
        }
      ]
    }
  ];

  const itemssecond = [
    {
      label: 'Pase de asistencia',
      icon: 'pi pi-bookmark',
      
    }
  ];

  useEffect(() => {
    
    getAllStudents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const getAllStudents = async () => {

    await axios.get(`${endpoint}/alumnos`)
      .then(response => {
        console.log(response.data);
        setStudents(response.data)
      }).catch(function (error) {
        console.log(error);
      })
  }

  let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
  const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;

    return (
      <div>
        <header className="card">
          <Menubar model={items} start={start} end={end} />
        </header>
        <Splitter style={{ marginTop: '10px', marginRight: '10px', marginLeft: '10px' }}>
          <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
            <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBlockEnd: '20px' }}>
              <SlideMenu model={itemssecond} viewportHeight={220} menuWidth={175}></SlideMenu>
            </div>
          </SplitterPanel>
          <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px', marginBlockEnd: '10px' }}>
              <DataTable value={students} responsiveLayout="scroll">
                <Column field="nombre" header="Nombre"></Column>
                <Column header="Asistencia" body={bodyTemplateCheck}></Column>
              </DataTable>
            </div>
          </SplitterPanel>
        </Splitter>
        <Splitter style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBlockEnd: '20px', borderColor: 'dimgray' }}>
          <SplitterPanel>
            <div style={{ textAlign: 'center' }}>
              <footer >
                <p> &copy; My List 2023 - Algunos derechos reservados.</p>
              </footer>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
  );
  /**return (
    <div>ShowAlumnos</div>
  )*/
}

export default PlistaView
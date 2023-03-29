import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { SlideMenu } from 'primereact/slidemenu';


const Alumnos = () => {
  const [students, setStudents] = useState([]);
const endpoint = 'http://127.0.0.1:8000/api';

const columns = [
  { field: 'nombre', header: 'Nombre' },
{ field: 'apetpat', header: 'Apellido Paterno' },
{ field: 'apetmat', header: 'Apellido Materno' },
{ field: 'matricula', header: 'Matricula' },
{ field: 'edad', header: 'Edad' },
{ field: 'sexo', header: 'Sexo' },
{ field: 'nombre_grupo', header: 'Grupo' }
];

/**const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));
const [visibleStudent, setVisibleStudent] = useState(columns);*/



let navigate = useNavigate();

function navigateTo(string){
  navigate(string);
}

const out = (row) => {
  navigateTo('/');
}



const footer = `En total hay ${students ? students.length : 0} estudiantes registrados.`;
  


  useEffect(() => {
    getAllStudents();
}, []);


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
        navigateTo('/indexm')
      }
    },
    {
      label: 'Lista',
      icon: 'pi pi-user-edit',
      command: (event) => {
        navigateTo('/plist')
      }
    },
    {
      label: 'Grupos',
      icon: 'pi pi-users',
      command: (event) => {
       navigateTo('/gpo')
      }
    },
    {
      label: 'Materias',
      icon: 'pi pi-book',
      command: (event) => {
        navigateTo('/mat')
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
            navigateTo('/perfilM')
          }
        }
      ]
    }
  ];

  const itemssecond = [
    {
      label: 'Alumnos',
      icon: 'pi pi-users',
      
    }
  ];

return (
  <div>
    <header className="card">
      <Menubar model={items} start={start} end={end} />
    </header>

    <Splitter style={{ marginTop:'10px', marginRight:'10px', marginLeft:'10px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
            <div style={{ marginLeft: '20px', marginRight:'20px', marginTop:'20px', marginBlockEnd:'20px' }}>
            <SlideMenu model={itemssecond} viewportHeight={220} menuWidth={175}></SlideMenu>
            </div>
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
            <div className="card" style={{marginLeft:'10px', marginRight:'10px', marginTop:'10px', marginBlockEnd:'10px'}}>
         <DataTable value={students} footer={footer} responsiveLayout="scroll">
            <Column field="nombre" header="Nombre" class='nomc'></Column>
            <Column field="apetpat" header="Apellido Paterno" class='appc'></Column>
            <Column field="apetmat" header="Apellido materno" class='apmc'></Column>
            <Column field="matricula" header="Matrícula" class='mac'></Column>
            <Column field="nombre_grupo" header="Grupo" class='matc'></Column>
            </DataTable>
        </div>
        </SplitterPanel>
        </Splitter>
        <Splitter style={{ marginLeft:'20px', marginRight:'20px', marginTop:'20px', marginBlockEnd:'20px', borderColor:'dimgray' }}>
            <SplitterPanel>
                <div style={{textAlign:'center'}}>
                    <footer >
                        <p> &copy; My List 2023 - Algunos derechos reservados.</p>
                    </footer>
                </div>
            </SplitterPanel>
        </Splitter>
</div>
  )
}

export default Alumnos
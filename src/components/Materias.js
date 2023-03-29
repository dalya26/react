import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { SlideMenu } from 'primereact/slidemenu';


const Materias = () => {
    const [topics, setTopics] = useState([]);
  const endpoint = 'http://127.0.0.1:8000/api';
 
  let navigate = useNavigate();

  function navigateTo(string){
    navigate(string);
  }
  
  const footer = `En total hay ${topics ? topics.length : 0} materias registrados.`;

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


  let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
  const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;


  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: (event) => {
        navigateTo('/indexm')
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
      label: 'Estudiantes',
      icon: 'pi pi-user-edit',
      command: (event) => {
        navigateTo('/alum')
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
      label: 'Materias',
      icon: 'pi pi-book',
      
    }
  ];

  const out = (row) => {
    navigateTo('/');
  }

 
return (
  <div>
    <header className="card">
      <Menubar start={start} model={items} end={end} />
    </header>

    <Splitter style={{ marginTop:'10px', marginRight:'10px', marginLeft:'10px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
            <div style={{ marginLeft: '20px', marginRight:'20px', marginTop:'20px', marginBlockEnd:'20px' }}>
            <SlideMenu model={itemssecond} viewportHeight={220} menuWidth={175}></SlideMenu>
            </div>
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
            <div className="card" style={{marginLeft:'10px', marginRight:'10px', marginTop:'10px', marginBlockEnd:'10px'}}>
              <DataTable value={topics} footer={footer} responsiveLayout="scroll">
                <Column field="nombre" header="Materia"></Column>
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
export default Materias
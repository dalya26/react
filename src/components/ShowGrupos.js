import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { SlideMenu } from 'primereact/slidemenu';
import { Menubar } from 'primereact/menubar';


const ShowGrupos = () => {
    const endpoint = 'http://127.0.0.1:8000/api';

    const [grupo, setGrupo] = useState([]);

    let navigate = useNavigate();

    function navigateTo(string) {
        navigate(string);
    }

    const footer = `En total hay ${grupo ? grupo.length : 0} grupos registrados.`;

    const bodyTemplate = (rowData) => {
        return <div>
            <Button icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" iconPos="right" onClick={() => editGrupo(rowData)} />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" iconPos="right" onClick={() => deleteGrupo(rowData.id)} />
        </div>
    }

    const editGrupo = (row) => {
        //navigateTo ('student/create/' + row.id);
        navigateTo('/gp/ne/' + row.id);
        console.log("Click: " + row.grupo);
    }


    useEffect(() => {
        getAllGrupos();
    }, []);


    const getAllGrupos = async () => {

        await axios.get(`${endpoint}/grupos`)
            .then(response => {
                console.log(response.data);
                setGrupo(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    //eliminar

    const deleteGrupo = async (_id) => {
        await axios.post(`${endpoint}/grupo/borrar`, {
            id: _id
        }).then(response => {
            getAllGrupos();
        }).catch(function (error) {
            console.log(error)
        })
    }

    let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
    const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;

    const legendTemplate = (
        <div >
            <span className="pi pi-paperclip"></span>
            <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Grupos</span>
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
                        navigateTo('/perfil')
                    }
                }
            ]
        }
    ];

    const itemssecond = [
        {
          label: 'Grupos',
          icon: 'pi pi-th-large',
          
        },
        {
          label: 'Crear',
          icon: 'pi pi-plus-circle',
          command: (event) => {
            navigateTo('/gp/ne')
          }
        }
      ];

    const out = (row) => {
        navigateTo('/');
    }

    const newg = (row) => {
        navigateTo('/gp/ne');
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
                    <DataTable value={grupo} footer={footer} responsiveLayout="scroll">
                        <Column field="grupo" header="Grupo"></Column>
                        <Column header="Acciones" body={bodyTemplate}></Column>
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
export default ShowGrupos
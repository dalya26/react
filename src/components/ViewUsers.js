import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Menubar } from 'primereact/menubar';
import { Fieldset } from 'primereact/fieldset';

const UserView = () => {
    const [users, setUsers] = useState([]);
    const endpoint = 'http://127.0.0.1:8000/api';

    let navigate = useNavigate();

    function navigateTo(string) {
        navigate(string);
    }

    const out = (row) => {
        navigateTo('/');
    }

    const newu = (row) => {
        navigateTo('/user/ne');
    }

    const footer = `En total hay ${users ? users.length : 0} usuarios registrados.`;

    const bodyTemplate = (rowData) => {
        return <div>
            <Button icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" iconPos="right" onClick={() => editUser(rowData)} />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" iconPos="right" onClick={() => deleteUser(rowData.id)} />
        </div>
    }

    const editUser = (row) => {
        //navigateTo ('student/create/' + row.id);
        navigateTo('/user/ne/' + row.id);
        console.log("Click: " + row.name);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {

        await axios.get(`${endpoint}/user`)
            .then(response => {
                console.log(response.data);
                setUsers(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    const deleteUser = async (_id) => {
        await axios.post(`${endpoint}/user/borrar`, {
            id: _id
        }).then(response => {
            getAllUsers();
        }).catch(function (error) {
            console.log(error)
        })
    }

    /** */
    let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
    const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;
    const legendTemplate = (
        <div >
            <span className="pi pi-users"></span>
            <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Usuarios</span>
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
            label: 'Maestros',
            icon: 'pi pi-briefcase',
            command: (event) => {
                  navigateTo('/t/')
                 }
        },
        {
            label: 'Materias',
            icon: 'pi pi-book',
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
                <Menubar model={items} start={start} end={end} />
            </header>

            <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft: '100px', marginRight: '100px' }} legend={legendTemplate}>
                <div style={{marginLeft: '980px'}}>
                    <Button label='New' className="p-button-rounded p-button-warning p-button-text" onClick={() => newu()} />
                </div>
                <div className="card">
                    <DataTable value={users} footer={footer} responsiveLayout="scroll">
                        <Column field="name" header="Nombre"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="rol_rol" header="Rol"></Column>
                        <Column header="Acciones" body={bodyTemplate}></Column>
                    </DataTable>
                </div>

            </Fieldset>
        </div>
    )
}

export default UserView
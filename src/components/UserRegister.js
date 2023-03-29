import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Fieldset } from 'primereact/fieldset';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const ViewUsers = () =>{
    const endpoint = 'http://127.0.0.1:8000/api';

    const{_id} = useParams();
    let navigate = useNavigate();

    function navigateTo(string){
        navigate(string);
    }

    const [selectedRol, setSelectedRol] = useState(null);
    const roles = [
        { name: 'Student', code: 'rol' },
        { name: 'Teacher', code: 'rol' }
    ];


    const saveUsers = async (e) => {
        e.preventDefault();
        await axios.post(`${endpoint}/login`, users)
        .then((response) =>{
            console.log("Guardando...")
            console.log(response.data)
        }).catch((error) =>{

        } )
        navigateTo('/users')
    }

    const [users, setUsers] = useState(
        {
            id:0,
            name: '',
            email: '',
            password: '',
            rol: '',
        }
    );

    const getUsers = async ()=>{

        console.log("getUsers")
        await axios.get(`${endpoint}/users`, {
            params: {id: _id}
        })
        .then((response)=>{
            setUsers(response.data)
        })
    }

    const inputChange = (event) =>{
        console.log("handleInputChange")
        console.log(event.target.name)
        console.log(event.target.value)

        setUsers({
            ...users,
            [event.target.name] : event.target.value
        })
    };
        
        useEffect(() => {
            if (_id === undefined) {
                console.log('Sin parametros');
            }
            else {
                getUsers();
            }
        }, [])

    let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;

    const legendTemplate = (
        <div >
            <span className="pi pi-user"></span>
            <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Nuevo usuario</span>
        </div>
    );


    return (
        <div>
      <header className="card">
        <Menubar start={start} />
      </header>
            <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft: '200px', marginRight: '200px' }} legend={legendTemplate}>
                <div>
                <span className="p-float-label">
                    <InputText name="name" value={users.name} onChange={inputChange}  />
                    <label htmlFor="nombre">Nombre</label>
                </span>
                </div>
                <br></br>

                <div>
                <span className="p-float-label">
                    <InputText  value={users.email} onChange={inputChange} name='email' />
                    <label htmlFor="email">Correo</label>
                </span>
                </div>
                <br></br>

                <div>
                <span className="p-float-label">
                    <InputText type="password" value={users.password} onChange={inputChange} name='password' />
                    <label htmlFor="password">Contraseña</label>
                </span>
                </div>
                <br></br>
                <div>
                <span className="p-float-label">
                    <InputText type="rol" value={users.rol} onChange={inputChange} name='rol' />
                    <label htmlFor="rol">Rol de usuario</label>
                </span>
                </div>
                <br></br>

                <span>
                    <Button label='Save' icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" onClick={saveUsers} />
                    <Button label='Cancel' icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text p-button-secondary ml-2" />
                </span>
            </Fieldset>
        </div>
    )
}

export default ViewUsers
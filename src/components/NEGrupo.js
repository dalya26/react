import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { Fieldset } from 'primereact/fieldset';
import { Menubar } from 'primereact/menubar';
import { useNavigate, useParams } from 'react-router-dom';
//import Swal from 'sweetalert2';


const NEGrupo = () => {
    const endpoint = 'http://127.0.0.1:8000/api';

    const { _id } = useParams();

    let navigate = useNavigate();

    function navigateTo(string) {
        navigate(string);
    }
    const guardarDatos = async (e) => {
        e.preventDefault();
        await axios.post(`${endpoint}/grupo`, grupo)
            .then((response) => {
                console.log("Guardando...")
                console.log(response.data)
            }).catch((error) => {

            })
        navigateTo('/gp')
    }

    const [grupo, setGrupo] = useState(
        {
            id: 0,
            grupo: '',
        }
    );


    const getGrupo = async () => {

        console.log("getGrupo")
        await axios.get(`${endpoint}/grupo`, {
            params: { id: _id }
        })
            .then((response) => {
                setGrupo(response.data)
            })
    }
    //Fin de getTopic

    const inputChange = (event) => {
        console.log("handleInputChange")
        console.log(event.target.name)
        console.log(event.target.value)

        setGrupo({
            ...grupo,
            [event.target.name]: event.target.value
        })
    };
    //UseEffect

    useEffect(() => {
        if (_id === undefined) {
            console.log('Sin parametros');
        }
        else {
            getGrupo();
        }
    }, [])

    let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;

    const legendTemplate = (
        <div >
            <span className="pi pi-qrcode"></span>
            <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Nuevo grupo</span>
        </div>
    );

    return (
        <div>
            <header className="card">
                <Menubar start={start} />
            </header>
            <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin: '25px', marginLeft: '200px', marginRight: '200px' }} legend={legendTemplate}>
                <span className="p-float-label">
                    <InputText value={grupo.nombre} onChange={inputChange} name='grupo' />
                    <label htmlFor="grupo">Grupo</label>
                </span>
                <br></br>

                <span>
                    <Button label='Save' icon="pi pi-file-edit" className="p-button-rounded p-button-success p-button-text" onClick={guardarDatos} />
                    <Button label='Cancel' icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text p-button-secondary ml-2" />
                </span>

            </Fieldset>
        </div>
    )

}
export default NEGrupo
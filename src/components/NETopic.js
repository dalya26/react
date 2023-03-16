import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
//import Swal from 'sweetalert2';


const NETopic = () => {
    const endpoint = 'http://127.0.0.1:8000/api';

    const{_id} = useParams();


    let navigate = useNavigate();

//Aviso de Privacidad
    //useEffect(()=>{
      //  mostrarAlerta();
    //}, []);
    //const mostrarAlerta=()=>{
      //  Swal.fire('Aviso de Privicidad', 'Crayolas Materias', 'info');
    //} 

//Guardar
    function navigateTo(string){
        navigate(string);
        }
        const guardarDatos = async (e) => {
            e.preventDefault();
            await axios.post(`${endpoint}/materia`, topic)
            .then((response) => {
                console.log("Guardando...")
                console.log(response.data)
            }).catch((error) => {
    
            })
            navigateTo('/m')
        }
        const footer = (
            <span>
                <Button label="Save" onClick={guardarDatos} icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
            </span>
        );

        const [topic, setTopic] = useState(
            {
                id: 0,
                nombre: '',
                profesor:'',
                horario:'',
            }
        );

//aqui getEmpleado

    const getEmpleado = async ()=>{

        console.log("getEmpleado")
        await axios.get(`${endpoint}/materia`, {
            params: {id: _id}
        })
        .then((response)=>{
            setTopic(response.data)
        })
    }
//Fin de getEmpleado

    const inputChange = (event) =>{
        console.log("handleInputChange")
        console.log(event.target.name)
        console.log(event.target.value)
        
        setTopic ({
            ...topic,
            [event.target.name] : event.target.value
        })
    };
//UseEffect

    useEffect(() =>{
        if(_id ===undefined)
        {
            console.log('Sin parametros');
        }
        else
        {
            getEmpleado();
        }
    }, [])

    return (
        <div>
            <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer}>
                
            <span className="p-float-label">
                <InputText id='nombre' value={topic.nombre} onChange={inputChange} name='nombre'/>
                <label htmlFor="nombre">Nombre</label>
            </span>
            <br></br>
    
            <span className="p-float-label">
                <InputText id='profesor' value={topic.profesor} onChange={inputChange} name='profesor'/>
                <label htmlFor="profesor">Profesor</label>
            </span>
            <br></br>
            
            <span className="p-float-label">
                <InputText id='horario' value={topic.horario} onChange={inputChange} name='horario'/>
                <label htmlFor="horario">Horario</label>
            </span>
            <br></br>

            </Card>
        </div>
      )

}
export default NETopic
import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import './estyle/cssSA.css';

const NEStudent = () => {
    const endpoint = 'http://127.0.0.1:8000/api';

    const{_id} = useParams();

    let navigate = useNavigate();

    function navigateTo(string){
    navigate(string);
    
    }
    //Nueva Funcion
    const [selectedMateria, setSelectedMateria] = useState(null);
    const [optionList, setOptionList] = useState([]);
    
    const obtenerMaterias = async (e) =>{
        console.log("pobtenerMaterias")
    
        await axios.get(`${endpoint}/combo_materias`)
        .then ((response) => {
            console.log(response.data)
            setOptionList(response.data)
        })
    
    }

    //Aviso de Privacidad
    //useEffect(()=>{
      //  mostrarAlerta();
      //}, []);
      //const mostrarAlerta=()=>{
        //Swal.fire('Aviso de Privicidad', 'Crayolas Estudiantes', 'info');
      //}
    
    //Guardar
    const guardarDatos = async (e) => {
        e.preventDefault()
        setStudent ({
            ...student,
            'id_materia' : selectedMateria
        })

        
        await axios.post(`${endpoint}/alumno`, student)
        .then((response) => {
            console.log("Guardando...")
            console.log(response.data)
        }).catch((error) => {

        })
        navigateTo('/alumnos')
    }
    
    const [student, setStudent] = useState(
        {
            id: 0,
            nombre: '',
            apetpat:'',
            apetmat:'',
            matricula: '',
            edad: '',
            sexo: '',
            id_materia:0,
        }
    );

//aqui getEmpleado

const getEmpleado = async ()=>{

    console.log("getEmpleado")
    await axios.get(`${endpoint}/alumno`, {
        params: {id: _id}
    })
    .then((response)=>{
        setStudent(response.data)
    })
}

//Fin de getEmpleado

    const inputChange = (event) =>{
        console.log("handleInputChange")
        console.log(event.target.name)
        console.log(event.target.value)
        

        setStudent ({
            ...student,
            [event.target.name] : event.target.value        
        })
    };

    
    //Dropdown
    const dropDownChange = (event) =>{
        console.log("drpDownChange")
        console.log(event.target.name)
        console.log(event.target.value)
        
        setSelectedMateria(event.target.value);

        setStudent ({
            ...student,
            [event.target.name] : event.target.value.code
        })
    }

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
        obtenerMaterias();
    }, [])

  return (
    <div class="contenido">

        <Card>
            <h1>Estudiante</h1>
            <div class="contentdos">
        <span className="p-float-label">
            <InputText id='nombre' value={student.nombre} onChange={inputChange} name='nombre'/>
            <label htmlFor="nombre">Nombre</label>
        </span>
        <br></br>

        <span className="p-float-label">
            <InputText id='apetpat' value={student.apetpat} onChange={inputChange} name='apetpat'/>
            <label htmlFor="apetpat">Apellido Paterno</label>
        </span>
        
        <br></br>
        
        <span className="p-float-label">
            <InputText id='apetmat' value={student.apetmat} onChange={inputChange} name='apetmat'/>
            <label htmlFor="apetmat">Apellido Materno</label>
        </span>
        
        <br></br>

        <span className="p-float-label">
            <InputText id='matricula' value={student.matricula} onChange={inputChange} name='matricula'/>
            <label htmlFor="matricula">Matricula</label>
        </span>
        
        <br></br>
        
       
        <span className="p-float-label">
            <InputText id='edad' type='number' value={student.edad} onChange={inputChange} name='edad'/>
            <label htmlFor="edad">Edad</label>
        </span>
        <br></br>
        
        <span className="p-float-label">
            <InputText id='sexo' value={student.sexo} onChange={inputChange} name='sexo'/>
            <label htmlFor="sexo">Sexo</label>
        </span>
        
        <br></br>
        <span className="p-float-label">
            <Dropdown value={selectedMateria} 
            name='id_materia'
            onChange={dropDownChange}  
            options={optionList} 
            optionLabel="name" 
            placeholder="Materrias..." 
            className="w-full md:w-14rem" />
        </span>

        </div>
        <span class="btns">
            <Button label="Save" onClick={guardarDatos} icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
        
        </Card>
    </div>
  )
}

export default NEStudent
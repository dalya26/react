import React, { useEffect, useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Fieldset } from "primereact/fieldset";
import { Menubar } from "primereact/menubar";
import { MultiSelect } from "primereact/multiselect";
import { Toast } from "primereact/toast";
//import Swal from 'sweetalert2';

const NETeacher = () => {
  const endpoint = "http://127.0.0.1:8000/api";
  const toast = useRef(null);
  const { _id } = useParams();

  let navigate = useNavigate();

  //alerta validaciones
  const showCorrect = () => {
    toast.current.show({
      severity: "success",
      summary: "Exito",
      detail: "Registro exitoso",
      life: 3000,
    });
  };
  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Favor de llenar todos los campos",
    });
  };
  function navigateTo(string) {
    navigate(string);
  }

  //Nueva Funcion

  const [selectedMateria, setSelectedMateria] = useState(null);
  const [optionList, setOptionList] = useState([]);
  const [selectedSexo, setSelectedSexo] = useState(null);

  const sex = [
    { name: "Femenino", code: "Femenino" },
    { name: "Masculino", code: "Masculino" },
  ];

  const obtenerMaterias = async (e) => {
    console.log("pobtenerMaterias");

    await axios.get(`${endpoint}/combo_materias`).then((response) => {
      console.log(response.data);
      setOptionList(response.data);
    });
  };

  //Aviso de Privacidad
  //useEffect(()=>{
  //  mostrarAlerta();
  //}, []);
  //const mostrarAlerta=()=>{
  //Swal.fire('Aviso de Privicidad', 'Crayolas Profesores', 'info');
  //}

  /**const validar = async (e) => {
    await axios.get(`${endpoint}/profesor`, teacher).then((response) => {
      if (
        teacher.nombre == "" ||
        teacher.apetpat == "" ||
        teacher.apetmat == "" ||
        teacher.edad == "" ||
        teacher.matricula == "" ||
        teacher.sexo == "" ||
        teacher.cedula == "" ||
        teacher.materia == ""
      ) {
        console.log("todos los campos estan vacios ");
        show();
      } else {
        showCorrect();
        guardarDatos();
      }
    });
  };*/

  //Guardar

  const guardarDatos = async (e) => {
    e.preventDefault();
    setTeacher({
        ...teacher,
        'id_materia' : selectedMateria
    })

    await axios.post(`${endpoint}/profesor`, teacher)
        .then((response) => {
            console.log("Guardando..")
        }).catch((error) => {
            
        })
    navigateTo('/t/')
}


  const regresar = async (e) => {
    e.preventDefault();

    navigateTo("/t");
  };

  const [teacher, setTeacher] = useState({
    id: 0,
    nombre: "",
    apetpat: "",
    apetmat: "",
    matricula: "",
    edad: "",
    sexo: "",
    cedula: "",
    id_materia: 0,
  });

  //GetEmpleado

  const getEmpleado = async () => {
    console.log("getEmpleado");
    await axios
      .get(`${endpoint}/profesor`, {
        params: { id: _id },
      })
      .then((response) => {
        setTeacher(response.data);
      });
  };
  //Fin de getEmpleado

  const inputChange = (event) => {
    console.log("handleInputChange");
    console.log(event.target.name);
    console.log(event.target.value);

    setTeacher({
      ...teacher,
      [event.target.name]: event.target.value,
    });
  };

  //DropDown
  const dropDownChange = (event) => {
    console.log("drpDownChange");
    console.log(event.target.name);
    console.log(event.target.value);

    setSelectedMateria(event.target.value);

    setTeacher({
      ...teacher,
      [event.target.name]: event.target.value.code,
    });
  };
  const dropDownChange1 = (event) => {
    console.log("dropDownChange");
    console.log(event.target.name);
    console.log(event.target.value.code);

    setSelectedSexo(event.target.value);

    setTeacher({
      ...teacher,
      [event.target.name]: event.target.value.code,
    });
  };

  useEffect(() => {
    if (_id === undefined) {
      console.log("Sin parametros");
    } else {
      getEmpleado();
    }
    obtenerMaterias();
  }, []);

  let start = (
    <img
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png"
      style={{
        height: "70px",
        width: "70px",
        marginLeft: "20px",
        marginTop: "3px",
      }}
    ></img>
  );

  const legendTemplate = (
    <div>
      <span className="pi pi-folder-open"></span>
      <span className="font-bold text-lg" style={{ marginLeft: "8px" }}>
        Nuevo profesor
      </span>
    </div>
  );

  return (
    <div>
      <Toast ref={toast} />
      <header className="card">
        <Menubar start={start} />
      </header>
      <Fieldset
        style={{
          fontSize: "25px",
          fontFamily: "monospace",
          margin: "25px",
          marginLeft: "200px",
          marginRight: "200px",
        }}
        legend={legendTemplate}
      >
        <span className="p-float-label">
          <InputText
            id="nombre"
            value={teacher.nombre}
            onChange={inputChange}
            name="nombre"
          />
          <label htmlFor="nombre">Nombre</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="apetpat"
            value={teacher.apetpat}
            onChange={inputChange}
            name="apetpat"
          />
          <label htmlFor="apetpat">Apellido paterno</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="apetmat"
            value={teacher.apetmat}
            onChange={inputChange}
            name="apetmat"
          />
          <label htmlFor="apetmat">Apellido materno</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="matricula"
            value={teacher.matricula}
            onChange={inputChange}
            name="matricula"
          />
          <label htmlFor="matricula">Matricula</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="edad"
            type="number"
            value={teacher.edad}
            onChange={inputChange}
            name="edad"
          />
          <label htmlFor="edad">Edad</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <Dropdown
            value={selectedSexo}
            name="sexo"
            onChange={dropDownChange1}
            options={sex}
            optionLabel="name"
            placeholder="Sexo"
          />
          <label htmlFor="sexo">Sexo</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="cedula"
            value={teacher.cedula}
            onChange={inputChange}
            name="cedula"
          />
          <label htmlFor="cedula">Cedula</label>
        </span>
        <br></br>

        <Dropdown
          value={selectedMateria}
          name="id_materia"
          onChange={dropDownChange}
          options={optionList}
          optionLabel="name"
          placeholder="Materias..."
          className="w-full md:w-14rem"
        />
        <label htmlFor="materia">Materias</label>
        <br></br>
        <span>
          <Button
            label="Save"
            icon="pi pi-file-edit"
            className="p-button-rounded p-button-success p-button-text"
            onClick={guardarDatos}
          />
          <Button
            label="Cancel"
            onClick={regresar}
            icon="pi pi-times"
            className="p-button-rounded p-button-danger p-button-text p-button-secondary ml-2"
          />
        </span>
      </Fieldset>
    </div>
  );
};
export default NETeacher;
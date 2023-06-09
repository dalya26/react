import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { Fieldset } from "primereact/fieldset";
import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";

const NEStudent = () => {
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

  //Nueva Funcion
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [optionList, setOptionList] = useState([]);

  const [selectedGrupo, setSelectedGrupo] = useState(null);
  const [optionListGrupo, setOptionListGrupo] = useState([]);

  const [selectedSexo, setSelectedSexo] = useState(null);

  const sex = [
    { name: "Femenino", code: "Femenino" },
    { name: "Masculino", code: "Masculino" },
  ];

  const obtenerMaterias = async (e) => {
    console.log("obtenerMaterias");

    await axios.get(`${endpoint}/combo_materias`).then((response) => {
      console.log(response.data);
      setOptionList(response.data);
    });
  };

  const obtenerGrupos = async (e) => {
    console.log("obtenergrupos");

    await axios.get(`${endpoint}/grupo/combo`).then((response) => {
      console.log(response.data);
      setOptionListGrupo(response.data);
    });
  };

  //Aviso de Privacidad
  //useEffect(()=>{
  //  mostrarAlerta();
  //}, []);
  //const mostrarAlerta=()=>{
  //Swal.fire('Aviso de Privicidad', 'Crayolas Estudiantes', 'info');
  //}

  //Guardar
  const validar = async (e) => {
    await axios.get(`${endpoint}/alumno`, student).then((response) => {
      if (
        student.nombre == "" ||
        student.app == "" ||
        student.apm == "" ||
        student.edad == "" ||
        student.matricula == "" ||
        student.sexo == "" ||
        student.materia == ""
      ) {
        console.log("todos los campos estan vacios ");
        show();
      } else {
        showCorrect();
        guardarDatos();
      }
    });
  };
  function navigateTo(string) {
    navigate(string);
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    setStudent({
      ...student,
      id_materia: selectedMateria,
      id_grupo: selectedGrupo,
    });
    await axios
      .post(`${endpoint}/alumno`, student)
      .then((response) => {
        console.log("Guardando...");
        console.log(response.data);
      })
      .catch((error) => {});
    navigateTo("/alumnos");
  };

  const regresar = async (e) => {
    e.preventDefault();

    navigateTo("/alumnos");
  };

  const [student, setStudent] = useState({
    id: 0,
    nombre: "",
    apetpat: "",
    apetmat: "",
    matricula: "",
    edad: "",
    sexo: "",
    id_materia: 0,
    id_grupo: 0,
  });

  //aqui getEmpleado

  const getEmpleado = async () => {
    console.log("getEmpleado");
    await axios
      .get(`${endpoint}/alumno`, {
        params: { id: _id },
      })
      .then((response) => {
        setStudent(response.data);
      });
  };

  //Fin de getEmpleado

  const inputChange = (event) => {
    console.log("handleInputChange");
    console.log(event.target.name);
    console.log(event.target.value);

    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  //Dropdown
  const dropDownChange = (event) => {
    console.log("drpDownChange");
    console.log(event.target.name);
    console.log(event.target.value);

    setSelectedMateria(event.target.value);

    setStudent({
      ...student,
      [event.target.name]: event.target.value.code,
    });
  };

  const dropDownChangeGrupo = (event) => {
    console.log("dropDownChangeGrupo");
    console.log(event.target.name);
    console.log(event.target.value);

    setSelectedGrupo(event.target.value);

    setStudent({
      ...student,
      [event.target.name]: event.target.value.code,
    });
  };

  const dropDownChange1 = (event) => {
    console.log("dropDownChange");
    console.log(event.target.name);
    console.log(event.target.value.code);

    setSelectedSexo(event.target.value);

    setStudent({
      ...student,
      [event.target.name]: event.target.value.code,
    });
  };
  //UseEffect

  useEffect(() => {
    if (_id === undefined) {
      console.log("Sin parametros");
    } else {
      getEmpleado();
    }
    obtenerMaterias();
    obtenerGrupos();
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
        Nuevo estudiante
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
            value={student.nombre}
            onChange={inputChange}
            name="nombre"
          />
          <label htmlFor="nombre">Nombre</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            id="apetpat"
            value={student.apetpat}
            onChange={inputChange}
            name="apetpat"
          />
          <label htmlFor="apetpat">Apellido Paterno</label>
        </span>

        <br></br>

        <span className="p-float-label">
          <InputText
            id="apetmat"
            value={student.apetmat}
            onChange={inputChange}
            name="apetmat"
          />
          <label htmlFor="apetmat">Apellido Materno</label>
        </span>

        <br></br>

        <span className="p-float-label">
          <InputText
            id="matricula"
            value={student.matricula}
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
            value={student.edad}
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
          <Dropdown
            value={selectedMateria}
            name="id_materia"
            onChange={dropDownChange}
            options={optionList}
            optionLabel="name"
            placeholder="Materias..."
            className="w-full md:w-14rem"
          />
          <label htmlFor="materia">Materia</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <Dropdown
            value={selectedGrupo}
            name="id_grupo"
            onChange={dropDownChangeGrupo}
            options={optionListGrupo}
            optionLabel="name"
            placeholder="Grupos..."
            className="w-full md:w-14rem"
          />
          <label htmlFor="grupo">Grupo</label>
        </span>
        <br></br>

        <span>
          <Button
            label="Save"
            icon="pi pi-file-edit"
            className="p-button-rounded p-button-success p-button-text"
            onClick={validar}
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

export default NEStudent;
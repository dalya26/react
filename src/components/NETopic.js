import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { Fieldset } from "primereact/fieldset";
import { Menubar } from "primereact/menubar";
import { Dropdown } from "primereact/dropdown";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
//import Swal from 'sweetalert2';

const NETopic = () => {
  const endpoint = "http://127.0.0.1:8000/api";

  const { _id } = useParams();
  const toast = useRef(null);
  let navigate = useNavigate();

  //Aviso de Privacidad
  //useEffect(()=>{
  //  mostrarAlerta();
  //}, []);
  //const mostrarAlerta=()=>{
  //  Swal.fire('Aviso de Privicidad', 'Crayolas Materias', 'info');
  //}

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
      detail: "El campo no puede estar vacío",
      life: 3000,
    });
  };
  const validar = async (e) => {
    await axios.get(`${endpoint}/materia`, topic).then((response) => {
      if (topic.nombre == "") {
        console.log("El campo no puede estar vacío");
        show();
      } else {
        showCorrect();
        guardarDatos();
      }
    });
  };
  //Guardar
  function navigateTo(string) {
    navigate(string);
  }
  const guardarDatos = async (e) => {
    e.preventDefault();
    await axios
      .post(`${endpoint}/materia`, topic)
      .then((response) => {
        console.log("Guardando...");
        console.log(response.data);
      })
      .catch((error) => {});
    navigateTo("/m");
  };

  const regresar = async (e) => {
    e.preventDefault();

    navigateTo("/m");
  };
  const [topic, setTopic] = useState({
    id: 0,
    nombre: "",
  });

  //aqui getTopic

  const getTopic = async () => {
    console.log("getTopic");
    await axios
      .get(`${endpoint}/materia`, {
        params: { id: _id },
      })
      .then((response) => {
        setTopic(response.data);
      });
  };
  //Fin de getTopic

  const inputChange = (event) => {
    console.log("handleInputChange");
    console.log(event.target.name);
    console.log(event.target.value);

    setTopic({
      ...topic,
      [event.target.name]: event.target.value,
    });
  };
  //UseEffect

  useEffect(() => {
    if (_id === undefined) {
      console.log("Sin parametros");
    } else {
      getTopic();
    }
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
        Nueva materia
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
            value={topic.nombre}
            onChange={inputChange}
            name="nombre"
          />
          <label htmlFor="nombre">Materia</label>
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
export default NETopic;
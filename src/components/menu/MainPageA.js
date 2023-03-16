//import React from 'react';
import { Link } from 'react-router-dom';
import '../estyle/estilos.css';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function MainPageA() {

  let navigate = useNavigate();
    function navigateTo(string) {
        navigate(string);
    }

    const out = (row) => {
        navigateTo('/');
    }
    const prof = (row) => {
      navigateTo('/t/');
    }
    const alum = (row) => {
      navigateTo('/alumnos');
    }
    const mat = (row) => {
      navigateTo('/m');
    }


  return (
    <div class='bodyHP'>
    <header>
        <h2 class="logo">My List</h2>
        <nav class="navigation">
            <a href="#">School</a>
            <a onClick={() => alum()}>Estudiantes</a>
            <a onClick={() => prof()}>Profesores</a>
            <a onClick={() => mat()}>Materias</a>
            <button class="btnLogin-popup" onClick={() => out()}>Salir</button>
        </nav>
    </header>

    <div class="wrapper">
        <div >
            <div class="logoM"><img class="imagen" src="https://ayuda.mascaradelatex.com/hc/article_attachments/1500004826121/reloj.gif"></img></div>
            <div class="textouno">
                <span class="titulo"><h1>Bienvenido.</h1></span>
                <div class="descrip">
                    <span>La puntualidad es el respeto hacia el tiempo de los demás.</span>
                </div>
            </div>
        </div>
    </div>

    <div class="foter">
        <footer>
            <p> &copy; My List 2023 - Algunos derechos reservados.</p>
        </footer>
    </div>
</div>
  );
}

export default MainPageA
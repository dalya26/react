import logo from './logo.svg';
//import './App.css';
//import Swal from 'sweetalert2';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    //icons
import ShowAlumnos from './components/ShowAlumnos';
import NEStudent from './components/NEStudent';
import ShowProfesores from './components/ShowProfesores';
import NETeacher from './components/NETeacher';
import ShowMaterias from './components/ShowMaterias';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'; //se agrego navigate
import NETopic from './components/NETopic';
import LoginComponent from './components/LoginComponent';
import LoginComponentS from './components/LoginComponentS';
import VistaAlumno from './components/VistaAlumno';
import VistaProfesor from './components/VistaProfesor';
import Hogar from './components/Hogar';


import { useEffect } from 'react';
import LoginComponentM from './components/LoginComponentM';
import MainPageA from './components/menu/MainPageA';
import MainPageS from './components/menu/MainPageS';
import MainPageP from './components/menu/MainPageP';
import HomeP from './components/menu/HomeP';



function App() {
//useEffect(()=>{
  //mostrarAlerta();
//}, []);
//const mostrarAlerta=()=>{
  //SSwal.fire('Aviso de Privicidad', 'Crayolas', 'info');
//}



  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<HomeP/>}/>

            <Route path="/alumnado" element={<LoginComponentS/>}/>

            <Route path="/docente" element={<LoginComponentM/>}/>

            <Route path="/login" element={<LoginComponent/>}/>

            <Route path="/pgpA" element={<MainPageA/>}/>
            <Route path="/pgpS" element={isLoggedIn ? <MainPageS/> : <Navigate to="/alumnado"/> }/>
            <Route path="/pgpP" element={isLoggedIn ? <MainPageP/> : <Navigate to="/docente"/> }/>

            <Route path="/alumnos/" element={<ShowAlumnos/>}/>

            <Route path="/student/ne/:_id?" element={<NEStudent/>}/>

            <Route path="/t/" element={<ShowProfesores/>}/>
            
            <Route path="/teacher/ne/:_id?" element={ <NETeacher/> }/>
            
            {/* <Route path="/m/" element={isLoggedIn ? <ShowMaterias/> : <Navigate to="/admin"/>}/> */}

            <Route path="/m" element={<ShowMaterias/> }/>
            
            <Route path="/topic/ne/:_id?" element={<NETopic/>}/>

            <Route path="/vistaalumno" element={<VistaAlumno/> }/>

            <Route path="/vistadocente" element={ <VistaProfesor/> }/>





            {/**<Route path="/alumnos/" element={isLoggedIn ? <ShowAlumnos /> : <Navigate to="/admin" />} />

          <Route path="/student/ne/:_id?" element={isLoggedIn ? <NEStudent /> : <Navigate to="/admin" />} />

          <Route path="/t/" element={isLoggedIn ? <ShowProfesores /> : <Navigate to="/admin" />} />

          <Route path="/teacher/ne/:_id?" element={isLoggedIn ? <NETeacher /> : <Navigate to="/admin" />} />

          <Route path="/m" element={isLoggedIn ? <ShowMaterias /> : <Navigate to="/docente" />} />

          <Route path="/topic/ne/:_id?" element={isLoggedIn ? <NETopic /> : <Navigate to="/admin" />} />

          <Route path="/vistaalumno" element={isLoggedIn ? <VistaAlumno /> : <Navigate to="/alumnado" />} />

          <Route path="/vistadocente" element={isLoggedIn ? <VistaProfesor /> : <Navigate to="/docente" />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//npm audit fix --force
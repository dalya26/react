//import logo from './logo.svg';
//import './App.css';
//import Swal from 'sweetalert2';
import { PermifyProvider } from "@permify/react-role";

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
import MainP from './components/menu/MainP';
import IndexP from './components/menu/IndexP';
import UserRegister from './components/UserRegister';
import ViewUsers from "./components/ViewUsers";
import ShowGrupos from "./components/ShowGrupos";
import NEGrupo from "./components/NEGrupo";
import Perfil from "./components/Perfil";
import NotFund from "./components/NotFund"
import IndexA from "./components/menu/IndexA";
import { useState } from "react";
import { HasAccess } from "@permify/react-role";
import { PermifyContext } from "@permify/react-role";
import { usePermify } from '@permify/react-role';


function App() {

  const isLoggedIn = !!localStorage.getItem('token');
  
   
  return (
   
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<MainP/>}/>
          <Route path="/register" element={isLoggedIn ? <UserRegister /> : <Navigate to="/" />} />

          <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Navigate to="/" />} />

          <Route path="/indexa" element={isLoggedIn ? <IndexA /> : <Navigate to="/" />} />
          <Route path="/indexp" element={isLoggedIn ? <IndexP /> : <Navigate to="/" />} />
          <Route path="/users" element={isLoggedIn ? <ViewUsers /> : <Navigate to="/" />}/>
          <Route path="/user/ne/:_id?" element={isLoggedIn ? <UserRegister /> : <Navigate to="/" />} />

          <Route path="/gp" element={isLoggedIn ? <ShowGrupos/> : <Navigate to="/" />} />
          <Route path="/gp/ne/:_id?" element={isLoggedIn ? <NEGrupo /> : <Navigate to="/" />} />

          <Route path="/alumnos/" element={isLoggedIn ? <ShowAlumnos /> : <Navigate to="/" />} />

          <Route path="/student/ne/:_id?" element={isLoggedIn ? <NEStudent /> : <Navigate to="/" />} />

          <Route path="/t/" element={isLoggedIn ? <ShowProfesores /> : <Navigate to="/" />} />

          <Route path="/teacher/ne/:_id?" element={isLoggedIn ? <NETeacher /> : <Navigate to="/" />} />

          <Route path="/m" element={isLoggedIn ? <ShowMaterias /> : <Navigate to="/" />} />

          <Route path="/topic/ne/:_id?" element={isLoggedIn ? <NETopic /> : <Navigate to="/" />} /> 

          <Route path="*" element={<NotFund/>}/>

      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//npm audit fix --force
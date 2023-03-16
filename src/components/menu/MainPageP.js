//import React from 'react';
import { Link } from 'react-router-dom';
import '../estyle/estilos.css';
import React, { useState } from 'react';

function MainPageP() {

  return (
      <div style={{ backgroundColor: '#EAECEE', padding: '5px' }}>
          <nav className='bodyM' style={{ backgroundColor: '#AED6F1', padding: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" > 
                  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg><fond face='Bradley hand'>MI LISTA</fond>
                
              <ul className='ulB' style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                  <li className='liM'> 
                  
                    <Link to="/pgpA" style={{ textDecoration: 'none', color: 'black'}}></Link></li></div>
                    
                  <li><Link to="/alumnos/" style={{ textDecoration: 'none', color: 'black' }}>Alumnos</Link></li>
                  <li><Link to="/m" style={{ textDecoration: 'none', color: 'black' }}>Materias</Link></li>
                  
                  <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Salir</Link></li>
              </ul>
          </nav>

          <div className="container">
          <img src="https://cdn-icons-png.flaticon.com/512/4334/4334927.png" alt="Imagen" className="image" />
            <div className="text">
              <h2>Bienvenido.</h2>
              <p>Realiza el pase de asistencias correctamente.</p>
            </div>
          </div>

	

          <footer style={{ backgroundColor: '#ABB2B9', padding: '10px', marginTop: '20px' }}>
              <p style={{ textAlign: 'center' }}>Todos los derechos reservados &copy; Mi Sitio Web 2023</p>
          </footer>
      </div>
  );
}

export default MainPageP
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';

 function IndexP() {
   let navigate = useNavigate();
   function navigateTo(string) {
     navigate(string);
   }

   const out = (row) => {
     navigateTo('/');
   }

   useEffect(() => {
     mostrarAlerta();
   }, []);
   const mostrarAlerta = () => {

     Swal.fire(
       {

         icon: 'info',
         title: 'Aviso de Privacidad',
         html: '<p><b>Roll Call</b> de S.A. de CV mejor conocido como Roll Call, con domicilio en Carretera Federal México-Pachuca km 37.5, Predio Sierra Hermosa, Tecámac Edo. Méx. y portal de internet http://127.0.0.1:8000/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br><br><b>¿Para qué fines utilizaremos sus datos personales?</b><br><br> Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:  Respuesta a mensajes del formulario de contacto, registro de profesores, registros de materias, registro de alumnos y gestión de asistencias de alumnos. <br><br><b>¿Dónde puedo consultar el aviso de privacidad integral?</b><br><br>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico: <br><br><b>juanjolotex17@gmail.com </b></p>',
         footer: 'Última actualización de este aviso de privacidad: 04/03/2023 '
       });
   }

   
   const items = [
     {
       label: 'Inicio',
       icon: 'pi pi-home',
       command: (event) => {
         navigateTo('/indexp')
       }
     },
     {
       label: 'Grupos',
       icon: 'pi pi-users',
       items: [
         {
           label: 'Ver Grupos',
           icon: 'pi pi-user-plus',
           command: (event) => {
             navigateTo('/grup')
           }
         },
         {
           label: 'Nuevo Grupo',
           icon: 'pi pi-user-plus',
           command: (event) => {
             navigateTo('/grup/ne')
           }
         },
         {
           separator: true
         },
         {
           label: 'Importar',
           icon: 'pi pi-file-import'

           //poner navegacion para exportar grupos en pdf
         },
         {
           label: 'Exportar',
           icon: 'pi pi-file-export',
           items: [
             {
               label: 'CSV',
               icon: 'pi pi-file-excel'
               //poner navegacion para exportar grupos en pdf
             },
             {
               label: 'PDF',
               icon: 'pi pi-file-pdf'
               //poner navegacion para exportar grupos en pdf
             }
           ]
           //poner navegacion para importar grupos en csv
         }
       ]
     },
     {
       label: 'Maestros',
       icon: 'pi pi-briefcase',
       command: (event) => {
         navigateTo('/t/')
       }
     },
     {
       label: 'Materias',
       icon: 'pi pi-book',
       command: (event) => {
         navigateTo('/m')
       }
     },
     {
       label: 'Ajustes',
       icon: 'pi pi-cog',
       items: [
         {
           label: 'Perfil',
           icon: 'pi pi-user',
           command: (event) => {
             navigateTo('/prfil')
           }
         }
       ]
     }
   ];

   const start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop:'3px' }}></img>;
   const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;

   return (
     <div className="card">
       <Menubar model={items} start={start} end={end} />
     </div>
   );
 }

export default IndexP
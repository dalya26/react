import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';

 function IndexP() {
  
   let navigate = useNavigate();
   function navigateTo(string) {
     navigate(string);
   }

   const out = (row) => {
     navigateTo('/');
   }

   /**useEffect(() => {
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
   }*/

   
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
       command: (event) => {
        navigateTo('/gp')
       }
     },
     {
       label: 'Maestros',
       icon: 'pi pi-briefcase',
       command: (event) => {
         navigateTo('/t/')
       }
     },
     {
       label: 'Estudiantes',
       icon: 'pi pi-user-edit',
       command: (event) => {
         navigateTo('/alumnos')
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
             navigateTo('/perfil')
           }
         },
         {
          label: 'New user',
          icon: 'pi pi-user',
          command: (event) => {
            navigateTo('/register')
          }
        }
       ]
     }
   ];

   const start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop:'3px' }}></img>;
   const end = <Button label='Salir' icon="pi pi-sign-out " className="p-button-rounded outlined p-button-danger p-button-text" iconPos="left" style={{ marginRight: '20px' }} onClick={() => out()} />;

   return (
    <div>
    <header className="card">
        <Menubar model={items} start={start} end={end} />
    </header>
    <Splitter style={{ marginLeft:'20px', marginRight:'20px',marginTop:'20px', marginBlockEnd:'20px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10} style={{ marginLeft:'10px', marginRight:'10px',marginTop:'10px'}}>
        <div style={{marginRight:'9px', marginLeft:'9px', marginTop:'9px', marginBlockEnd:'10px'}}>
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Difusión y divulgación universitaria" style={{fontFamily: 'monospace',fontSize:'17px'}}>
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                    <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                      <strong style={{fontSize:'20px'}} >Difusión</strong>
                    
                    <p>
                      Difundir el Modelo y Oferta Educativa, así como los requisitos y fechas de ingreso a los estudiantes de educación media superior 
                      y público en general, a través de las estrategias:
                      <ul>
                      <li>Campaña de difusión del examen de admisión.</li>
                      <li>UTTEC visita a IEMS.</li>
                      <li>IEMS visita a la UTTEC.</li>
                      <li>UTTEC participa en Expo Orientas.</li>
                      <li>Sesiones Informativas en la UTTEC.</li>
                      <li>Programa Anfitrión.</li>
                      <li>Volanteo y colocación de carteles.</li>
                    </ul>
                    </p>
                    <p>
                    <strong style={{fontSize:'20px'}} >Divulgación Universitaria</strong>
                    <p>

                        A través de nuestros medios de comunicación, se informa a la comunidad universitaria y público en general; el acontecer y los 
                        hechos relevantes generados por los alumnos, docentes y directivos, sobre los temas de educación, ciencia, tecnología, cultura, 
                        deporte y eventos institucionales.
                    <p>
                        Los medios oficiales de comunicación que tenemos, son: Redes Sociales como Facebook, Twitter, Instagram, YouTube, revista digital 
                        Contacto UTTEC, los programas Entorno UTTEC, Info UTTEC y Breves UTTEC así como espacios externos de comunicación tales como: 
                        Revista Digital de Confluencia ANUIES Región Centro Sur, página web de la CGUTyP, etc.
                    </p>
                    </p>
                    </p>
                    </p>
                    </ScrollPanel>
                </AccordionTab>
                <AccordionTab header="Oferta educativa" style={{fontFamily: 'monospace',fontSize:'17px'}}>
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                    <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                    La oferta educativa es el conjunto de aspectos y características relacionadas con la enseñanza que se da a conocer para su 
                    consumo, una oferta se realiza con distintos promotores, es diseñada desde la administración educativa, sometida a reglamentos, 
                    normas, concretada en asignaturas, programas, horarios de grupo, académicos con perfiles adecuados, y de este modo se imparta 
                    oficialmente en los centros educativos.
                    </p>
                    </ScrollPanel>
                </AccordionTab>
                <AccordionTab header="Academia" style={{fontFamily: 'monospace',fontSize:'17px'}}>
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                    <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                    Asegurar que las funciones de docencia, investigación, servicios escolares, estudiantiles y bibliotecarios se proporcionen de acuerdo 
                    al modelo educativo de la Universidad, así como evaluar y supervisar el desarrollo de las actividades orientadas a extender los 
                    beneficios de la ciencia, la técnica y la cultura.
                    <p></p>
                    Depende de la Secretaría Académica las siguientes áreas:
                    <ul>
                      <li>División de Infraestructura de la Enseñanza Experimental.</li>
                      <li>División de Procesos Industriales.</li>
                      <li>Almacén General de Herramientas.</li>
                      <li>División de Tecnologías de la Información y Comunicación.</li>
                      <li>División de Electromecánica Industrial.</li>
                      <li>División de Químico Biológicas.</li>
                      <li>División de Económico Administrativas.</li>
                      <li>Jefatura de Departamento de Servicios Escolares.</li>
                      <li>Jefatura de Departamento de Servicios Bibliotecarios.</li>
                      <li>Coordinación de Servicios Estudiantiles.</li>
                      <li>Centro de Cooperación Academia-Industria.</li>
                    </ul>
                    </p>
                  </ScrollPanel>
                </AccordionTab>
                <AccordionTab header="Vinculación" style={{fontFamily: 'monospace',fontSize:'17px'}}>
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                    <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                    Tiene como objetivo promover una mayor vinculación con los sectores público, privado y social tanto nacionales como internacionales, 
                    a través de la concertación y celebración de convenios que coadyuven a elevar la calidad de las funciones académicas, de investigación, 
                    de educación continua y que contribuyan al fortalecimiento del impacto institucional de la Universidad en su zona de influencia. 
                    
                    <p></p>
                    Dentro de las funciones que se desprenden de la Secretaría están:
                    <ul>
                      <li>El seguimiento a egresados en su colocación en el sector productivo, supervisando los estudios realizados para conocer los índices ocupacionales.</li>
                      <li>Supervisar la implantación de programas de capacitación, actualización y especialización de la comunidad estudiantil, egresados universitarios, de los sectores productivo, público y social y sociedad en general.</li>
                      <li>Coordinar estudios de investigación para la detección de necesidades.</li>
                      <li>Promover e impulsar el intercambio académico con instituciones educativas nacionales, extranjeras y organismos internacionales, que fortalezcan la pertinencia y calidad del modelo educativo de la UTTEC.</li>
                      <li>Participar en comisiones académicas y de vinculación para la actualización de planes y programas de estudio, integrando las propuestas de empresarios, industriales y profesionales del sector productivo.</li>
                      <li>Supervisar el desarrollo de proyectos para fomentar la productividad y competitividad del sector público a través del Centro de Evaluación en competencias laborales.</li>
                      <li>Coordinar y supervisar el desarrollo de estudios y servicios tecnológicos que contemplen la solución de problemas de los diversos sectores.</li>
                    </ul>
                    </p>
                  </ScrollPanel>
                </AccordionTab>
            </Accordion>
            <Panel header="Redes Sociales" style={{fontFamily: 'monospace',fontSize:'17px'}}>
              <p className="m-0">
              <ul>
                  <li><a href='https://m.facebook.com/UTTECsitiooficial/'>Facebook</a></li>
                  <li><a href='https://twitter.com/uttecoficial'>Twitter</a></li>
                  <li><a href='https://www.instagram.com/uttecoficial/?igshid=efqze56p4vgj'>Instagram</a></li>
                  <li><a href='https://www.youtube.com/user/UTTEC100'>YouTube</a></li>
              </ul>
              </p>
            </Panel>
            </div>
    </SplitterPanel>
    <SplitterPanel>
              <div style={{marginLeft:'20px',marginRight:'20px', marginBlockEnd:'20px', marginTop:'20px'}}>
              <Card title="Bienvenido." style={{fontFamily: 'monospace',fontSize:'17px'}}>
              <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                    Te damos la más cordial bienvenida al Portal de la Universidad Tecnológica de Tecámac, Organismo público descentralizado del 
                    Gobierno del Estado de México, institución educativa creada en el año de 1996, con el objetivo de formar técnicos superiores 
                    y profesionales universitarios, aptos para el desarrollo de conocimientos aplicados a la solución creativa de los problemas 
                    del sector productivo y a los requerimientos del crecimiento económico y social que requiere el País.
                    </p>
            </Card>
              </div>
              <div style={{marginLeft:'20px',marginRight:'20px', marginBlockEnd:'20px', marginTop:'20px'}}>
              <Card title="Infraestructura" style={{fontFamily: 'monospace',fontSize:'17px'}}>
              <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                    Ésta división te da la bienvenida, somos encargados del total de practica que se lleva en talleres y laboratorios para que llegues 
                    a tu porcentaje de participación y aprendizaje, ayudamos a que tu estabilidad escolar sea de mejor calidad y en tu desempeño en el 
                    área laboral, sabrás manipular herramientas, tendrás mejora en toma de decisiones y un mejor desarrollo.
                    <p></p>
                    Contamos con los siguientes espacios formativos:
                    <ul>
                      <li>Laboratorios de Cómputo.</li>
                      <li>Cabina de Radio y Set de TV.</li>
                      <li>Almacén General de Herramientas.</li>
                      <li>Talleres Especializados.</li>
                      <li>Almacén Biotecnología.</li>
                      <li>Laboratorios Químicos.</li>
                    </ul>
                    </p>
            </Card>
              </div>
    </SplitterPanel>
    <SplitterPanel>
              <div style={{marginLeft:'20px', marginBlockEnd:'20px', marginTop:'20px'}}>
                <p style={{textAlign:'center', fontFamily: 'monospace', fontSize:'25px'}}>Centro escolar</p>
                <Image src="http://hellodf.com/wp-content/uploads/2016/01/CP_Zacatecas.jpg" alt="Image" width="250" preview />          
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" alt="Image" preview width="250" />
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
              </div>
    </SplitterPanel>
    </Splitter>


    <Splitter style={{ marginLeft:'20px', marginRight:'20px', marginTop:'20px', marginBlockEnd:'20px', borderColor:'dimgray' }}>
            <SplitterPanel>
                <div style={{textAlign:'center'}}>
                    <footer >
                        <p> &copy; My List 2023 - Algunos derechos reservados.</p>
                    </footer>
                </div>
            </SplitterPanel>
        </Splitter>

     </div>
     
   );
 }

export default IndexP
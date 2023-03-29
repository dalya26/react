import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import 'primeicons/primeicons.css';

function MainP() {
    let navigate = useNavigate();
    function navigateTo(string) {
        navigate(string);
    }

    const login = (row) => {
        navigateTo('/login');
    }   

    let start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/1180/1180898.png" style={{ height: '70px', width: '70px', marginLeft: '20px', marginTop: '3px' }}></img>;
    const end = <Button label='Accesar' icon="pi pi-sign-in " className="p-button-rounded outlined p-button-success p-button-text" iconPos="left" style={{marginRight:'20px'}} onClick={() => login()} />;

    return (
        <div>
        <header className="card">
            <Menubar start={start} end={end}/>
        </header>
        <Splitter style={{ marginLeft:'20px', marginRight:'20px',marginTop:'20px', marginBlockEnd:'20px', }}>
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
                  <div style={{marginLeft:'20px',marginRight:'20px', marginBlockEnd:'20px', marginTop:'20px'}}>
                  <Card title="Contraloria Social" style={{fontFamily: 'monospace',fontSize:'17px'}}>
                  <p className="m-0" style={{textAlign:'justify', fontFamily: 'monospace'}}>
                  Es el mecanismo de los beneficiarios, de manera organizada, para verificar el cumplimiento de las metas y la correcta 
                  aplicación de los recursos públicos para los programas de desarrollo social.
                        </p>
                </Card>
                  </div>
        </SplitterPanel>
        <SplitterPanel>
                  <div style={{marginLeft:'20px', marginBlockEnd:'20px', marginTop:'20px'}}>
                    <p style={{textAlign:'center', fontFamily: 'monospace', fontSize:'25px'}}>Centro escolar</p>
                    <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" preview />          
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

export default MainP
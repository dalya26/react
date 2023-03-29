import React, { useEffect, useState, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Card } from 'primereact/card';
import { SlideMenu } from 'primereact/slidemenu';
import { Editor } from 'primereact/editor';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Knob } from 'primereact/knob';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Image } from 'primereact/image';


 function Perfil() {
    const [text, setText] = useState('');
    const [value, setValue] = useState(60);
    const [valuetwo, setValuetwo] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);


   let navigate = useNavigate();
   function navigateTo(string) {
     navigate(string);
   }

   useEffect(() => {
    let _val = valuetwo;

    interval.current = setInterval(() => {
        _val += Math.floor(Math.random() * 10) + 1;

        if (_val >= 100) {
            _val = 100;
            toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
            clearInterval(interval.current);
        }

        setValuetwo(_val);
    }, 2000)

    return () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    };
}, []);

   const out = (row) => {
     navigateTo('/');
   }

   const itemssecond = [
    {
        label:'Usuarios',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'Nuevo',
                icon:'pi pi-fw pi-user-plus',
                command: (event) => {
                    navigateTo('/register')
                  }
            },
            {
                label:'Listas',
                icon:'pi pi-list'
            },
            {
                label:'Historial',
                icon:'pi pi-history'
            },
            {
                label:'Reportes',
                icon:'pi pi-link'
            },
            
        ]
    },
    {
        label:'Eventos',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'Editar',
                icon:'pi pi-fw pi-pencil',
                items:[
                {
                    label:'Guardar',
                    icon:'pi pi-fw pi-calendar-plus'
                }
                ]
            },
            {
                label:'Archivo',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                {
                    label:'Remover',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            }
        ]
    },
    {
        label:'Biblioteca',
        icon:'pi pi-book',
        items:[
            {
                label:'Disponible',
                icon:'pi pi-star'
            },
            {
                label:'Miembros',
                icon:'pi pi-undo'
            },
            {
                label:'Asociado',
                icon:'pi pi-id-card'
            },
            {
                label:'Nuevo',
                icon:'pi pi-pencil'
            },

        ]
    },
    {
        label:'Seguridad',
        icon:'pi pi-shield',
        items:[
            {
                label:'Sanidad',
                icon:'pi pi-check-circle'
            },
            {
                label:'Prevención',
                icon:'pi pi-ban'
            },
            {
                label:'Medidas',
                icon:'pi pi-chart-pie'
            },
            {
                label:'Colaboración',
                icon:'pi pi-external-link'
            },

        ]
    },
    {
        separator:true
    },
    {
        label:'Otros',
        icon:'pi pi-plus-circle',
        items:[
            {
                label:'Config',
                icon:'pi pi-cog'
            },
            {
                label:'Actualizar',
                icon:'pi pi-undo'
            },
            {
                label:'Preguntas',
                icon:'pi pi-question'
            },
            {
                label:'Acerca de',
                icon:'pi pi-exclamation-circle'
            },

        ]
    },
];

   
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
             navigateTo('/gp')
           }
         },
         {
           label: 'Nuevo Grupo',
           icon: 'pi pi-user-plus',
           command: (event) => {
             navigateTo('/gp/ne')
           }
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
   const legendTemplate = (
    <div >
        <span className="pi pi-users"></span>
        <span className="font-bold text-lg" style={{ marginLeft: '8px' }}>Perfil</span>
    </div>
);

   return (
    <div>
    <header className="card">
        <Menubar model={items} start={start} end={end} />
    </header>
    <Splitter style={{ marginLeft:'20px', marginRight:'20px', marginTop:'20px', marginBlockEnd:'20px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
            <Card style={{fontFamily: 'monospace',fontSize:'17px', marginTop:'10px', marginLeft:'10px', marginRight:'10px', borderBlockColor:'black'}}>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <strong className="font-bold" style={{fontFamily:'monospace', fontSize:'20px'}}>Alicia Robledo</strong>
                            <p className="text-sm">Rector</p>
                        </div>
            </Card>
            <Card style={{fontFamily: 'monospace',fontSize:'17px', marginTop:'5px', marginLeft:'5px', marginRight:'5px', borderBlockColor:'black'}}>
                <SlideMenu model={itemssecond} viewportHeight={220} menuWidth={175}></SlideMenu>
            </Card>
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                        <Accordion multiple activeIndex={[0]}>
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
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                <div className="card">
                                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                                </div>
                                <div className="card">
                                    <Toast ref={toast}></Toast>
                                    <ProgressBar value={valuetwo}></ProgressBar>
                                </div>
                            </SplitterPanel>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                <div className="card flex justify-content-center">
                                    <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" />
                                    <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" alt="Image" preview width="250" />
                                </div>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
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

export default Perfil
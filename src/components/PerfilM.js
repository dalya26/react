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


 function PerfilM() {
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
        label:'Eventos',
        icon:'pi pi-fw pi-calendar',
        items:[
            
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
            }

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
        navigateTo('/indexm')
      }
    },
    {
      label: 'Grupos',
      icon: 'pi pi-users',
      command: (event) => {
       navigateTo('/gpo')
      }
    },
    {
      label: 'Estudiantes',
      icon: 'pi pi-user-edit',
      command: (event) => {
        navigateTo('/alum')
      }
    },
    {
      label: 'Materias',
      icon: 'pi pi-book',
      command: (event) => {
        navigateTo('/mat')
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
            navigateTo('/perfilM')
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
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <strong className="font-bold" style={{fontFamily:'monospace', fontSize:'20px'}}>Alberto Morales</strong>
                            <p className="text-sm">Profesor (a)</p>
                        </div>
            </Card>
            <Card style={{fontFamily: 'monospace',fontSize:'17px', marginTop:'5px', marginLeft:'5px', marginRight:'5px', borderBlockColor:'black'}}>
                <SlideMenu model={itemssecond} viewportHeight={220} menuWidth={175}></SlideMenu>
            </Card>
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    
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
                                <p style={{textAlign:'center', fontFamily: 'monospace', fontSize:'25px'}}>Centro escolar</p>
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

export default PerfilM
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Fieldset } from 'primereact/fieldset'; 
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

            <Fieldset style={{ fontSize: '25px', fontFamily: 'monospace', margin:'15px' }} legend="Bienvenido" toggleable>
            <div >
                <div>
                        <span style={{ fontSize: '30px', fontFamily: 'monospace' , marginLeft:'240px'}}>Regla de oro.<p></p>
                            <li style={{ fontSize: '30px', fontFamily: 'monospace', marginLeft: '270px' }}>Si estás 5 minutos antes, estás a tiempo.</li>
                            <li style={{ fontSize: '30px', fontFamily: 'monospace', marginLeft: '270px' }}>Si estás a tiempo, ya estás tarde.</li>
                            <li style={{ fontSize: '30px', fontFamily: 'monospace', marginLeft: '270px' }}>Si estás tarde, ya no estás.</li><br></br>
                            <span style={{ fontSize: '30px', fontFamily: 'monospace', marginLeft: '240px' }}>La puntualidad es el respeto hacia el tiempo de los demás.</span>
                        </span>
                </div>
            </div>
        </Fieldset>
            <div style={{ fontSize: '20px', marginLeft: '450px', fontFamily: 'monospace' }}>
                <footer >
                    <p> &copy; My List 2023 - Algunos derechos reservados.</p>
                </footer>
            </div>
        </div>
            
    );
}

export default MainP
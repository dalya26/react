import React from 'react';
import { Image } from 'primereact/image';

function NotFund() {

    const endpoint = 'http://127.0.0.1:8000/api'

    return(
        <div>
        <div style={{marginTop:'50px', marginRight:'200px', textAlign:'center', fontFamily: 'monospace',fontSize:'60px'}}>
            <Image src="https://cdn-icons-png.flaticon.com/512/6195/6195676.png" alt="Image" width="250" />404 Not fund
            
        </div>
        </div>
    )
}



export default NotFund
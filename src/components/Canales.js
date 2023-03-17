import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './Canales.css';
import Productos from './Productos';


function Canales (){

    return (
        <div className='container-canales'> 
            <div className='canal'>
                <h3>B2B</h3>
                <Productos/>
            </div>
        <div className='canal'>
                <h3>B2C</h3>
                <Productos/>
    </div>
    </div>
    )

}

export default Canales;
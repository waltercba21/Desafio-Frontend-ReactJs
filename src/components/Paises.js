import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import Canales from './Canales';

function Paises() {
  const [paises, setPaises] = useState([]);
  

  useEffect(() => {
    fetch('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
      .then(response => response.json())
      .then(data => setPaises(data.response.assumptionData[0].paises));
      
  }, []);

  return (
    <div>
      <h2>Paises</h2>
      <Tabs defaultActiveKey={0}>
        {paises.map((pais, index) => (
          <Tab key={index} eventKey={index} title={pais.label}>
            
           
          </Tab>
        ))}
      </Tabs>
    </div>
    
  );
}

export default Paises;
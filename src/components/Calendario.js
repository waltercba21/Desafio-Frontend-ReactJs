import React, {useState ,useEffect} from "react";


function Calendario (){

    const [fechas, setFechas] = useState([]);

   useEffect(() => {
    fetch('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
      .then(response => response.json())
      .then(data => {
        setFechas(new Array(data.response.assumptionData[0].productos.length).fill(''));
      });
  }, []);

    const handleFechaChange = (event) => {
        const newFechas = [...fechas];
        newFechas = event.target.value;
        setFechas(newFechas);
      }

    return (
        <div className="fechas-inputs">
            <h5>Fecha</h5>
            <input type="date" value={fechas} onChange={(e) => handleFechaChange(e)} />
          </div> 
        
    );
}

export default Calendario
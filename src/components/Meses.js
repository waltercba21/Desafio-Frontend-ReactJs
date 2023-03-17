import React from "react";

function Meses({preciosMensuales, index}) {
    return (
        <> 
        {preciosMensuales[index].map((precio, i) => (
            <input key={i} type="text" value={precio} readOnly />
          ))}
        <div className="meses-inputs">
            <h5>Meses</h5>
            <input type="text" placeholder="Enero" />
            <input type="text" placeholder="Febrero" />
            <input type="text" placeholder="Marzo" />
            <input type="text" placeholder="Abril" />
            <input type="text" placeholder="Mayo" />
            <input type="text" placeholder="Junio" />
            <input type="text" placeholder="Julio" />
            <input type="text" placeholder="Agosto" />
            <input type="text" placeholder="Septiembre" />
            <input type="text" placeholder="Octubre" />
            <input type="text" placeholder="Noviembre" />
            <input type="text" placeholder="Diciembre" />
          </div>
        </>
    )
}

export default Meses;
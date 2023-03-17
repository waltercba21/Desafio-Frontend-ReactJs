import React, { useState, useEffect } from 'react';
import './Productos.css';
import Meses from './Meses';
import Calendario from './Calendario';

function Productos() {
  //Creamos 4 estados con los que vamos a trabajar.

  //1°: Arreglo que inicializa vacio y va almacenar la info de productos
  const [productos, setProductos] = useState([]);
  //2°: Arreglo que inicializa vacio y va almacenar la info de precios 
  const [precios, setPrecios] = useState([]);
  //3°: Arreglo que inicializa vacio y va almacenar porcentajes aplicados a productos
  const [porcentajes, setPorcentajes] = useState([]);
  //4°: Arreglo que se utilizará para almacenar informacion sobre precios mensuales 
  const [preciosMensuales, setPreciosMensuales] = useState([]);

  //Utilizamos el hook useEffect para realizar una peticion a la API
  useEffect(() => {
    fetch('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
      .then(response => response.json())
      .then(data => {
        //Se actualizan los estados de los componentes utilizando las siguientes funciones 
        // 1° Accedemos a la propiedad 'productos'
        setProductos(data.response.assumptionData[0].productos);
        // 2°Actualizamos estado de los precios y le asignamos nuevo valor
        // el nuevo valor, es un array que lo creamos mediante 'new Array' 
        // la función 'fill()' llena el array con un valor especifico (en este caso la cadena vacia '')
        setPrecios(new Array(data.response.assumptionData[0].productos.length).fill(''));
        // Idem anterior, pero con el porcentaje
        setPorcentajes(new Array(data.response.assumptionData[0].productos.length).fill(''));
        // Asigna nuevo valor 'preciosMensuales',
        // el valor asignado es un array de arrays que contiene los precios mensuales de cada producto.
        // para cada producto se crea un array que contiene el precio final. 
        setPreciosMensuales(data.response.assumptionData[0].productos.map(p => [p.price]));

      });
  }, []);
  // Esta función actualiza el estado de los precios 
    const handlePrecioChange = (event, index) => {
  // Creamos una copia del estado actual de los precios usando el Spread Operator
    const newPrecios = [...precios];
    // Actualizamos el precio correspondiente al índice especificado con el valor del evento
    newPrecios[index] = event.target.value;
    // Actualizamos el estado de precios con la nueva copia que incluye el precio actualizado
    setPrecios(newPrecios);
    // Creamos una copia del estado actual de los precios mensuales usando el operador spread
    const newPreciosMensuales = [...preciosMensuales];
    // Actualizamos los precios mensuales correspondientes al índice especificado con el precio actualizado
    newPreciosMensuales[index] = newPreciosMensuales[index].map(p => newPrecios[index]);
    setPreciosMensuales(newPreciosMensuales);
  }

const handlePorcentajeChange = (event, index) => {
    const newPorcentajes = [...porcentajes];
    newPorcentajes[index] = event.target.value;
    setPorcentajes(newPorcentajes);

  // Copia el estado actual de preciosMensuales en una nueva variable newPreciosMensuales
  const newPreciosMensuales = [...preciosMensuales];
  // Asigna el precio actual del producto seleccionado a la variable precioActual
    let precioActual = productos[index].price;
  // Recorre los precios mensuales del producto seleccionado
    for (let i = 0; i < newPreciosMensuales[index].length; i++) {
  // Asigna el precio actual del producto en el mes correspondiente
      newPreciosMensuales[index][i] = precioActual;
  // Calcula el nuevo precio para el siguiente mes con base en el porcentaje de aumento
  precioActual += precioActual * (newPorcentajes[index] / 100);
  }
  setPreciosMensuales(newPreciosMensuales); 
}

  return (
    <div className='contenedor-producto'>
      <h1>Producto</h1>
      {productos.map((producto, index) => (
        <div key={index}>
          
          <label className='producto'>{producto.name}</label>

          <input type="text" value={precios[index]} onChange={(e) => handlePrecioChange(e, index)} placeholder="Precio" />
          <input type="text" value={porcentajes[index]} onChange={(e) => handlePorcentajeChange(e, index)} placeholder="Porcentaje %" />

          <Calendario />

          <Meses preciosMensuales={preciosMensuales} index={index} />

        </div>
      ))}
    </div>
  );
}

export default Productos;
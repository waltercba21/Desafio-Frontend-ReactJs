import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Paises from './components/Paises';
import Canales from './components/Canales';


//Hacemos un fetch para capturar la info de la API proporcionada junto al ID de usuario
//Hacemos una solicitud GET 
fetch('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
  //Convertimos la promesa en formato JSON asi nos devuelve un objeto 
  .then (response => response.json())
  //registra los datos del JSON para mostrarlos por consola
  .then (data => console.log (data))
  // Si se produce un error utilizamos el metodo catch   .catch (error => console.log (error))


function App (){ 
  return (
    //Creamos componentes para un codigo mas prolijo y reutilizable
  <>
  <Navbar brand={'Carga de Productos y Servicios'}/>
  <Paises/>
    <Canales/>
    
  </>
  )
  
}

export default App;
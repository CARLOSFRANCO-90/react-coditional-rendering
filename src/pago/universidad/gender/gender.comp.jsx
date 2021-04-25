import React from 'react';
import Programmans from '../programmans/programmans.comp';
import Students from '../students/students.comp';

import './gender.style.css';

const Gender = () => {
    return (
      
      
      <div className= "gender-container">

        <p className="titulo">Students</p>  <p className="titulo titulo-course">Grades</p>   <p className="titulo titulo-gender">Gender</p>
        
        <Programmans programmansName="Programacion"/>
        
        <Students student={{
          Estudiante: "Camila",
          nota: 4,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Mauricio",
          nota: 5,
          stock: 3,
          genero: "male"
        }}/>

            <Students student={{
          Estudiante: "Martin",
          nota: 0,
          stock: 0,
          genero: "male"
        }}/>

<Students student={{
          Estudiante: "Melani",
          nota: 4,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Cristian",
          nota: 0,
          stock: 3,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Sofia",
          nota: 4,
          stock: 0,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Manu",
          nota: 3,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Jose",
          nota: 1,
          stock: 3,
          genero: "male"
        }}/>

        <p className="titulo">Students</p>  <p className="titulo titulo-course">Grades</p>   <p className="titulo titulo-gender">Gender</p>
        <Programmans programmansName="Matematicas"/>

        <Students student={{
          Estudiante: "Carlos",
          nota: 4,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Pepe",
          nota: 5,
          stock: 3,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Julian",
          nota: 3,
          stock: 0,
          genero: "male"
        }}/>

        <p className="titulo">Students</p>  <p className="titulo titulo-course">Grades</p>   <p className="titulo titulo-gender">Gender</p>
        <Programmans programmansName="Base de Datos"/>

        <Students student={{
          Estudiante: "Kate",
          nota: 5,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Yei",
          nota: 0,
          stock: 3,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Lina",
          nota: 3,
          stock: 0,
          genero: "female"
        }}/>

        <p className="titulo">Students</p>  <p className="titulo titulo-course">Grades</p>   <p className="titulo titulo-gender">Gender</p>
        <Programmans programmansName="Microcontroladores"/>

        <Students student={{
          Estudiante: "Yesi",
          nota: 4,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Maicol",
          nota: 0,
          stock: 3,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Marce",
          nota: 4,
          stock: 0,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Tatiana",
          nota: 3,
          genero: "female"
        }}/>

        <Students student={{
          Estudiante: "Jhon",
          nota: 1,
          stock: 3,
          genero: "male"
        }}/>

        <Students student={{
          Estudiante: "Amanda",
          nota: 4,
          stock: 0,
          genero: "female"
        }}/>
        
      </div>   
      
   );
}

export default Gender;
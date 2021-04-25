import React from 'react';

import './students.style.css';
import mujer from './mujer.jpeg'; 
import hombre from './hombre.jpeg';

const Students = (props) => {
    return (
      <div className="students-container">
         {props.student.Estudiante} 
         {
            props.student.nota <3
            ?
               <span className="nota-reprobada valor-nota">{props.student.nota}</span>

            :
               <span className="valor-nota">{props.student.nota}</span>
         }

         <span className="genero">
            {props.student.genero}
            { 
               props.student.genero ==="female"
               ?
               <img src={mujer} className="Imagen"/>
               :
               <img src={hombre} className="Imagen"/>

            }
         </span>
      </div> 
   );
}

export default Students;
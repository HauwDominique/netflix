import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './list.css';


function List(props) {

   return (

    <div className="col-2 listComponent">
       <NavLink className="nav-link" to={"detail/"+props.type+"/"+props.movie.id}> <span className="sr-only">(current)</span>
         <img src={"https://image.tmdb.org/t/p/w500" +props.movie.poster_path} className="w-100" alt={props.movie.title}/>
         <div className="listComponent">
               {props.movie.title}
         </div>
       </NavLink>
    </div>

   );
}

export default List;
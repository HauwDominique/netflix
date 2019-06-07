import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">primeVideo</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/series">Séries</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">Film</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/kids">Enfants</NavLink>
                </li>
            </ul>
        </div>
        </nav>    );

   }

export default Navbar;


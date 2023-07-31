import React, { useState } from 'react';
import styles from "./HomeSearchBar.module.css";
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


export const HomeSearchBar = (props) => {

    const id = useSelector((state) => state.idUser)

    const company = `http://localhost:3001/companies/${id}`

    const navigate = useNavigate();

    const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = (event) => {
        navigate(`/${props.url}/${input}`);
    }

    const isCompanyRoute = location.pathname === '/home/company';

    let path = "";



    if(company.plan === "PENDIENTE"){
        path = "/company/plans"
        // Tostify con "Debe Seleccionar un Plan"
    } else (
        path = "/company/create"
    )

    return (
        <div className={styles.container}>
            <div className={styles.searchBarContainer}>
                <input value={input} onChange={handleChange} type='search' className={styles.input} placeholder="Búsqueda..." />
                <button onClick={handleClick} className={styles.searchButton} disabled={!input.length}>
                    Search
                </button>
            </div>
            <div>         
            {isCompanyRoute && (
                <div>
                    <NavLink to={path}>
                        <button >Crear Evento</button>
                    </NavLink>
                </div>
            )}
            </div>
        </div>
    );
}

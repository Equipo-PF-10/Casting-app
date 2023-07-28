import React, { useState } from 'react';
import styles from "./HomeSearchBar.module.css";
import { useNavigate, NavLink } from 'react-router-dom';

export const HomeSearchBar = (props) => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = (event) => {
        navigate(`/${props.url}/${input}`);
    }
   
    return (
        <div className={styles.container}>
            <div className={styles.searchBarContainer}>
                <input value={input} onChange={handleChange} type='search' className={styles.input} placeholder="Búsqueda..." />
                <button onClick={handleClick} className={styles.searchButton} disabled={!input.length}>
                    Search
                </button>
            </div>
            <div>
                <NavLink to="/company/create">
                    <button>Crear Evento</button>
                </NavLink>
            </div>
            
            
        </div>
    );
}

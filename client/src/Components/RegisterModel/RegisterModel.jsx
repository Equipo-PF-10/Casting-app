


import React from "react";
import styles from "./RegisterModel.module.css";

//1. Cree nuevo componente Register Model

export default function RegisterModel() {
    return (
        <div className={styles.grid}>
            <div className={styles.div1}>
                <div className={styles.div1_1}><h1>Logo</h1></div>
                <div className={styles.div1_2}> 
                    <h3>Servicios</h3>
                    <h3>About</h3>
                    <h3>Contacto</h3>
                    <h3>Ingresa</h3>
                </div>
            </div>
            <div className={styles.div2}>2</div>
            <div className={styles.div3}>3</div>

        </div>
    )
}


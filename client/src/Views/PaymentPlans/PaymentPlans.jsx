import React from "react";
import styles from "./PaymentPlans.module.css";

export default function PaymentPlans () {
    return (
        <div>
            <div className={styles.topSection}>
                <div>LogoSVG</div>
                <div><h3>Escoge uno de nuestros planes para empresas</h3></div>
            </div>
            <div className={styles.middleSection}>
                {/* Puedo usar flex aqui para alinear */}
            </div>
            <div className={styles.text}>
                <h2>Palenes</h2>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.card}>

                </div>
                <div className={styles.card}>

                </div>
                <div className={styles.card}>
                    {/* El boton debe estar dentro del div, no afuera */}
                </div>
            </div>
        </div>
    )
}
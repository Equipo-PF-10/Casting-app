import React from "react";
import styles from "./CardMP.module.css";
import mpLogo from "../../../assets/PNG/Mercado-Pago-Logo 1.png";

 
export default function CardMP (props) {
    const {text_card_mp} = props;
    return (
        <div>
           <div className={styles.card}>
                <div>
                    <img style={{ width: '200px'}} src={mpLogo} alt="Mercado Pago" />
                </div>
                <hr />
                <p>
                {text_card_mp.text}
                </p>
                <button>Pagar</button>
            </div> 
        </div>
    )
}
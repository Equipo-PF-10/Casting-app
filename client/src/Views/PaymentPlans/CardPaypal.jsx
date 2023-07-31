import React from "react";
import styles from "./CardPaypal.module.css";
import paypalLogo from "../../../assets/PNG/paypal.png";
import { useNavigate } from 'react-router-dom';
 
export default function CardPaypal (props) {
    const navigate = useNavigate();
    const {text_card_paypal} = props;
    return (
        <div>
           <div className={styles.card}>
                <div>
                    <img style={{ width: '180px'}} src={paypalLogo} alt="Paypal" />
                </div>
                <hr />
                <p>
                {text_card_paypal.text}
                </p>
                <button onClick={() => window.location.replace(`${window.location.href}/paypal`)}>Pagar</button>
            </div> 
        </div>
    )
}
// import styles from './PaypalPayment.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const paymentCompleted = (props) => {
    const navigate = useNavigate();
	return (
        <div>
            <h1>{props.type === pro ? "Bienvenido a PRO!" : "Bienvenido a Premium!"}</h1>
            <h3>¡Agradecemos tu preferencia!</h3>
            <h3>Haz click en continuar para comenzar a aprovechar los beneficios de tu nuevo plan!</h3>
            <button>Continuar</button>
        </div>
    );
}

export default paymentCompleted;
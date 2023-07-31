// import styles from './PaypalPayment.module.css';
import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaypalPayments = (props) => {
    const navigate = useNavigate();
	console.log(props.plan_id);
	return (
        <PayPalButtons
		    createSubscription={(data, actions) => {
			    return actions.subscription
				    .create({
					    plan_id: props.plan_id,
				    })
				    // .then((orderId) => {
					//     console.log(orderId);
					//     return orderId;
				    // });
		    }}
            onApprove={(data, actions) => {
				// const details = await actions.subscription.capture();
				// const name = details.payer.name.given_name;
				
                navigate("/home/company");
                alert("Suscripción completada con éxito! Gracias! ");
			}}
	    />
    );
}

export default PaypalPayments;
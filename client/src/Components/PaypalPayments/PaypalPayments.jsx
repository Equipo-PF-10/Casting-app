// import styles from './PaypalPayment.module.css';
import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayments = (props) => {
	console.log(props.plan_id);
	return (
        <PayPalButtons
		    createSubscription={(data, actions) => {
			    return actions.subscription
				    .create({
					    plan_id: props.plan_id,
				    })
				    .then((orderId) => {
					    console.log(orderId);
					    return orderId;
				    });
		    }}
	    />
    );
}

export default PaypalPayment;
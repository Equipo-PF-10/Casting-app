// import styles from './PaypalPayment.module.css';
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { update_plan } from "../../redux/actions";
import axios from "axios";


const PaypalPayments = (props) => {
  console.log(props.subs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id_company = localStorage.getItem("user_id");
  let PLAN_TYPE = "";
  if (props.subs === "pro") PLAN_TYPE = "PREMIUM";
  else if (props.subs === "premium") PLAN_TYPE = "BASICO";
  return (
    <PayPalButtons
      createSubscription={(data, actions) => {
        return actions.subscription.create({
          plan_id: props.plan_id,
        });
        // .then((orderId) => {
        //     console.log(orderId);
        //     return orderId;
        // });
      }}
      onApprove={(data, actions) => {
        // const details = await actions.subscription.capture();
        // const name = details.payer.name.given_name;
        dispatch(update_plan(id_company, PLAN_TYPE));

        if (PLAN_TYPE === "PREMIUM") {
          axios
            .post(
              `http://localhost:3001/email/suscriptionPremium/${localStorage.getItem("user_email")}`)
            .then((resp) => console.log(resp.data))
            .catch((error) => console.log(error));
        } else if (PLAN_TYPE === "BASICO") {
          axios
            .post(`http://localhost:3001/email/suscriptionPro/${localStorage.getItem("user_email")}`)
            .then((resp) => console.log(resp.data))
            .catch((error) => console.log(error));
        } else {
			console.log("Tipo de suscripción inválido:", PLAN_TYPE);
		}


    if (PLAN_TYPE === "PREMIUM") {
      axios.post('http://localhost:3001/payments', {
        paymentId: data.subscriptionID,
        planType: "PRO",
        price: 200.00,
        taxes: 7.47,
        CompanyId: localStorage.getItem("user_id")
      })
        .then((resp) => console.log(resp.data))
        .catch((error) => console.log(error));
    } else if (PLAN_TYPE === "BASICO") {
      axios.post('http://localhost:3001/payments', {
        paymentId: data.subscriptionID,
        planType: "PREMIUM",
        price: 100.00,
        taxes: 3.98,
        CompanyId: localStorage.getItem("user_id")
      })
        .then((resp) => console.log(resp.data))
        .catch((error) => console.log(error));
    }
        navigate("/home/company");
        // alert("Suscripción completada con éxito! Gracias! ");
      }}
    />
  );
};

export default PaypalPayments;

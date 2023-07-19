import styles from "./RegisterModel.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validationInputs from "./validationInputs";
import validationSend from "./validationSend";
import { register_model } from "../../redux/actions";

export default function RegisterModel() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [disable, setDisable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  // Este useEffect valida los campos en tiempo real
  useEffect(() => {
    setErrors(validationInputs(input));
  }, [input]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  //Funcion que despacha el input y luego lo setea
  function handleSubmit(event) {
    try {
      event.preventDefault();

      dispatch(register_model(input));
      setInput({
        name: "",
        email: "",
        password: "",
      });
      setIsChecked(false);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Este useEffect controla que el boton "Enviar" se habilite o no
  useEffect(() => {
    let errExists = validationSend(errors, isChecked);
    !errExists ? setDisable(true) : setDisable(false);
  }, [errors, isChecked]);

  return (
    <div className={styles.container}>
      <div className={styles.imagenRegister}>
        <svg
          width="460"
          height="450"
          viewBox="0 0 46 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_18_218)">
            <path
              d="M35.6829 9.85306L36.0336 12.1846L34.2852 12.8089L34.5024 10.3196L35.6829 9.85306Z"
              fill="#A0616A"
            />
            <path
              d="M46 58.1171C46 58.1904 45.9535 58.2492 45.8957 58.2492H0.104333C0.0464709 58.2492 7.16201e-07 58.1904 7.16201e-07 58.1171C7.16201e-07 58.0438 0.0464709 57.985 0.104333 57.985H45.8957C45.9535 57.985 46 58.0438 46 58.1171Z"
              fill="#3F3D56"
            />
            <path
              d="M14.7847 26.459H32.8165C34.8614 26.459 36.519 28.5582 36.519 31.1477V53.2903C36.519 55.8798 34.8614 57.979 32.8165 57.979H14.7847C12.7399 57.979 11.0822 55.8798 11.0822 53.2903V31.1477C11.0822 28.5582 12.7399 26.459 14.7847 26.459Z"
              fill="white"
            />
            <path
              d="M14.7847 58.09H32.8165C34.9064 58.09 36.6067 55.9369 36.6067 53.2903V31.1477C36.6067 28.5011 34.9064 26.348 32.8165 26.348H14.7847C12.6948 26.348 10.9945 28.5011 10.9945 31.1477V53.2903C10.9945 55.9369 12.6948 58.09 14.7847 58.09ZM32.8165 26.57C34.8098 26.57 36.4313 28.6235 36.4313 31.1477V53.2903C36.4313 55.8145 34.8098 57.868 32.8165 57.868H14.7847C12.7915 57.868 11.1699 55.8145 11.1699 53.2903V31.1477C11.1699 28.6235 12.7915 26.57 14.7847 26.57L32.8165 26.57Z"
              fill="#3F3D56"
            />
            <path
              d="M13.4785 36.0586H20.7264C21.0338 36.0586 21.2839 35.7419 21.2839 35.3526C21.2839 34.9633 21.0338 34.6465 20.7264 34.6465H13.4785C13.1711 34.6465 12.921 34.9633 12.921 35.3526C12.921 35.7419 13.1711 36.0586 13.4785 36.0586Z"
              fill="#9EEDEF"
            />
            <path
              d="M20.278 41.6108H27.3232C27.5008 41.6108 27.6453 41.4278 27.6453 41.2029C27.6453 40.9779 27.5008 40.795 27.3232 40.795H20.278C20.1004 40.795 19.9559 40.9779 19.9559 41.2029C19.9559 41.4278 20.1004 41.6108 20.278 41.6108Z"
              fill="#9EEDEF"
            />
            <path
              d="M30.2357 27.9754H34.258C34.273 27.9754 34.2852 27.9908 34.2852 28.0098V28.6028C34.2852 28.6219 34.273 28.6373 34.258 28.6373H30.2357C30.2207 28.6373 30.2085 28.6219 30.2085 28.6028V28.0098C30.2085 27.9908 30.2207 27.9754 30.2357 27.9754Z"
              fill="#9EEDEF"
            />
            <path
              d="M16.6873 28.6373C16.4564 28.6373 16.2692 28.4002 16.2692 28.1078C16.2692 27.8153 16.4564 27.5783 16.6873 27.5783C16.9183 27.5783 17.1055 27.8153 17.1055 28.1078C17.1055 28.4002 16.9183 28.6373 16.6873 28.6373Z"
              fill="#3F3D56"
            />
            <path
              d="M15.5375 28.6373C15.3066 28.6373 15.1194 28.4002 15.1194 28.1078C15.1194 27.8153 15.3066 27.5783 15.5375 27.5783C15.7684 27.5783 15.9556 27.8153 15.9556 28.1078C15.9556 28.4002 15.7684 28.6373 15.5375 28.6373Z"
              fill="#3F3D56"
            />
            <path
              d="M14.3877 28.6373C14.1568 28.6373 13.9696 28.4002 13.9696 28.1078C13.9696 27.8153 14.1568 27.5783 14.3877 27.5783C14.6186 27.5783 14.8058 27.8153 14.8058 28.1078C14.8058 28.4002 14.6186 28.6373 14.3877 28.6373Z"
              fill="#3F3D56"
            />
            <path
              d="M32.8604 43.7944C32.8604 43.8677 32.814 43.9266 32.7561 43.9266H14.8451C14.7873 43.9266 14.7408 43.8677 14.7408 43.7944C14.7408 43.7212 14.7873 43.6623 14.8451 43.6623H32.7561C32.814 43.6623 32.8604 43.7212 32.8604 43.7944Z"
              fill="#3F3D56"
            />
            <path
              d="M27.3979 11.2046C27.0166 10.8056 26.545 10.7314 26.3445 11.0387C26.144 11.3461 26.2906 11.9186 26.6721 12.3176C26.8228 12.4797 27.0019 12.5937 27.1945 12.6501L28.827 14.3149L29.4275 13.3281L27.7544 11.7917C27.6743 11.5628 27.5521 11.3615 27.3979 11.2046Z"
              fill="#A0616A"
            />
            <path
              d="M36.8334 14.9607C36.8343 14.8871 36.8337 14.2449 36.4583 13.839C36.027 13.3728 35.4185 13.5615 35.2051 13.6277C34.712 13.7806 34.6716 14.0484 34.2085 14.3236C33.3423 14.8385 34.4277 14.575 33.9122 14.4099C33.7338 14.3527 31.167 14.1273 30.528 13.6293C29.2854 12.6607 28.4387 12.0734 28.4387 12.0734L27.8852 13.4753C27.8852 13.4753 28.6855 14.8846 29.812 15.9287C30.9675 16.9997 31.5452 17.5351 32.4232 17.742C32.4988 17.7599 34.3584 18.1619 35.8561 16.7449C36.1977 16.4217 36.8237 15.8295 36.8334 14.9607Z"
              fill="#E6E6E6"
            />
            <path
              d="M35.1164 11.3954C34.0515 11.3954 33.1883 10.3022 33.1883 8.95361C33.1883 7.60504 34.0515 6.51181 35.1164 6.51181C36.1813 6.51181 37.0446 7.60504 37.0446 8.95361C37.0446 10.3022 36.1813 11.3954 35.1164 11.3954Z"
              fill="#A0616A"
            />
            <path
              d="M20.0156 25.3586L22.0014 22.7845L23.0264 24.1386L21.547 26.6067L20.0795 26.8192L20.0156 25.3586Z"
              fill="#A0616A"
            />
            <path
              d="M31.3544 20.5316C31.2383 20.5438 30.8692 20.6374 30.5164 20.3916C30.2756 20.2239 30.1521 19.9744 30.1104 19.8951C29.593 18.9111 27.6071 17.3765 25.8248 17.2821C25.4212 17.2607 25.1556 17.3199 24.9141 17.4793C24.5717 17.7053 24.435 18.0291 24.0005 18.7875C23.7628 19.2024 23.4998 19.5933 23.2593 20.0055C21.8511 22.4188 21.3172 22.6083 21.3718 23.382C21.4323 24.2404 22.1634 25.0548 22.6493 24.9608C22.8483 24.9223 22.9254 24.7471 23.1912 24.3924C23.9707 23.3523 24.2933 23.5444 24.8482 22.7478C25.4962 21.8177 25.4114 21.0465 25.7494 21.0167C26.0629 20.9891 26.1962 21.647 26.8654 22.521C27.1717 22.9209 27.3898 23.1043 28.0542 23.688C30.6415 25.9611 30.6828 26.1208 31.2049 26.3021C31.4334 26.3814 33.0548 26.9444 33.6324 26.0485C34.5363 24.6466 32.401 20.4214 31.3544 20.5316Z"
              fill="#2F2E41"
            />
            <path
              d="M20.6227 25.9403C20.4766 25.8572 20.3059 25.7601 20.2509 25.5368C20.2138 25.3857 20.2352 25.1994 20.312 25.0707C20.4007 24.9221 20.5319 24.9026 20.5266 24.8763C20.5185 24.8363 20.2082 24.8519 19.8675 25.0044C19.8033 25.0332 19.512 25.1679 19.1416 25.5342C18.8448 25.8276 18.8847 25.8865 18.6986 26.0556C18.1273 26.575 17.5914 26.1657 17.2823 26.6528C17.163 26.8407 17.1121 27.1076 17.1623 27.3234C17.2631 27.7568 17.7535 27.9059 18.0215 27.9829C18.6669 28.1684 19.1554 28.017 19.6655 27.9081C21.4003 27.5379 22.375 27.8751 22.5054 27.3661C22.5301 27.2698 22.49 27.278 22.3562 26.5711C22.2242 25.8735 22.2286 25.6819 22.1161 25.626C21.9469 25.5419 21.8332 25.9244 21.4069 26.0554C21.0291 26.1714 20.7173 25.9941 20.6227 25.9403Z"
              fill="#2F2E41"
            />
            <path
              d="M23.546 33.7795L24.0477 30.2374L25.4963 30.6289L25.3665 33.7232L24.2465 34.9427L23.546 33.7795Z"
              fill="#A0616A"
            />
            <path
              d="M30.7879 21.7221C30.6972 21.8148 30.4333 22.1548 30.0324 22.2023C29.7588 22.2347 29.546 22.1161 29.4763 22.0801C28.6118 21.6338 26.2882 21.7762 24.7715 22.9655C24.4281 23.2348 24.2345 23.4728 24.1054 23.7764C23.9223 24.2069 23.9527 24.572 23.9295 25.5085C23.9168 26.0208 23.8725 26.5313 23.8563 27.0434C23.7612 30.0417 23.4034 30.5781 23.7917 31.1795C24.2224 31.8468 25.1885 32.0008 25.5488 31.5775C25.6964 31.4041 25.6825 31.2043 25.7452 30.7217C25.929 29.3068 26.2811 29.2365 26.3871 28.1826C26.5108 26.9522 26.0986 26.3744 26.3652 26.1094C26.6123 25.8636 27.0143 26.3132 27.9556 26.5604C28.3863 26.6736 28.6481 26.6703 29.4567 26.6808C32.6055 26.7218 32.7105 26.8246 33.223 26.6033C33.4472 26.5065 35.0385 25.8192 35.1192 24.6672C35.2454 22.8644 31.605 20.8868 30.7879 21.7221Z"
              fill="#2F2E41"
            />
            <path
              d="M24.3062 33.8291C24.1486 33.8642 23.9642 33.9053 23.8197 33.7596C23.722 33.661 23.6571 33.4916 23.6636 33.3305C23.6711 33.1445 23.771 33.035 23.7549 33.017C23.7305 32.9896 23.4806 33.2233 23.2664 33.5917C23.226 33.6612 23.0447 33.9798 22.9006 34.5463C22.7851 35.0002 22.8443 35.0204 22.7653 35.2928C22.5229 36.1288 21.898 36.1712 21.8581 36.794C21.8428 37.0344 21.919 37.2914 22.0562 37.4343C22.3318 37.7212 22.8037 37.4959 23.0596 37.369C23.6759 37.0635 24.013 36.5908 24.3868 36.138C25.6581 34.5981 26.6141 34.184 26.4964 33.6701C26.4741 33.5728 26.4445 33.6081 26.0204 33.1183C25.6018 32.6349 25.5204 32.4733 25.4026 32.507C25.2253 32.5578 25.3009 32.9551 25.0062 33.3666C24.745 33.7313 24.4084 33.8063 24.3062 33.8291Z"
              fill="#2F2E41"
            />
            <path
              d="M34.8536 9.42041C34.7785 9.08036 34.8728 8.95644 34.7767 8.80381C34.7767 8.8038 34.738 8.74238 34.3923 8.57664C34.4943 7.82715 34.4179 7.70042 34.4179 7.70041C34.3299 7.55435 34.1536 7.51904 34.0335 7.53815C33.7796 7.57856 33.7347 7.8692 33.5722 7.86268C33.3478 7.85367 33.0787 7.2848 33.1622 6.79174C33.2304 6.38954 33.5242 6.09086 33.5979 6.14268C33.6709 6.19407 33.9338 5.96747 34.0335 6.01287C34.1016 6.04388 34.4221 6.00263 34.4948 6.04533C34.5741 6.09196 34.8014 6.38228 34.8232 6.3457C34.9742 6.0915 34.971 6.00275 35.0586 5.94797C35.2138 5.85089 35.3826 6.03032 35.6736 6.20759C36.2724 6.57233 36.4477 6.35476 36.7243 6.66193C36.864 6.8171 36.9389 7.11365 37.0831 7.70041C37.2846 8.521 37.3854 8.93129 37.2881 9.32305C37.1888 9.72257 37.0426 9.63561 36.8268 10.1993C36.5866 10.8267 36.6694 11.1914 36.4424 11.3351C36.267 11.4462 35.9851 11.3755 35.8786 11.1729C35.6964 10.8259 36.1674 10.3566 36.0067 9.80984C35.9081 9.47422 35.6039 9.21973 35.4173 9.2906C35.2064 9.37072 35.1909 9.8497 35.0586 9.84229C34.9453 9.83595 34.8666 9.47966 34.8536 9.42041Z"
              fill="#2F2E41"
            />
            <path
              d="M36.3143 11.757C35.9197 11.1967 34.3125 11.7766 34.1616 12.6657C34.0996 13.0314 34.3287 13.1858 34.2641 13.6068C34.1698 14.2226 33.6356 14.1807 33.2391 14.8076C32.6762 15.6976 33.2561 16.5676 32.6241 18.0528C32.489 18.3702 32.3752 18.6377 32.1371 18.8966C31.591 19.4907 31.0827 19.2869 30.8046 19.8377C30.5966 20.2496 30.682 20.7573 30.7021 20.8762C30.7841 21.3639 31.0066 21.4827 31.1633 21.8822C31.4241 22.547 31.1289 23.0351 31.1121 23.8294C31.0911 24.8232 31.5081 26.2008 32.3422 26.6528C33.2791 27.1606 34.4092 26.3196 34.9561 25.4845C35.2824 24.9862 35.3771 24.5266 35.5198 23.9592C36.1578 21.4236 36.5183 21.653 37.0062 19.643C37.5639 17.3453 37.6736 14.6533 37.0062 13.8015C36.9177 13.6886 36.6743 13.4277 36.5193 12.9578C36.3107 12.3254 36.4909 12.0078 36.3143 11.757Z"
              fill="#E6E6E6"
            />
            <path
              d="M30.484 24.7991C30.1781 25.2913 30.1307 25.8902 30.3781 26.1367C30.6255 26.3832 31.0739 26.184 31.3799 25.6915C31.5043 25.4969 31.59 25.2675 31.63 25.0223L32.9054 22.916L32.2463 22.2794L30.939 24.3338C30.7602 24.4407 30.6042 24.6002 30.484 24.7991Z"
              fill="#A0616A"
            />
            <path
              d="M35.1549 13.8922C35.0982 13.8761 34.6016 13.7458 34.2113 14.1284C33.7628 14.5679 33.7845 15.3608 33.7922 15.6389C33.8097 16.2814 34.0086 16.3862 34.1268 17.0163C34.3481 18.1953 33.9267 19.291 33.6939 19.8963C33.6133 20.1059 33.3544 20.747 32.8391 21.4375C31.8368 22.7804 30.9425 23.4871 30.9425 23.4871L31.9032 24.5685C31.9032 24.5685 33.4335 23.9779 34.4705 22.7944C35.5342 21.5804 37.1699 17.2853 37.509 16.239C37.5382 16.1489 37.1246 17.6138 36.3348 15.4679C36.1546 14.9784 35.8245 14.0816 35.1549 13.8922Z"
              fill="#E6E6E6"
            />
            <path
              d="M21.9821 46.819C22.5928 46.9376 23.0395 47.4326 22.9798 47.9248C22.9202 48.4169 22.3769 48.7196 21.766 48.601C21.5215 48.5578 21.2887 48.4411 21.0871 48.2606L18.5047 47.717L18.677 46.4244L21.2536 46.8861C21.4887 46.7904 21.7385 46.7674 21.9821 46.819Z"
              fill="#FFB6B6"
            />
            <path
              d="M10.8541 42.7897L11.8554 45.4804L16.8892 47.6264L21.0662 47.9086L21.1708 46.6381L16.6439 45.4394L11.9987 42.6595L10.8541 42.7897Z"
              fill="#E6E6E6"
            />
            <path
              d="M20.1383 53.0066L21.0372 55.8861L22.2006 54.8816L21.5132 51.8681L20.1383 53.0066Z"
              fill="#FFB6B6"
            />
            <path
              d="M23.8928 51.9351L26.2725 54.8147L25.3206 56.0871L22.8881 53.6762L23.8928 51.9351Z"
              fill="#FFB6B6"
            />
            <path
              d="M10.4081 42.5597L10.4345 42.3253L11.0427 40.8185L13.0522 41.4882L12.682 43.5642L10.4081 42.5597Z"
              fill="#FFB6B6"
            />
            <path
              d="M11.2542 52.6048L11.1924 53.6106C11.1924 53.6106 10.9369 57.8282 12.9993 58.1631C15.0616 58.4979 15.9606 58.8327 17.1769 56.221L19.0806 51.9351L20.1926 53.6106L21.6718 52.136C21.6718 52.136 20.6142 46.9125 19.7681 46.7116C19.6623 46.6865 19.5566 46.674 19.4524 46.6712C18.752 46.6527 18.0917 47.0866 17.6726 47.7976L15.2732 51.8681L14.4006 51.3659L11.2542 52.6048Z"
              fill="#2F2E41"
            />
            <path
              d="M22.6766 55.7522L22.2006 54.6138L20.8257 55.8192C20.8257 55.8192 20.5084 57.2925 20.9844 57.4934C21.4603 57.6943 22.7823 57.4264 22.7823 57.4264C22.7823 57.4264 25.2149 58.0961 25.2677 57.4934C25.3206 56.8907 24.1572 56.7567 24.1572 56.7567L22.6766 55.7522Z"
              fill="#2F2E41"
            />
            <path
              d="M17.4942 54.9486L21.1694 52.016L23.0467 54.145L24.3159 52.2699C24.3159 52.2699 21.9891 47.9171 21.3016 47.7162C20.6142 47.5153 19.5037 47.3813 19.5037 47.3813L16.1193 51.3324L17.4942 54.9486Z"
              fill="#2F2E41"
            />
            <path
              d="M26.3254 54.5468L25.1091 56.221L25.2695 56.3947C25.2695 56.3947 25.585 58.1351 26.3254 57.5464C27.0657 56.9576 27.1186 56.8237 27.1186 56.8237C27.1186 56.8237 29.2338 57.4264 29.4454 56.3549C29.6569 55.2835 29.0752 55.4844 29.0752 55.4844L28.547 55.8862L26.3254 54.5468Z"
              fill="#2F2E41"
            />
            <path
              d="M12.4176 42.2248C11.483 42.2248 10.7254 41.2654 10.7254 40.0819C10.7254 38.8983 11.483 37.9389 12.4176 37.9389C13.3522 37.9389 14.1098 38.8983 14.1098 40.0819C14.1098 41.2654 13.3522 42.2248 12.4176 42.2248Z"
              fill="#FFB6B6"
            />
            <path
              d="M12.8142 43.1289L10.3816 42.1913C10.3816 42.1913 9.42978 45.004 9.58843 46.2764C9.74707 47.5487 11.1924 53.6106 11.1924 53.6106L14.4006 51.3659C14.4006 51.3659 14.4535 50.0265 14.6121 49.4238C14.7708 48.8211 15.2732 46.9795 14.1627 45.4393C13.0522 43.899 12.8142 43.1289 12.8142 43.1289Z"
              fill="#E6E6E6"
            />
            <path
              d="M18.1681 57.1908C18.5639 57.7914 18.6401 58.5369 18.3382 58.8559C18.0364 59.1749 17.4708 58.9466 17.0749 58.3457C16.9141 58.1084 16.8005 57.8258 16.7437 57.5215L15.0917 54.9499L15.8964 54.1252L17.5868 56.6306C17.8131 56.7558 18.0124 56.9479 18.1681 57.1908Z"
              fill="#FFB6B6"
            />
            <path
              d="M10.9483 44.4799L10.3734 47.364L13.1874 53.0685L16.0602 56.7248L16.9913 55.7466L14.0941 51.1815L11.898 45.2995L10.9483 44.4799Z"
              fill="#E6E6E6"
            />
            <path
              d="M13.9776 39.7135C13.5436 39.7122 13.519 39.7159 13.4488 39.7135C12.9105 39.6956 12.7697 39.4274 12.4969 39.4457C12.0099 39.4783 12.6527 42.5701 12.92 43.9995C13.1821 45.4013 12.2962 46.6574 12.2325 46.7451C11.3333 47.9836 9.75371 48.2101 9.48267 47.6827C9.26329 47.2558 10.0408 46.6067 9.85284 45.6736C9.66913 44.7616 8.82082 44.8587 8.58369 43.9995C8.33536 43.0996 9.16989 42.6458 9.6942 40.4502C9.99531 39.1892 9.94204 38.9543 10.223 38.1733C10.974 36.0857 14.6553 36.9746 14.242 38.9099C14.162 39.2843 14.3748 39.7147 13.9776 39.7135Z"
              fill="#2F2E41"
            />
            <path
              d="M8.57397 14.2739H26.3587C26.8617 14.2739 27.2708 13.7557 27.2708 13.1188V1.15508C27.2708 0.518205 26.8617 0 26.3587 0H8.57397C8.07102 0 7.66186 0.518204 7.66186 1.15508V13.1188C7.66186 13.7557 8.07102 14.2739 8.57397 14.2739Z"
              fill="white"
            />
            <path
              d="M8.57397 14.2739H26.3587C26.8617 14.2739 27.2708 13.7557 27.2708 13.1188V1.15508C27.2708 0.518205 26.8617 0 26.3587 0H8.57397C8.07102 0 7.66186 0.518204 7.66186 1.15508V13.1188C7.66186 13.7557 8.07102 14.2739 8.57397 14.2739ZM26.3587 0.19289C26.7777 0.19289 27.1185 0.624539 27.1185 1.15508V13.1188C27.1185 13.6493 26.7777 14.081 26.3587 14.081H8.57397C8.15503 14.081 7.81417 13.6493 7.81417 13.1188V1.15508C7.81417 0.624539 8.15503 0.19289 8.57397 0.19289H26.3587Z"
              fill="#3F3D56"
            />
            <path
              d="M9.94661 1.44668C9.82043 1.44668 9.71814 1.31714 9.71814 1.15735C9.71814 0.997551 9.82043 0.868011 9.94661 0.868011C10.0728 0.868011 10.1751 0.997551 10.1751 1.15735C10.1751 1.31714 10.0728 1.44668 9.94661 1.44668Z"
              fill="#3F3D56"
            />
            <path
              d="M9.33735 1.44668C9.21117 1.44668 9.10888 1.31714 9.10888 1.15735C9.10888 0.997551 9.21117 0.868011 9.33735 0.868011C9.46353 0.868011 9.56583 0.997551 9.56583 1.15735C9.56583 1.31714 9.46353 1.44668 9.33735 1.44668Z"
              fill="#3F3D56"
            />
            <path
              d="M8.72808 1.44668C8.60189 1.44668 8.4996 1.31714 8.4996 1.15735C8.4996 0.997551 8.60189 0.868011 8.72808 0.868011C8.85426 0.868011 8.95655 0.997551 8.95655 1.15735C8.95655 1.31714 8.85426 1.44668 8.72808 1.44668Z"
              fill="#3F3D56"
            />
            <path
              d="M25.9761 5.83493C26.0391 5.83493 26.0904 5.89982 26.0904 5.9796C26.0904 6.0185 26.0785 6.05447 26.057 6.08103C26.0353 6.1092 26.0068 6.12427 25.9761 6.12427H8.8804C8.8174 6.12427 8.76616 6.05937 8.76616 5.9796C8.76616 5.9407 8.77802 5.90472 8.79955 5.87816C8.82127 5.85 8.84972 5.83493 8.8804 5.83493H25.9761Z"
              fill="#E6E6E6"
            />
            <path
              d="M11.0128 5.78671V6.17249H25.9761C26.018 6.17249 26.0561 6.15127 26.0835 6.11559C26.1117 6.08087 26.1285 6.03265 26.1285 5.9796C26.1285 5.87351 26.0599 5.78671 25.9761 5.78671H11.0128Z"
              fill="#9EEDEF"
            />
            <path
              d="M9.07079 5.06337H10.594C10.7619 5.06337 10.8986 4.89035 10.8986 4.67759C10.8986 4.46483 10.7619 4.29181 10.594 4.29181H9.07079C8.90282 4.29181 8.76616 4.46483 8.76616 4.67759C8.76616 4.89035 8.90282 5.06337 9.07079 5.06337Z"
              fill="#E6E6E6"
            />
            <path
              d="M19.0476 3.03801H25.8619C26.0299 3.03801 26.1665 2.86499 26.1665 2.65223C26.1665 2.43947 26.0299 2.26645 25.8619 2.26645H19.0476C18.8796 2.26645 18.7429 2.43947 18.7429 2.65223C18.7429 2.86499 18.8796 3.03801 19.0476 3.03801Z"
              fill="#E6E6E6"
            />
            <path
              d="M25.9761 10.175C26.0391 10.175 26.0904 10.2399 26.0904 10.3196C26.0904 10.3585 26.0785 10.3945 26.057 10.4211C26.0353 10.4492 26.0068 10.4643 25.9761 10.4643H8.8804C8.8174 10.4643 8.76616 10.3994 8.76616 10.3196C8.76616 10.2807 8.77802 10.2447 8.79955 10.2182C8.82127 10.19 8.84972 10.175 8.8804 10.175H25.9761Z"
              fill="#E6E6E6"
            />
            <path
              d="M16.877 10.1267V10.5125H25.9761C26.018 10.5125 26.0561 10.4913 26.0835 10.4556C26.1117 10.4209 26.1285 10.3727 26.1285 10.3196C26.1285 10.2135 26.0599 10.1267 25.9761 10.1267H16.877Z"
              fill="#9EEDEF"
            />
            <path
              d="M9.07079 9.4034H10.594C10.7619 9.4034 10.8986 9.23038 10.8986 9.01762C10.8986 8.80485 10.7619 8.63184 10.594 8.63184H9.07079C8.90282 8.63184 8.76616 8.80485 8.76616 9.01762C8.76616 9.23038 8.90282 9.4034 9.07079 9.4034Z"
              fill="#E6E6E6"
            />
          </g>
          <defs>
            <clipPath id="clip0_18_218">
              <rect
                width="46"
                height="59"
                fill="white"
                transform="matrix(-1 0 0 1 46 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.register}>
        <h2 className={styles.logo}>Casting App</h2>
        <h3 className={styles.h3}>Registro</h3>
        <div>
          <form action="" className={styles.formContainer}>
            <div className={styles.coolinput}>
              <label for="input" className={styles.text}>
                Nombre
              </label>
              <input
                type="text"
                placeholder="Ingrese su nombre..."
                name="name"
                onChange={(event) => handleInputChange(event)}
                value={input.name}
                className={styles.input}
              />
            </div>
            <p className={styles.error}>{errors.name ? errors.name : null}</p>
            <div className={styles.coolinput}>
              <label for="input" className={styles.text}>
                Correo
              </label>
              <input
                type="text"
                placeholder="Ingrese un email..."
                name="email"
                onChange={(event) => handleInputChange(event)}
                value={input.email}
                className={styles.input}
              />
            </div>
            <p className={styles.error}>{errors.email ? errors.email : null}</p>
            <div className={styles.coolinput}>
              <label for="input" className={styles.text}>
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Ingrese una contraseña..."
                name="password"
                onChange={(event) => handleInputChange(event)}
                value={input.password}
                className={styles.input}
              />
            </div>
            <p className={styles.error}>{errors.password ? errors.password : null}</p>
          </form>

          <div className={styles.buttonCheckbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className={styles.checkBox}
            />
            <label htmlFor="" className={styles.condiciones}>
              Acepto los términos y condiciones
            </label>
          </div>
          {disable ? (
            <button
              className={styles.enviarButton}
              type="submit"
              onClick={(event) => handleSubmit(event)}
            >
              Registrarse
            </button>
          ) : (
            <button className={styles.enviarButton} disabled>
              Registrarse
            </button>
          )}
        </div>
        <div className={styles.separarGoogle}>
          <button className={styles.buttonGoogle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Regístrate con Google
          </button>
        </div>
        <hr />
        <div className={styles.pregunta}>
          <p className={styles.noEstas}>¿Ya estás registrado?</p>
          <Link className={styles.registrate}>
            <p>Inicia sesión</p>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}

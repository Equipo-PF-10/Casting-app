import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveData } from "./LocalStorageUserData";
import { clean_message_register, user_type } from "../../redux/actions"; //id_user
import { modal_login } from "../../redux/actions";
import Navbar from "../../Components/Navbar/Navbar";
import validate from "./Validate.jsx";
import { loginControler } from "./loginControler";
import style from "./Login.module.css";
import axios from "axios";
import {login} from "./loginFunction"
import admin from '../../../assets/Fotos/admin.png'
import { GrUserAdmin } from "react-icons/gr";

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("logged") === "true") {
      //dispatch(id_user(localStorage.getItem("user_id")));
      if (localStorage.getItem("type") === "talent") navigate(`/home/talent`);
      if (localStorage.getItem("type") === "company") navigate(`/home/company`);
    }
  }, []);

  //const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let modal = useSelector((state) => state.modalInLogin);
  let messageRegistered = useSelector((state) => state.messageRegistered);

  // useEffect(() => {
  //   const saveUserToDatabase = async () => {
  //     if (isAuthenticated) {
  //       const token = await getAccessTokenSilently();
  //       // Envía el token JWT al backend para almacenar los datos del usuario en tu base de datos local
  //       try {
  //         const response = await axios.post(
  //           "http://localhost:3002/guardarUsuario",
  //           user,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         console.log(response.data); // Respuesta del backend
  //       } catch (error) {
  //         console.error("Error al guardar el usuario:", error);
  //       }
  //     }
  //   };

  //   saveUserToDatabase();
  // }, [isAuthenticated, user, getAccessTokenSilently]);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [admin, setAdmin] = useState([]);

  const [errors, setErrors] = useState({});

  const disable = () => {
    let disabled = true;

    if (
      Object.keys(errors).length === 0 &&
      input.email.length > 0 &&
      input.password.length > 0
    ) {
      //devuelve un array
      disabled = false;
    }
    return disabled;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  //--Le asigno el mensaje de error al inicio para que lo renderice en primer caso de error
  //--El mensaje de error se setea a string vacio solo en caso de que el usuario se registre correctamente
  const [errorMessage, setErrorMessage] = useState(
    "El email o contraseña no coinciden con un usuario registrado"
  );

  const [showErrorMessage, setShowErrorMessage] = useState(true);

  let currentToastId = null;
  //Evita que se renderice mas de 1 toast
  const mensaje_error_Toast = () => {
    if (showErrorMessage) {
      if (currentToastId) {
        toast.update(currentToastId, {
          render: errorMessage,
          autoClose: 5000,
        });
      } else {
        currentToastId = toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "custom-toast-id",
          style: {
            marginTop: "120px",
            width: "400px",
          },
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage(true);

    // const obj = await loginControler(input.email, input.password);
    const response = await login(input.email, input.password)
    // console.log(response.email + " " + input.email);
    // console.log(response);
      if(response.access){ 
        navigate("/admin")
      }
      
    


    //este navigate deberia ser para una ruta donde la data sea del talento por id
    // if (obj.access === 1) {
    //   saveData("talent", obj.id, input.email, input.password);
    //   dispatch(id_user(obj.id));
    //   setErrorMessage("");
    //   dispatch(user_type("1"));
    //   setInput({
    //     email: "",
    //     password: "",
    //   });
    //   navigate(`/home/talent`);
    // }
    // //este navigate deberia ser para una ruta donde la data sea de la empresa por id
    // if (obj.access === 2) {
    //   saveData("company", obj.id, input.email, input.password);
    //   dispatch(id_user(obj.id));
    //   setErrorMessage("");
    //   dispatch(user_type("2"));
    //   setInput({
    //     email: "",
    //     password: "",
    //   });
    //   navigate(`/home/company`);
    // }
    // if (
    //   obj.access === 0 &&
    //   input.email.length > 0 &&
    //   input.password.length > 0
    // ) {
    //   //Este caso es cuando no consigue ningun match en la base de datos (Mostrar el mensaje de error por medio de Toastify)
    //   mensaje_error_Toast();
    // }
    // if (obj.error) {
    //   //Cuando no es ni 0, 1, ni 2 es error de servidor desconectado.
    //   setErrorMessage(`${obj.error}`);
    //   mensaje_error_Toast();
    //   document.getElementById("loginForm").reset();
    //   setShowErrorMessage(true);
    // }
  };

  const handler_click = () => {
    const open = "isOpened";
    dispatch(modal_login(open));
    setShowErrorMessage(false); // Establecer en false para evitar que aparezca el toast de error
  };

  const handler_click_talent = () => {
    navigate("/model/register");
    dispatch(modal_login("isClosed"));
  };

  const handler_click_company = () => {
    navigate("/company/register");
    dispatch(modal_login("isClosed"));
  };

  const handler_click_close = () => {
    const close = "isClosed";
    dispatch(modal_login(close));
  };

  //----------------------------Aplico Toastify (Edward)

  let currentToastIdSuccess = null;
  //Evita que se renderice mas de 1 toast
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: messageRegistered,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(messageRegistered, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          marginTop: "120px",
          width: "400px",
        },
      });
    }
  };

  //-------------Mensaje Success Toast que viene de los registros (Talento o Empresa)
  useEffect(() => {
    if (Object.keys(messageRegistered).length > 0) {
      mensaje_success_Toast();
      dispatch(clean_message_register(""));
    }
  }, [messageRegistered]);

  return (
    <div className={style.containerGeneral}>
      {/*<Navbar />*/}
      <div>{/*<ToastContainer />*/}</div>
      <div className={style.container}>
        <div className={style.containerImg}>
          <div className={style.login}>
            {/*Casting App*/}
            <div className={style.logoCasting}>
              <Link to={"/"}>
                <svg
                  width="500"
                  height="100"
                  viewBox="0 0 1541 731"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="1541" height="730.171" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_143_375"
                        transform="scale(0.00137741 0.00290698)"
                      />
                    </pattern>
                    <image
                      id="image0_143_375"
                      width="726"
                      height="344"
                      xlinkHref="data:image/png;base64,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AAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgIBoBf4/6YYe9ezISK0AAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </Link>
            </div>
            
            <form
              id="loginForm"
              className={style.formContainer}
              onSubmit={(e) => handleSubmit(e)}
            >
              {/*Login*/}
              <h3 className={style.loginRegistro}>Administrador <GrUserAdmin className={style.adminis} /></h3>
              <div className={style.inputContainer}>
                <label htmlFor="input" className={style.text}>
                  Email:
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Introduzca su email"
                  name="email"
                  className={style.input}
                />
                <div>
                  {errors.email && (
                    <span
                      className={style.spanError}
                      style={{ color: "#e74c3c" }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="input" className={style.text}>
                  Contraseña:
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  autocomplete="off"
                  placeholder="Introduzca su contraseña"
                  name="password"
                  className={style.input}
                />
                <div>
                  {errors.password && (
                    <span
                      className={style.spanError}
                      style={{ color: "#e74c3c" }}
                    >
                      {errors.password}
                    </span>
                  )}
                </div>
                {/*<div className={style.buttonMantener}>
                  <input type="checkbox" className={style.checkBox} />
                  <label htmlFor="" className={style.mantener}>
                    Mantener registrado
                  </label>
                </div>*/}
              </div>
              <div>
                <button
                  className={style.enviarButton}
                  type="submit"
                  name="submit"
                  disabled={disable()}
                >
                  Entrar
                </button>
              </div>
              <div className={style.buttonPlan}>
                {/*<button className={style.buttonGoogle}>
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
                  Continua con Google
                </button>
                <div className={style.pregunta}>
                  <p className={style.noEstas}>¿No estas registrado?</p>
                  <button className={style.registrate} onClick={handler_click}>
                    Regístrate
                  </button>
                </div>*/}
                {modal ? (
                  <div className={style.containerModalOpened}>
                    <div className={style.modalOpened}>
                      <button
                        onClick={handler_click_close}
                        className={style.delete}
                      >
                        {" "}
                        X{" "}
                      </button>

                      <h3>Selecciona un tipo de Registro</h3>

                      <button onClick={handler_click_talent}>Talento</button>
                      <button
                        onClick={handler_click_company}
                        className={style.buttonCompany}
                      >
                        Empresa
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={style.containerModalClosed}>
                    <div className={style.modalClosed}>
                      <h2>Selecciona un tipo de Registro</h2>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className={style.imagenLogin}>
            <svg
              width="200"
              height="200"
              viewBox="0 0 64 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.svgImagen}
            >
              <g clipPath="url(#clip0_16_104)">
                <path
                  d="M64 25.877C64 25.9226 63.9635 25.9597 63.9185 25.9597H0V25.7943H63.9185C63.9635 25.7943 64 25.8313 64 25.877Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M21.0168 5.79992C22.3508 5.79992 23.4323 4.70223 23.4323 3.34816C23.4323 1.99409 22.3508 0.896393 21.0168 0.896393C19.6827 0.896393 18.6012 1.99409 18.6012 3.34816C18.6012 4.70223 19.6827 5.79992 21.0168 5.79992Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M22.2968 6.31723L19.1173 7.23928L18.6631 8.27659L17.6411 13.2326V21.07C17.6411 21.07 16.392 23.8362 17.0733 26.2566C17.8016 28.8437 20.3664 25.7901 22.2968 26.1386C24.2272 26.4871 27.2931 26.8329 27.2931 26.8329L25.4763 18.4191L25.022 8.16133L22.2968 6.31723Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M21.6968 4.15104L21.2057 3.9018C21.2057 3.9018 21.0829 2.78025 20.8373 2.53102C20.5918 2.28178 20.5918 2.15717 20.5918 2.15717L20.9601 1.6587C20.9601 1.6587 19.1185 2.65563 18.7501 2.03255C18.3818 1.40947 18.8729 1.16023 18.8729 1.16023L18.259 0.661765C18.259 0.661765 18.9957 1.16023 19.1185 0.786381C19.2412 0.41253 19.9779 0.158881 19.9779 0.158881C19.9779 0.158881 21.5865 0.528316 21.4575 0.158881C21.3284 -0.210554 21.8195 0.163297 21.9423 0.287913C22.0651 0.41253 23.1701 1.6587 23.2928 1.53408C23.4156 1.40947 24.0295 1.78332 23.9067 1.90793C23.7839 2.03255 23.7839 2.15717 23.9067 2.28178C24.0295 2.4064 24.7661 3.77719 24.1523 4.27565C23.5384 4.77412 22.679 5.39721 22.8017 5.89567C22.9245 6.39414 22.8017 4.27565 21.6968 4.15104Z"
                  fill="#2F2E41"
                />
                <path
                  d="M9.78927 10.3239C9.16929 9.78146 8.9425 9.01706 9.2827 8.61663C9.62289 8.21621 10.4011 8.33144 11.0213 8.87418C11.2719 9.08753 11.4686 9.35871 11.5948 9.66502L14.1931 11.9971L13.0889 13.2114L10.6446 10.7834C10.3275 10.7018 10.0341 10.5442 9.78927 10.3239Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M18.6903 8.31625L20.4018 8.15833L21.9028 15.4241C22.1888 16.8086 21.2947 18.1603 19.9239 18.4157L18.6903 18.6455L10.8279 11.619L11.9766 9.6754L17.7748 13.3671L18.6903 8.31625Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M14.8693 40.6281C14.8693 40.6281 13.5118 43.187 13.6087 43.0886C13.7057 42.9902 15.3541 43.5807 15.3541 43.5807L16.3237 41.0218L14.8693 40.6281Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M12.8657 22.7165C12.8657 22.7165 12.1708 25.5359 12.2409 25.4163C12.311 25.2966 14.0518 25.457 14.0518 25.457L14.3708 22.7345L12.8657 22.7165Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M24.9535 22.2424C21.8857 22.6799 19.1148 22.2985 16.857 20.5017C16.857 20.5017 15.2087 26.1115 18.2145 26.702C21.2204 27.2925 24.5657 26.2776 24.9535 25.2934C25.3414 24.3092 24.9535 22.2424 24.9535 22.2424Z"
                  fill="#2F2E41"
                />
                <path
                  d="M19.2327 24.014L15.8874 32.0166L14.336 41.2679L16.3722 41.7599L20.0145 33.2468L24.9535 25.0966L19.2327 24.014Z"
                  fill="#2F2E41"
                />
                <path
                  d="M18.7963 21.7319C18.7963 21.7319 18.0206 15.63 16.5661 15.2363C15.8571 15.0444 15.1941 15.063 14.7008 15.1325C14.2036 15.2025 13.8073 15.588 13.7203 16.0898L12.3986 23.7187H14.2676L14.8693 21.6519L16.4692 24.4876L18.7963 21.7319Z"
                  fill="#2F2E41"
                />
                <path
                  d="M14.0451 24.6844L12.197 24.4876L11.9119 25.5702C11.9119 25.5702 8.90601 28.3259 10.4574 28.5227C12.0088 28.7196 13.4633 27.637 13.4633 27.637L15.5975 26.3943C15.5975 26.3943 14.7723 24.1616 14.1905 24.1616C13.6088 24.1616 14.0451 24.6844 14.0451 24.6844Z"
                  fill="#2F2E41"
                />
                <path
                  d="M15.0147 43.1378L13.1667 42.941L12.8815 44.0236C12.8815 44.0236 9.87564 46.7793 11.4271 46.9761C12.9785 47.1729 14.4329 46.0903 14.4329 46.0903L16.5671 44.8477C16.5671 44.8477 16.4207 42.5165 15.8389 42.5165C15.2571 42.5165 15.0147 43.1378 15.0147 43.1378Z"
                  fill="#2F2E41"
                />
                <path
                  d="M24.372 28.2389C24.1491 29.0145 23.5742 29.5266 23.0879 29.3826C22.6016 29.2386 22.3881 28.4931 22.6111 27.7172C22.696 27.406 22.853 27.12 23.0692 26.883L24.0542 23.6086L25.5582 24.1105L24.4275 27.2852C24.4843 27.6031 24.4652 27.9301 24.372 28.2389Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M25.413 8.17558L24.6288 7.95108C23.8892 9.44451 23.5712 11.1165 23.71 12.782L24.097 17.4293L22.8199 25.5978L25.3231 26.2551L27.2957 16.0041L25.413 8.17558Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M10.1451 20.9468C10.1107 20.8401 9.85044 20.8871 9.82545 20.7917C9.80054 20.6966 10.0503 20.6169 10.2419 20.349C10.2764 20.3007 10.4941 19.9962 10.4106 19.8682C10.2524 19.6255 9.15125 20.23 8.88694 19.8908C8.82894 19.8163 8.80507 19.6885 8.63227 19.4506C8.56352 19.356 8.51942 19.3103 8.46672 19.3117C8.39195 19.3136 8.3652 19.4085 8.24768 19.5805C8.07144 19.8384 8.00784 19.8061 7.89173 20.0174C7.80555 20.1743 7.79533 20.2745 7.73318 20.2804C7.64523 20.2888 7.60889 20.0935 7.50142 20.0859C7.39175 20.0782 7.28201 20.2711 7.22761 20.4219C7.12552 20.7049 7.18874 20.9212 7.20276 21.1367C7.21798 21.371 7.18222 21.7138 6.93147 22.1539L4.56637 25.9786C5.0743 25.199 6.51612 23.0728 7.09702 22.2929C7.26472 22.0678 7.44493 21.8417 7.7223 21.7992C7.98935 21.7582 8.31428 21.8923 8.76781 21.8845C8.82077 21.8836 8.96818 21.8792 9.00404 21.7999C9.03368 21.7343 8.96008 21.6773 8.98685 21.6157C9.02277 21.533 9.18435 21.5685 9.40455 21.5136C9.55982 21.4749 9.66531 21.4109 9.75603 21.3559C9.78338 21.3393 10.1908 21.0888 10.1451 20.9468Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M3.95043 21.8398C3.88894 21.8261 3.83655 21.9694 3.7832 21.9543C3.73004 21.9392 3.76357 21.7918 3.68929 21.6191C3.6759 21.5879 3.59149 21.3916 3.50548 21.3963C3.34244 21.4051 3.31706 22.1281 3.07675 22.1619C3.02402 22.1693 2.95532 22.1443 2.79045 22.1617C2.72486 22.1687 2.69004 22.1775 2.67549 22.2041C2.65484 22.2419 2.69303 22.2826 2.74229 22.3908C2.81616 22.553 2.78215 22.5754 2.85084 22.6942C2.90183 22.7824 2.94735 22.8164 2.93228 22.849C2.91094 22.8953 2.80601 22.857 2.77134 22.9084C2.73596 22.9608 2.79762 23.0711 2.85484 23.1417C2.96221 23.2742 3.08503 23.3051 3.1933 23.3604C3.31096 23.4204 3.46645 23.5371 3.60691 23.789L4.77396 26.0708C4.54349 25.5928 3.93138 24.261 3.72187 23.7466C3.66139 23.5981 3.60407 23.4431 3.66354 23.2927C3.72079 23.1478 3.87939 23.0246 4.00647 22.7965C4.02132 22.7698 4.0617 22.6951 4.0337 22.6544C4.01055 22.6207 3.96175 22.6409 3.93967 22.6098C3.91006 22.568 3.97384 22.4978 4.01082 22.3722C4.0369 22.2837 4.03641 22.2127 4.03599 22.1516C4.03586 22.1332 4.03228 21.858 3.95043 21.8398Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M5.11473 22.3965L5.15142 22.0528L5.17392 22.0312C5.27801 21.9313 5.34313 21.8255 5.36756 21.7166C5.37144 21.6993 5.37445 21.6818 5.37753 21.664C5.38972 21.5933 5.40484 21.5054 5.47179 21.4142C5.50926 21.3633 5.60837 21.2484 5.7106 21.2886C5.73819 21.2991 5.75681 21.3172 5.76975 21.3365C5.77299 21.3331 5.77632 21.3298 5.77988 21.3262C5.82403 21.2826 5.85492 21.2667 5.88468 21.2513C5.90754 21.2395 5.93115 21.2273 5.97111 21.1949C5.98864 21.1807 6.00267 21.1679 6.0145 21.1571C6.05037 21.1246 6.09625 21.0865 6.15909 21.1016C6.22571 21.1201 6.24855 21.1846 6.2637 21.2273C6.29076 21.3035 6.2991 21.3558 6.30461 21.3906C6.3066 21.4033 6.3089 21.4175 6.31065 21.4222C6.32523 21.4595 6.50827 21.4691 6.57714 21.4732C6.73195 21.4817 6.86591 21.4891 6.89812 21.5967C6.92124 21.6736 6.87306 21.7576 6.7508 21.8528C6.71272 21.8825 6.67465 21.9029 6.64148 21.9182C6.66188 21.9378 6.67813 21.9644 6.67913 22.0006C6.68137 22.0865 6.59462 22.1524 6.42131 22.1968C6.37824 22.2079 6.32032 22.2227 6.24451 22.219C6.20881 22.2172 6.17754 22.2116 6.15088 22.2064C6.1469 22.2219 6.13961 22.2379 6.12647 22.2531C6.0879 22.2979 6.0256 22.3093 5.94104 22.2841C5.84769 22.2576 5.77393 22.2217 5.70885 22.1902C5.652 22.1627 5.60298 22.1392 5.56185 22.1328C5.48535 22.1219 5.41402 22.1698 5.32865 22.2336L5.11473 22.3965Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M5.72525 20.4385L5.38833 20.4897L5.36205 20.4731C5.24048 20.3962 5.12315 20.3591 5.01319 20.3628C4.99571 20.3633 4.97826 20.3648 4.96048 20.3663C4.89004 20.3723 4.80246 20.3797 4.69851 20.3371C4.64054 20.3133 4.50589 20.2451 4.51821 20.1346C4.52122 20.1048 4.53379 20.0819 4.54886 20.0643C4.54485 20.062 4.54083 20.0596 4.53649 20.057C4.48378 20.0247 4.46074 19.9984 4.43855 19.9731C4.42148 19.9536 4.4039 19.9335 4.36285 19.9025C4.34485 19.8889 4.32909 19.8784 4.31585 19.8695C4.27577 19.8426 4.22785 19.8072 4.22628 19.7416C4.227 19.6715 4.28268 19.6328 4.31952 19.6071C4.38525 19.5612 4.43305 19.5397 4.46475 19.5255C4.47634 19.5203 4.48938 19.5144 4.49336 19.5115C4.52521 19.4877 4.48798 19.3056 4.47435 19.237C4.44321 19.0828 4.41626 18.9494 4.51063 18.8905C4.57812 18.8483 4.67035 18.8743 4.79211 18.9702C4.83001 19 4.85916 19.0322 4.88212 19.0609C4.89561 19.0359 4.91686 19.0132 4.95117 19.003C5.03241 18.9791 5.11719 19.0475 5.20347 19.2064C5.22503 19.2459 5.2538 19.299 5.26947 19.3744C5.27682 19.4099 5.27946 19.442 5.28128 19.4695C5.29699 19.4695 5.31411 19.4726 5.33194 19.4816C5.38444 19.5081 5.4111 19.5664 5.40847 19.6558C5.40699 19.7541 5.39148 19.8357 5.37791 19.9076C5.36613 19.9704 5.35616 20.0244 5.36047 20.0665C5.36953 20.1443 5.43331 20.2022 5.51577 20.2698L5.72525 20.4385Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M5.77065 19.4116L5.80734 19.0678L5.82984 19.0462C5.93393 18.9464 5.99905 18.8406 6.02348 18.7317C6.02736 18.7144 6.03037 18.6969 6.03345 18.6791C6.04563 18.6084 6.06076 18.5205 6.12771 18.4293C6.16518 18.3784 6.26429 18.2635 6.36652 18.3036C6.39411 18.3141 6.41273 18.3323 6.42566 18.3515C6.42891 18.3482 6.43224 18.3449 6.4358 18.3412C6.47995 18.2977 6.51084 18.2817 6.5406 18.2664C6.56346 18.2546 6.58707 18.2424 6.62703 18.21C6.64455 18.1957 6.65859 18.1829 6.67042 18.1722C6.70628 18.1397 6.75216 18.1016 6.81501 18.1167C6.88163 18.1352 6.90447 18.1997 6.91962 18.2424C6.94668 18.3185 6.95502 18.3709 6.96053 18.4056C6.96252 18.4183 6.96482 18.4326 6.96656 18.4373C6.98115 18.4746 7.16418 18.4842 7.23305 18.4882C7.38786 18.4968 7.52182 18.5042 7.55404 18.6117C7.57716 18.6887 7.52898 18.7727 7.40672 18.8679C7.36864 18.8975 7.33056 18.918 7.29739 18.9332C7.3178 18.9528 7.33405 18.9795 7.33505 19.0157C7.33729 19.1016 7.25054 19.1674 7.07723 19.2118C7.03416 19.223 6.97623 19.2378 6.90043 19.234C6.86473 19.2322 6.83346 19.2267 6.80679 19.2215C6.80282 19.2369 6.79553 19.253 6.78239 19.2682C6.74381 19.313 6.68152 19.3244 6.59696 19.2991C6.50361 19.2727 6.42985 19.2368 6.36477 19.2053C6.30792 19.1778 6.2589 19.1543 6.21777 19.1478C6.14127 19.137 6.06994 19.1849 5.98457 19.2487L5.77065 19.4116Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M4.67819 25.9982L4.61862 25.9385L4.53583 25.9296C4.53622 25.9217 4.53568 25.9032 4.53507 25.8744C4.53189 25.7162 4.522 25.2349 4.58803 24.4954C4.63413 23.9792 4.71118 23.4552 4.81702 22.9377C4.92304 22.4194 5.03307 22.0338 5.12145 21.7239C5.18814 21.4901 5.25546 21.2683 5.32118 21.0524C5.49655 20.4753 5.66214 19.9302 5.76469 19.3084C5.78765 19.1697 5.83531 18.8807 5.73773 18.5397C5.68112 18.342 5.58419 18.1558 5.44953 17.9866L5.57986 17.8798C5.72845 18.0667 5.83564 18.2729 5.89852 18.4925C6.0067 18.8706 5.95478 19.1854 5.92983 19.3367C5.82546 19.9694 5.65822 20.5197 5.48112 21.1023C5.41574 21.3175 5.34863 21.5383 5.28223 21.7711C5.19465 22.0782 5.08561 22.4605 4.98097 22.9721C4.87632 23.4834 4.80026 24.001 4.75467 24.5107C4.68951 25.2409 4.6993 25.715 4.70251 25.8708C4.70416 25.954 4.70452 25.9714 4.67819 25.9982Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M5.09199 18.1822C5.08529 18.1807 5.07855 18.179 5.07179 18.177C4.93434 18.1379 4.82408 18.0242 4.74399 17.8391C4.7065 17.7521 4.69765 17.6605 4.68001 17.4778C4.67724 17.4497 4.66501 17.3071 4.68005 17.1183C4.68983 16.9949 4.7029 16.9453 4.73599 16.9064C4.77274 16.863 4.82224 16.8382 4.87456 16.8257C4.87597 16.8094 4.88124 16.7934 4.89169 16.7783C4.93472 16.7154 5.00676 16.7412 5.04585 16.7547C5.06554 16.7619 5.09008 16.771 5.11769 16.7757C5.16107 16.7833 5.18697 16.7756 5.22618 16.764C5.2637 16.753 5.31035 16.7392 5.37483 16.7404C5.50206 16.7422 5.59625 16.8002 5.62731 16.8193C5.79087 16.9191 5.84735 17.0782 5.9127 17.2625C5.92569 17.2995 5.96879 17.433 5.97883 17.6049C5.98607 17.7289 5.97006 17.7797 5.95169 17.816C5.91419 17.8907 5.85676 17.9253 5.71423 17.9981C5.56532 18.0743 5.49061 18.1125 5.42935 18.1321C5.28681 18.1775 5.1973 18.2061 5.09199 18.1822Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M43.3169 3.79337C43.3169 3.79337 44.2417 4.3438 43.9384 4.88815C43.6351 5.4325 43.2123 6.17396 43.4992 6.40748C43.786 6.641 44.2595 7.67058 44.2595 7.67058C44.2595 7.67058 46.2808 7.38403 46.091 8.97767C45.9013 10.5713 44.9517 10.7886 45.7656 11.4896C46.5795 12.1907 44.9197 13.0292 44.9197 13.0292C44.9197 13.0292 43.7739 12.6668 43.5125 11.5523C43.2511 10.4378 43.7455 12.4045 43.5797 12.5455C43.4139 12.6865 42.77 13.616 42.3144 12.3802C41.8588 11.1444 42.3099 10.6652 41.7079 9.93588C41.1059 9.20653 40.6966 8.02684 40.7145 7.82062C40.7324 7.6144 40.0258 5.73265 41.1134 4.99878C42.201 4.26492 43.3169 3.79337 43.3169 3.79337Z"
                  fill="#2F2E41"
                />
                <path
                  d="M52.4254 21.0844C52.9623 21.5354 53.6267 21.6198 53.9095 21.2729C54.1922 20.9261 53.9861 20.2794 53.449 19.8283C53.2368 19.6451 52.9846 19.5162 52.7133 19.4522L50.4147 17.5705L49.5677 18.6842L51.9236 20.421C52.0363 20.6796 52.2083 20.9071 52.4254 21.0844Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M45.5364 10.8218C45.5364 10.8218 43.7325 9.59736 43.1418 10.1978C42.5511 10.7982 42.6922 12.2978 42.6922 12.2978L47.4226 17.8935L51.1736 20.3135L52.1794 18.7149L49.0259 15.8588L45.5364 10.8218Z"
                  fill="#3F3D56"
                />
                <path
                  d="M42.8922 8.16945L43.5467 10.5307H39.9545L41.1374 7.62128L42.8922 8.16945Z"
                  fill="#FFB6B6"
                />
                <path
                  opacity="0.1"
                  d="M42.8922 8.16945L43.5467 10.5307H39.9545L41.1374 7.62128L42.8922 8.16945Z"
                  fill="black"
                />
                <path
                  d="M35.0583 25.6033C35.0119 26.3091 35.3331 26.9055 35.7756 26.9354C36.2182 26.9653 36.6144 26.4174 36.6607 25.7113C36.683 25.4295 36.6385 25.1464 36.5309 24.8857L36.6902 21.8927L35.3048 21.8468L35.2949 24.8022C35.1541 25.0462 35.073 25.3209 35.0583 25.6033Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M39.2298 13.9292C39.2298 13.9292 39.1532 11.728 38.3278 11.5928C37.5025 11.4577 36.3867 12.451 36.3867 12.451L34.682 19.6183L34.9421 24.1219L36.8078 24.0149L37.2457 19.7482L39.2298 13.9292Z"
                  fill="#3F3D56"
                />
                <path
                  d="M47.2313 40.2345C47.2313 40.2345 48.5888 42.7933 48.4919 42.6949C48.3949 42.5965 46.7465 43.187 46.7465 43.187L45.7769 40.6281L47.2313 40.2345Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M49.235 22.3228C49.235 22.3228 49.9299 25.1422 49.8598 25.0226C49.7897 24.9029 48.0488 25.0633 48.0488 25.0633L47.7298 22.3408L49.235 22.3228Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M43.8376 9.74338H40.4484L36.7592 12.3022L35.6926 21.2583L36.2744 23.0298L37.341 25.0966C37.341 25.0966 36.2744 20.5693 38.8924 22.3409C41.5105 24.1124 41.7044 24.4076 41.7044 24.4076L45.1951 22.6361L46.5041 15.304L45.5345 11.2689L43.8376 9.74338Z"
                  fill="#3F3D56"
                />
                <path
                  d="M37.1471 21.8488C40.2149 22.2862 42.9858 21.9048 45.2436 20.108C45.2436 20.108 46.892 25.7178 43.8861 26.3083C40.8802 26.8988 37.535 25.8839 37.1471 24.8997C36.7592 23.9155 37.1471 21.8488 37.1471 21.8488Z"
                  fill="#2F2E41"
                />
                <path
                  d="M42.868 23.6203L46.2132 31.6229L47.7646 40.8742L45.7284 41.3663L42.0861 32.8531L37.1471 24.7029L42.868 23.6203Z"
                  fill="#2F2E41"
                />
                <path
                  d="M43.3043 21.3382C43.3043 21.3382 44.08 15.2363 45.5345 14.8427C46.2435 14.6507 46.9065 14.6693 47.3998 14.7388C47.897 14.8088 48.2933 15.1944 48.3803 15.6962L49.702 23.325H47.833L47.2313 21.2583L45.6314 24.0939L43.3043 21.3382Z"
                  fill="#2F2E41"
                />
                <path
                  d="M48.0555 24.2908L49.9036 24.0939L50.1887 25.1765C50.1887 25.1765 53.1946 27.9322 51.6432 28.1291C50.0918 28.3259 48.6373 27.2433 48.6373 27.2433L46.5032 26.0007C46.5032 26.0007 47.3283 23.7679 47.9101 23.7679C48.4919 23.7679 48.0555 24.2908 48.0555 24.2908Z"
                  fill="#2F2E41"
                />
                <path
                  d="M47.0859 42.7441L48.9339 42.5473L49.2191 43.6299C49.2191 43.6299 52.225 46.3856 50.6736 46.5824C49.1221 46.7792 47.6677 45.6966 47.6677 45.6966L45.5335 44.454C45.5335 44.454 45.6799 42.1228 46.2617 42.1228C46.8435 42.1228 47.0859 42.7441 47.0859 42.7441Z"
                  fill="#2F2E41"
                />
                <path
                  d="M42.0388 8.68257C43.2335 8.68257 44.2021 7.6995 44.2021 6.48681C44.2021 5.27412 43.2335 4.29105 42.0388 4.29105C40.844 4.29105 39.8754 5.27412 39.8754 6.48681C39.8754 7.6995 40.844 8.68257 42.0388 8.68257Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M42.868 4.03487C42.868 4.03487 43.2286 5.05955 42.6517 5.27913C42.0748 5.49871 41.2816 5.79148 41.3537 6.15744C41.4258 6.5234 41.1374 7.62128 41.1374 7.62128C41.1374 7.62128 42.868 8.71916 41.7143 9.81704C40.5605 10.9149 39.6951 10.4625 39.8754 11.5304C40.0557 12.5983 38.2529 12.1592 38.2529 12.1592C38.2529 12.1592 37.6039 11.1345 38.1087 10.1098C38.6135 9.08512 37.7482 10.9149 37.5318 10.9149C37.3155 10.9149 36.2338 11.2077 36.6665 9.96343C37.0992 8.71916 37.7482 8.64597 37.7482 7.69447C37.7482 6.74297 38.1808 5.5719 38.325 5.42552C38.4693 5.27913 39.1183 3.37614 40.4163 3.52252C41.7142 3.66891 42.868 4.03487 42.868 4.03487Z"
                  fill="#2F2E41"
                />
                <path
                  d="M23.96 40.2345C23.96 40.2345 22.6025 42.7933 22.6995 42.6949C22.7965 42.5965 24.4448 43.187 24.4448 43.187L25.4145 40.6281L23.96 40.2345Z"
                  fill="#A0616A"
                />
                <path
                  d="M34.0443 21.8488C30.9765 22.2862 28.2056 21.9048 25.9478 20.108C25.9478 20.108 24.2994 25.7178 27.3053 26.3083C30.3112 26.8988 33.6564 25.8839 34.0443 24.8997C34.4321 23.9155 34.0443 21.8488 34.0443 21.8488Z"
                  fill="#2F2E41"
                />
                <path
                  d="M28.3234 23.6203L24.9781 31.6229L23.4267 40.8742L25.463 41.3663L29.1052 32.8531L34.0443 24.7029L28.3234 23.6203Z"
                  fill="#2F2E41"
                />
                <path
                  d="M24.1055 42.7441L22.2574 42.5473L21.9723 43.6299C21.9723 43.6299 18.9664 46.3856 20.5178 46.5824C22.0692 46.7792 23.5237 45.6966 23.5237 45.6966L25.6578 44.454C25.6578 44.454 25.5114 42.1228 24.9297 42.1228C24.3479 42.1228 24.1055 42.7441 24.1055 42.7441Z"
                  fill="#2F2E41"
                />
                <path
                  d="M27.0252 38.8882C27.0252 38.8882 26.5117 41.7473 26.574 41.6233C26.6363 41.4993 28.3838 41.5449 28.3838 41.5449L28.5284 38.8072L27.0252 38.8882Z"
                  fill="#A0616A"
                />
                <path
                  d="M26.1259 21.7181L25.3762 30.3778L26.7124 39.6637L28.7989 39.4941L29.6759 30.2557L31.8968 20.9565L26.1259 21.7181Z"
                  fill="#2F2E41"
                />
                <path
                  d="M27.9264 41.2299L26.1086 41.6213L26.1664 42.7404C26.1664 42.7404 24.1448 46.3029 25.6803 46.0043C27.2159 45.7058 28.2704 44.2205 28.2704 44.2205L29.9227 42.3703C29.9227 42.3703 29.0749 40.1986 28.5215 40.3808C27.9681 40.563 27.9264 41.2299 27.9264 41.2299Z"
                  fill="#2F2E41"
                />
                <path
                  d="M27.8744 3.79337C27.8744 3.79337 26.9497 4.3438 27.253 4.88815C27.5562 5.4325 27.979 6.17396 27.6922 6.40748C27.4054 6.641 26.9318 7.67058 26.9318 7.67058C26.9318 7.67058 24.9106 7.38403 25.1003 8.97767C25.2901 10.5713 26.2396 10.7886 25.4258 11.4896C24.6119 12.1907 26.2716 13.0292 26.2716 13.0292C26.2716 13.0292 27.4174 12.6668 27.6789 11.5523C27.9403 10.4378 27.4458 12.4045 27.6117 12.5455C27.7775 12.6865 28.4214 13.616 28.877 12.3802C29.3326 11.1444 28.8814 10.6652 29.4835 9.93588C30.0855 9.20653 30.4948 8.02684 30.4769 7.82062C30.4589 7.6144 31.1655 5.73265 30.0779 4.99878C28.9904 4.26492 27.8744 3.79337 27.8744 3.79337Z"
                  fill="#2F2E41"
                />
                <path
                  d="M28.2992 8.16945L27.6446 10.5307H31.2369L30.054 7.62128L28.2992 8.16945Z"
                  fill="#A0616A"
                />
                <path
                  opacity="0.1"
                  d="M28.2992 8.16945L27.6446 10.5307H31.2369L30.054 7.62128L28.2992 8.16945Z"
                  fill="black"
                />
                <path
                  d="M36.1331 25.6033C36.1795 26.3091 35.8583 26.9055 35.4157 26.9354C34.9732 26.9653 34.577 26.4174 34.5307 25.7113C34.5084 25.4295 34.5529 25.1464 34.6605 24.8857L34.5012 21.8927L35.8866 21.8468L35.8965 24.8022C36.0373 25.0462 36.1184 25.3209 36.1331 25.6033Z"
                  fill="#A0616A"
                />
                <path
                  d="M31.9616 13.9292C31.9616 13.9292 32.0382 11.728 32.8635 11.5928C33.6888 11.4577 34.8047 12.451 34.8047 12.451L36.5094 19.6183L36.2493 24.1219L34.3835 24.0149L33.9456 19.7482L31.9616 13.9292Z"
                  fill="#9EEDEF"
                />
                <path
                  d="M27.3538 9.74338H30.7429L34.4321 12.3022L35.4987 21.2583L34.9169 23.0298L33.8503 25.0966C33.8503 25.0966 34.9169 20.5693 32.2989 22.3409C32.2727 22.3586 32.2468 22.3762 32.2211 22.3936C30.5358 23.5361 28.3121 23.4188 26.7521 22.1057L25.5114 21.0614L26.1902 17.6168L25.6569 11.2689L27.3538 9.74338Z"
                  fill="#9EEDEF"
                />
                <path
                  d="M18.8732 20.9561C18.3296 21.3987 17.664 21.4729 17.3865 21.1217C17.109 20.7705 17.3247 20.1271 17.8686 19.6844C18.0834 19.5045 18.3376 19.3795 18.6098 19.3197L20.9363 17.4736L21.7665 18.6002L19.3849 20.3005C19.2683 20.5574 19.0929 20.7822 18.8732 20.9561Z"
                  fill="#A0616A"
                />
                <path
                  d="M25.9151 10.801C25.9151 10.801 27.7371 9.60452 28.3187 10.214C28.9004 10.8234 28.7369 12.3207 28.7369 12.3207L23.9232 17.8427L20.1364 20.2046L19.1546 18.5907L22.3506 15.7835L25.9151 10.801Z"
                  fill="#9EEDEF"
                />
                <path
                  d="M29.1526 8.68257C30.3474 8.68257 31.3159 7.6995 31.3159 6.48681C31.3159 5.27412 30.3474 4.29105 29.1526 4.29105C27.9578 4.29105 26.9893 5.27412 26.9893 6.48681C26.9893 7.6995 27.9578 8.68257 29.1526 8.68257Z"
                  fill="#A0616A"
                />
                <path
                  d="M28.0757 5.015C28.0757 5.015 27.7569 3.93671 28.2881 3.93671C28.8193 3.93671 30.944 4.04454 31.1565 4.26019C31.369 4.47585 33.8832 6.64024 32.3959 8.36551C30.9086 10.0908 32.3959 10.9244 32.3959 10.9244C32.3959 10.9244 33.4937 13.5335 32.4313 13.7492C31.369 13.9648 27.0113 12.7317 28.0757 10.7299C29.2307 8.55764 29.7681 5.12899 28.0757 5.015Z"
                  fill="#2F2E41"
                />
                <path
                  d="M63.4752 21.0452C63.4408 20.9386 63.1805 20.9855 63.1555 20.8901C63.1306 20.7951 63.3804 20.7153 63.572 20.4474C63.6065 20.3991 63.8242 20.0947 63.7407 19.9666C63.5825 19.7239 62.4813 20.3284 62.217 19.9892C62.159 19.9147 62.1352 19.7869 61.9624 19.5491C61.8936 19.4544 61.8495 19.4087 61.7968 19.4101C61.722 19.412 61.6953 19.507 61.5778 19.6789C61.4015 19.9369 61.3379 19.9045 61.2218 20.1158C61.1356 20.2727 61.1254 20.3729 61.0633 20.3788C60.9753 20.3872 60.939 20.1919 60.8315 20.1843C60.7218 20.1766 60.6121 20.3696 60.5577 20.5204C60.4556 20.8033 60.5188 21.0196 60.5329 21.2351C60.5481 21.4694 60.5123 21.8123 60.2616 22.2524L57.8965 26.0771C58.4044 25.2974 59.8462 23.1712 60.4271 22.3913C60.5948 22.1662 60.775 21.9401 61.0524 21.8976C61.3194 21.8566 61.6444 21.9907 62.0979 21.9829C62.1509 21.982 62.2983 21.9776 62.3341 21.8983C62.3638 21.8327 62.2902 21.7757 62.317 21.7141C62.3529 21.6314 62.5144 21.6669 62.7346 21.612C62.8899 21.5733 62.9954 21.5093 63.0861 21.4543C63.1135 21.4377 63.5209 21.1872 63.4752 21.0452Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M57.2805 21.9382C57.219 21.9245 57.1666 22.0678 57.1133 22.0527C57.0601 22.0377 57.0937 21.8902 57.0194 21.7175C57.006 21.6864 56.9216 21.4901 56.8356 21.4947C56.6725 21.5035 56.6472 22.2265 56.4069 22.2603C56.3541 22.2677 56.2854 22.2427 56.1205 22.2602C56.055 22.2671 56.0201 22.2759 56.0056 22.3025C55.9849 22.3403 56.0231 22.3811 56.0724 22.4892C56.1463 22.6514 56.1122 22.6738 56.1809 22.7926C56.2319 22.8808 56.2775 22.9148 56.2624 22.9475C56.241 22.9937 56.1361 22.9554 56.1014 23.0068C56.0661 23.0592 56.1277 23.1695 56.1849 23.2402C56.2923 23.3727 56.4151 23.4036 56.5234 23.4588C56.6411 23.5188 56.7965 23.6355 56.937 23.8874L58.1041 26.1692C57.8736 25.6912 57.2615 24.3595 57.052 23.845C56.9915 23.6965 56.9342 23.5415 56.9936 23.3911C57.0509 23.2462 57.2095 23.1231 57.3366 22.8949C57.3514 22.8682 57.3918 22.7935 57.3638 22.7528C57.3406 22.7191 57.2918 22.7393 57.2698 22.7082C57.2402 22.6664 57.3039 22.5962 57.3409 22.4706C57.367 22.3821 57.3665 22.3111 57.3661 22.2501C57.366 22.2316 57.3624 21.9564 57.2805 21.9382Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M58.4448 22.4949L58.4815 22.1512L58.504 22.1296C58.6081 22.0297 58.6732 21.9239 58.6977 21.8151C58.7015 21.7978 58.7046 21.7802 58.7076 21.7624C58.7198 21.6917 58.7349 21.6039 58.8019 21.5126C58.8394 21.4618 58.9385 21.3468 59.0407 21.387C59.0683 21.3975 59.0869 21.4156 59.0998 21.4349C59.1031 21.4315 59.1064 21.4282 59.11 21.4246C59.1541 21.381 59.185 21.3651 59.2148 21.3497C59.2376 21.3379 59.2612 21.3257 59.3012 21.2933C59.3187 21.2791 59.3328 21.2663 59.3446 21.2555C59.3805 21.223 59.4263 21.1849 59.4892 21.2C59.5558 21.2185 59.5786 21.283 59.5938 21.3257C59.6209 21.4019 59.6292 21.4542 59.6347 21.489C59.6367 21.5017 59.639 21.516 59.6407 21.5206C59.6553 21.5579 59.8384 21.5676 59.9072 21.5716C60.062 21.5801 60.196 21.5875 60.2282 21.6951C60.2513 21.7721 60.2032 21.856 60.0809 21.9512C60.0428 21.9809 60.0047 22.0013 59.9716 22.0166C59.992 22.0362 60.0082 22.0628 60.0092 22.0991C60.0115 22.1849 59.9247 22.2508 59.7514 22.2952C59.7083 22.3063 59.6504 22.3211 59.5746 22.3174C59.5389 22.3156 59.5076 22.31 59.481 22.3049C59.477 22.3203 59.4697 22.3363 59.4566 22.3515C59.418 22.3963 59.3557 22.4077 59.2711 22.3825C59.1778 22.3561 59.104 22.3202 59.0389 22.2886C58.9821 22.2611 58.9331 22.2376 58.892 22.2312C58.8155 22.2203 58.7441 22.2683 58.6588 22.3321L58.4448 22.4949Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M59.0553 20.537L58.7184 20.5881L58.6921 20.5715C58.5706 20.4946 58.4532 20.4575 58.3433 20.4612C58.3258 20.4618 58.3084 20.4632 58.2906 20.4647C58.2201 20.4707 58.1326 20.4781 58.0286 20.4356C57.9706 20.4117 57.836 20.3435 57.8483 20.233C57.8513 20.2032 57.8639 20.1803 57.879 20.1627C57.8749 20.1604 57.8709 20.158 57.8666 20.1554C57.8139 20.1231 57.7908 20.0968 57.7686 20.0715C57.7516 20.0521 57.734 20.032 57.6929 20.001C57.6749 19.9874 57.6592 19.9768 57.6459 19.9679C57.6059 19.941 57.558 19.9056 57.5564 19.8401C57.5571 19.77 57.6128 19.7312 57.6496 19.7055C57.7153 19.6596 57.7631 19.6381 57.7948 19.6239C57.8064 19.6187 57.8195 19.6128 57.8235 19.6099C57.8553 19.5862 57.8181 19.404 57.8044 19.3354C57.7733 19.1812 57.7464 19.0478 57.8407 18.9889C57.9082 18.9467 58.0004 18.9727 58.1222 19.0686C58.1601 19.0984 58.1893 19.1306 58.2122 19.1593C58.2257 19.1343 58.247 19.1116 58.2813 19.1014C58.3625 19.0775 58.4473 19.1459 58.5336 19.3048C58.5551 19.3443 58.5839 19.3974 58.5996 19.4728C58.6069 19.5083 58.6096 19.5404 58.6114 19.5679C58.6271 19.5679 58.6442 19.571 58.662 19.58C58.7145 19.6065 58.7412 19.6648 58.7386 19.7542C58.7371 19.8526 58.7216 19.9341 58.708 20.006C58.6962 20.0688 58.6863 20.1229 58.6906 20.1649C58.6996 20.2427 58.7634 20.3006 58.8459 20.3682L59.0553 20.537Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M59.1008 19.51L59.1374 19.1663L59.1599 19.1447C59.264 19.0448 59.3291 18.939 59.3536 18.8301C59.3575 18.8128 59.3605 18.7953 59.3636 18.7775C59.3757 18.7068 59.3909 18.6189 59.4578 18.5277C59.4953 18.4768 59.5944 18.3619 59.6966 18.4021C59.7242 18.4126 59.7428 18.4307 59.7558 18.45C59.759 18.4466 59.7623 18.4433 59.7659 18.4397C59.8101 18.3961 59.8409 18.3802 59.8707 18.3648C59.8936 18.353 59.9172 18.3408 59.9571 18.3084C59.9747 18.2941 59.9887 18.2813 60.0005 18.2706C60.0364 18.2381 60.0823 18.2 60.1451 18.2151C60.2117 18.2336 60.2346 18.2981 60.2497 18.3408C60.2768 18.4169 60.2851 18.4693 60.2906 18.5041C60.2926 18.5168 60.2949 18.531 60.2967 18.5357C60.3112 18.573 60.4943 18.5826 60.5632 18.5867C60.718 18.5952 60.8519 18.6026 60.8841 18.7102C60.9073 18.7871 60.8591 18.8711 60.7368 18.9663C60.6987 18.9959 60.6607 19.0164 60.6275 19.0317C60.6479 19.0512 60.6642 19.0779 60.6651 19.1141C60.6674 19.2 60.5806 19.2659 60.4073 19.3103C60.3643 19.3214 60.3063 19.3362 60.2305 19.3325C60.1948 19.3307 60.1636 19.3251 60.1369 19.3199C60.1329 19.3354 60.1256 19.3514 60.1125 19.3666C60.0739 19.4114 60.0116 19.4228 59.9271 19.3975C59.8337 19.3711 59.76 19.3352 59.6949 19.3037C59.638 19.2762 59.589 19.2527 59.5479 19.2463C59.4714 19.2354 59.4 19.2833 59.3147 19.3471L59.1008 19.51Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M58.0083 26.0967L57.9487 26.0369L57.8659 26.028C57.8663 26.0201 57.8658 26.0017 57.8652 25.9728C57.862 25.8147 57.8521 25.3334 57.9181 24.5939C57.9642 24.0776 58.0413 23.5536 58.1471 23.0362C58.2531 22.5179 58.3632 22.1322 58.4515 21.8223C58.5182 21.5885 58.5856 21.3668 58.6513 21.1508C58.8266 20.5737 58.9922 20.0286 59.0948 19.4069C59.1177 19.2681 59.1654 18.9792 59.0678 18.6382C59.0112 18.4404 58.9143 18.2542 58.7796 18.085L58.91 17.9782C59.0585 18.1652 59.1657 18.3713 59.2286 18.5909C59.3368 18.969 59.2849 19.2838 59.2599 19.4351C59.1556 20.0678 58.9883 20.6181 58.8112 21.2008C58.7458 21.416 58.6787 21.6367 58.6123 21.8696C58.5247 22.1766 58.4157 22.5589 58.3111 23.0706C58.2064 23.5818 58.1304 24.0994 58.0848 24.6091C58.0196 25.3393 58.0294 25.8135 58.0326 25.9692C58.0343 26.0524 58.0346 26.0698 58.0083 26.0967Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M58.4221 18.2806C58.4154 18.2791 58.4086 18.2774 58.4019 18.2754C58.2644 18.2363 58.1542 18.1226 58.0741 17.9375C58.0366 17.8505 58.0277 17.7589 58.0101 17.5762C58.0073 17.5481 57.9951 17.4056 58.0101 17.2167C58.0199 17.0933 58.033 17.0437 58.0661 17.0048C58.1028 16.9614 58.1523 16.9366 58.2047 16.9241C58.2061 16.9078 58.2113 16.8918 58.2218 16.8767C58.2648 16.8138 58.3369 16.8397 58.3759 16.8531C58.3956 16.8603 58.4202 16.8694 58.4478 16.8741C58.4912 16.8817 58.5171 16.874 58.5563 16.8625C58.5938 16.8514 58.6404 16.8377 58.7049 16.8388C58.8322 16.8406 58.9263 16.8986 58.9574 16.9177C59.121 17.0175 59.1774 17.1767 59.2428 17.3609C59.2558 17.3979 59.2989 17.5314 59.3089 17.7033C59.3162 17.8274 59.3002 17.8781 59.2818 17.9144C59.2443 17.9891 59.1869 18.0237 59.0443 18.0965C58.8954 18.1728 58.8207 18.2109 58.7594 18.2305C58.6169 18.276 58.5274 18.3045 58.4221 18.2806Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M16.2084 20.1454L16.099 16.6424C16.0973 16.5855 16.1193 16.5302 16.1595 16.4905C16.1997 16.4508 16.2548 16.43 16.3108 16.4334L19.0495 16.6002C19.1048 16.6035 19.1567 16.6303 19.1919 16.6738C19.2271 16.7172 19.243 16.7741 19.2356 16.8298L18.7723 20.3115C18.7583 20.4168 18.6655 20.4938 18.561 20.4868L16.3951 20.3414C16.3731 20.3399 16.3522 20.335 16.3328 20.327C16.2612 20.2976 16.211 20.2279 16.2084 20.1454Z"
                  fill="#6C63FF"
                />
                <path
                  d="M16.1024 16.3147C16.1408 16.3106 16.1921 16.3056 16.2537 16.3003C16.2372 16.2692 16.2305 16.2324 16.2375 16.1946L16.2864 15.9322C16.2991 15.8641 16.3532 15.8119 16.4209 15.8027C16.8241 15.748 18.2111 15.5995 19.0844 16.0017C19.1391 16.0268 19.1742 16.0821 19.176 16.1429L19.1839 16.4229C19.1849 16.4575 19.175 16.4896 19.1577 16.5162C19.2303 16.536 19.3026 16.5569 19.3744 16.5798C19.4194 16.5941 19.4516 16.6344 19.457 16.6819L19.4706 16.8012C19.4792 16.8768 19.4181 16.9419 19.3432 16.9367L16.0691 16.7123C15.9946 16.7072 15.9427 16.635 15.9606 16.5615L15.9983 16.4067C16.0105 16.3568 16.0521 16.3201 16.1024 16.3147Z"
                  fill="#3F3D56"
                />
                <path
                  d="M7.96651 10.2052L7.85711 6.70221C7.85533 6.64535 7.87735 6.58999 7.91753 6.55033C7.95774 6.51065 8.0129 6.48985 8.06889 6.49325L10.8075 6.65997C10.8629 6.66331 10.9148 6.69016 10.95 6.73361C10.9852 6.77705 11.0011 6.83392 10.9937 6.88964L10.5304 10.3713C10.5164 10.4766 10.4236 10.5536 10.3191 10.5466L8.15313 10.4012C8.13115 10.3997 8.11023 10.3948 8.09085 10.3868C8.01931 10.3575 7.96909 10.2877 7.96651 10.2052Z"
                  fill="#9EEDEF"
                />
                <path
                  d="M7.86051 6.37453C7.89882 6.37043 7.95015 6.3654 8.01176 6.36014C7.99529 6.32901 7.98855 6.2922 7.99559 6.25441L8.0445 5.99202C8.05719 5.92392 8.11125 5.87172 8.17893 5.86253C8.58217 5.8078 9.96914 5.65931 10.8425 6.06148C10.8971 6.08664 10.9323 6.14189 10.934 6.20276L10.942 6.48269C10.943 6.5173 10.9331 6.54938 10.9157 6.57598C10.9883 6.59579 11.0607 6.61675 11.1325 6.63959C11.1775 6.65391 11.2097 6.69421 11.2151 6.74175L11.2286 6.86098C11.2373 6.93665 11.1761 7.00169 11.1013 6.99656L7.82716 6.77213C7.75266 6.76703 7.70076 6.69486 7.71869 6.62128L7.75642 6.46648C7.76857 6.41661 7.81017 6.37991 7.86051 6.37453Z"
                  fill="#3F3D56"
                />
                <path
                  d="M50.9215 21.0311L50.8121 17.5282C50.8103 17.4713 50.8323 17.416 50.8725 17.3763C50.9127 17.3366 50.9679 17.3158 51.0239 17.3192L53.7625 17.4859C53.8178 17.4893 53.8698 17.5161 53.9049 17.5596C53.9401 17.603 53.9561 17.6599 53.9487 17.7156L53.4854 21.1973C53.4714 21.3026 53.3785 21.3796 53.2741 21.3726L51.1081 21.2272C51.0861 21.2257 51.0652 21.2207 51.0458 21.2128C50.9743 21.1834 50.9241 21.1136 50.9215 21.0311Z"
                  fill="#9EEDEF"
                />
                <path
                  d="M50.8155 17.2005C50.8538 17.1964 50.9051 17.1914 50.9667 17.1861C50.9503 17.155 50.9435 17.1182 50.9506 17.0804L50.9995 16.818C51.0122 16.7499 51.0662 16.6977 51.1339 16.6885C51.5371 16.6338 52.9241 16.4853 53.7975 16.8874C53.8521 16.9126 53.8873 16.9678 53.889 17.0287L53.897 17.3086C53.898 17.3433 53.8881 17.3753 53.8707 17.4019C53.9433 17.4218 54.0157 17.4427 54.0875 17.4656C54.1324 17.4799 54.1646 17.5202 54.17 17.5677L54.1836 17.6869C54.1922 17.7626 54.1311 17.8277 54.0562 17.8225L50.7821 17.5981C50.7076 17.593 50.6557 17.5208 50.6737 17.4472L50.7114 17.2924C50.7235 17.2426 50.7651 17.2059 50.8155 17.2005Z"
                  fill="#3F3D56"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_104">
                  <rect width="64" height="47" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

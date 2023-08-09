import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import styles from "./EventForm.module.css";
import validation from "./validation";
import axios from "axios";
import NavBarLateral from "../NavBarLateral/NavBarLateral";
import Cloudinary from "../Cloudinary/Cloudinary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get_company_id } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const URL = "http://localhost:3001/events/";
  const idUser = localStorage.getItem("user_id");
  const imageURl = useSelector((state) => state.imageUrl);
  const company = `http://localhost:3001/companies/${idUser}`;
  const empresa = useSelector((state) => state.companyById);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    dispatch(get_company_id(idUser));
  }, [dispatch, idUser]);

  const initialState = {
    name: "",
    date:  getCurrentDate(),
    ubication: "",
    image: imageURl,
    shortDescription: "",
    description: "",
    habilityRequired: [],
    salary: "",
    contact: [],
    email: "",
    num: "",
    CompanyId: "",
  };

  const optionshabilityRequired = [
    { value: "Actuación", label: "Actuación" },
    { value: "Animador/a", label: "Animador/a" },
    { value: "Bailarín/a", label: "Bailarín/a" },
    { value: "Blogger", label: "Blogger" },
    { value: "Cantante", label: "Cantante" },
    { value: "DJ", label: "DJ" },
    { value: "Influencer", label: "Influencer" },
    { value: "Locutor/a", label: "Locutor/a" },
    { value: "Mago/a", label: "Mago/a" },
    { value: "Músico/a", label: "Músico/a" },
    { value: "Modelo", label: "Modelo" },
    { value: "Presentador/a", label: "Presentador/a" },
    { value: "Promotor/a", label: "Promotor/a" },
  ];

  // Estados

  const [input, setInput] = useState(initialState);

  const [orientaciones, setOrientaciones] = useState([]);

  const [error, setError] = useState({});

  const [bnt, setBtn] = useState(false);

  if (company.plan === "FREE" && company.numberPosts === 2) {
    setBtn(true);
  } else if (company.plan === "BASICO" && company.numberPosts === 20) {
    setBtn(true);
  } else if (company.plan === "PREMIUM") {
    setBtn(false);
  }

  input.CompanyId = idUser;

  input.image = imageURl;

  // Hability

  const habilityValue = orientaciones.map((item) => item.value);

  input.habilityRequired = habilityValue;

  // Handles

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      setInput({ ...input, image: event.target.files[0] });
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
      setError(validation({ ...input, [name]: value }));
    }
  };

  const handleAddContact = () => {
    setInput((prevInput) => ({
      ...prevInput,
      contact: [input.email, input.num],
    }));
  };

  const handleChangeSelect = (selectedOptions) => {
    setOrientaciones(selectedOptions);
  };

  const handlerRedirectPlans = () => {
    navigate("/company/plans");
  };

  const handlerRedirectHome = () => {
    navigate("/home/company");
  };

  let messageEventCreated = "Se ha creado el evento con éxito.";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(input);
      const response = (await axios.post(URL, input)).data;
      console.log(response);
      if (response.id) {
        mensaje_success_Toast();
      } else {
        //if (response.error.response.data.error === "Has alcanzado el límite de eventos que puedes crear con tu plan actual.")
        mensaje_error_Toast();
      }
      if(Number(empresa.numberPosts) === (Number(empresa.conditionPlan) -1 )){
        axios.post(`http://localhost:3001/email/stopAdd/${empresa.email}`)
        .then((resp) => console.log(resp.data))
        .catch((error) => console.log(error))
      }
      if(empresa.numberPosts === empresa.conditionPlan){
      axios.post(`http://localhost:3001/email/stop/${empresa.email}`)
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error))
      }
      setInput(initialState);
    } catch (error) {
      console.log({ error });
    }
  };

  //Mostrar mensaje cuando crea un evento

  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: messageEventCreated,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(messageEventCreated, {
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
          width: "500px",
        },
      });
    }
  };
  let errorMessage = "Ha ocurrido un error al crear un evento.";
  let currentToastId = null;
  const mensaje_error_Toast = () => {
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
          width: "500px",
        },
      });
    }
  };

  return (
    <div>
      <NavBarLateral />
      <div>
        <ToastContainer />
      </div>
      {/* IMPLEMENTACIÓN DE MODAL QUE SE MUESTRA CUANDO LA EMPESA ALCANZA LA CANTIDAD MAXIMA DE POSTEOS (SIRVE PARA TODOS LOS CASOS) */}
      {empresa.numberPosts === empresa.conditionPlan ? (
        <div className={styles.containerModalOpened}>
          <div className={styles.modalOpened}>
            <h2>
              Has alcanzado la cantidad máxima de posteos correspondientes a tu plan actual.
            </h2>
            <h3>
              Te invitamos a adquirir un plan con mejores características.
            </h3>

            <div className={styles.botones}>
              <button
                className={styles.buttonConfirmar}
                onClick={handlerRedirectPlans}
              >
                Mejorar Plan
              </button>
              <button
                className={styles.buttonRegresar}
                onClick={handlerRedirectHome}
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerModalClosed}>
          <div className={styles.modalClosed}>
            <div>
              <h1>ERROR!</h1>
              <hr />
              <h2>Error</h2>
            </div>
          </div>
        </div>
      )}

      <section className={styles.section}>
        <div className={styles.formSection}>
          <form action="" method="POST" onSubmit={handleSubmit}>
            <h1 className={styles.title}>Crea tu Evento</h1>
            <section className={styles.inputs}>
              <div className={styles.div}>
                <article className={styles.coolinput}>
                  <label className={styles.text}> Nombre del evento</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    placeholder="Nombre de tu evento..."
                  />
                  <p className={error.name ? styles.error : ""}>
                    {error.name ? error.name : null}
                  </p>
                </article>
                <article className={styles.coolinput}>
                  <label className={styles.text}>Fecha del evento</label>
                  <input
                    type="date"
                    name="date"
                    value={input.date}
                    min={getCurrentDate()}
                    onChange={handleChange}
                  />
                </article>
                <article className={styles.coolinput}>
                  <label className={styles.text}> Locación del evento</label>
                  <input
                    type="text"
                    name="ubication"
                    value={input.ubication}
                    onChange={handleChange}
                    placeholder="Locación de tu evento..."
                  />
                  <p className={error.ubication ? styles.error : ""}>
                    {error.ubication ? error.ubication : null}
                  </p>
                </article>
              </div>
              <div className={styles.div}>
                <article className={styles.coolinput}>
                  <label htmlFor="" className={styles.text}>
                    Orientación Artística
                  </label>
                  <Select
                    isMulti
                    options={optionshabilityRequired}
                    className={styles.select}
                    value={orientaciones}
                    onChange={handleChangeSelect}
                    name="habilityRequired"
                  />
                  <p className={error.habilityRequired ? styles.error : ""}>
                    {error.habilityRequired ? error.habilityRequired : null}
                  </p>
                </article>
                <article className={styles.coolinput}>
                  <label htmlFor="image" className={styles.text}>
                    Imagen promocional
                  </label>
                  <Cloudinary />
                </article>
                <article className={styles.coolinput}>
                  <label htmlFor="num" className={styles.text}>
                    Número de contacto
                  </label>
                  <input
                    type="text"
                    id="num"
                    name="num"
                    value={input.num}
                    onChange={handleChange}
                    onBlur={handleAddContact}
                    placeholder="Número de contacto"
                  />
                </article>
              </div>
            </section>
            <section className={styles.inputsCont}>
              <div>
                <article className={styles.coolinput}>
                  <label htmlFor="email" className={styles.text}>
                    Email de contacto
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    onBlur={handleAddContact}
                    placeholder="Email de contacto"
                  />
                </article>
                <article className={styles.coolinput}>
                  <label htmlFor="" className={styles.text}>
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    value={input.description}
                    onChange={handleChange}
                    placeholder="Descripción de tu evento..."
                  ></textarea>
                </article>
              </div>
              <div>
                <article className={styles.coolinput}>
                  <label htmlFor="salary" className={styles.text}>
                    Salario
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={input.salary}
                    onChange={handleChange}
                    placeholder="Salario estimado del evento"
                  />
                </article>
                <article className={styles.coolinput}>
                  <label htmlFor="" className={styles.text}>
                    Descripción Corta
                  </label>
                  <textarea
                    name="shortDescription"
                    id=""
                    value={input.shortDescription}
                    onChange={handleChange}
                    placeholder="Descripción breve de tu evento..."
                  ></textarea>
                  <p className={error.shortDescription ? styles.error : ""}>
                    {error.shortDescription ? error.shortDescription : null}
                  </p>
                </article>
                <button type="submit" className={styles.btn} disabled={bnt}>
                  Crear Evento
                </button>
              </div>
            </section>
          </form>
        </div>
        <svg
          className={styles.img}
          width="567"
          height="624"
          viewBox="0 0 567 624"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M395 257L393.059 275.604L394.201 300L341.913 293.58L337 257L343.26 257.063L395 257Z"
            fill="#FFB6B6"
          />
          <path d="M422 594H411.16L406 549H422V594Z" fill="#FFB6B6" />
          <path
            d="M426.642 586.1L407.941 585V592.899L390.161 605.005C389.283 605.603 388.622 606.462 388.274 607.457C387.926 608.451 387.909 609.53 388.227 610.534C388.544 611.539 389.179 612.417 390.039 613.04C390.899 613.664 391.938 614 393.005 614H415.269L419.107 606.186L420.605 614H429L426.642 586.1Z"
            fill="#2F2E41"
          />
          <path d="M358 594H346.481L341 549H358V594Z" fill="#FFB6B6" />
          <path
            d="M361.699 586.1L343.454 585V592.899L326.108 605.005C325.252 605.603 324.606 606.462 324.267 607.457C323.927 608.451 323.911 609.53 324.221 610.534C324.531 611.539 325.151 612.417 325.989 613.04C326.828 613.664 327.842 614 328.883 614H350.604L354.348 606.186L355.81 614H364L361.699 586.1Z"
            fill="#2F2E41"
          />
          <path
            d="M427.952 554.763H427.827L425.612 480.761C427.045 477.929 427.772 474.777 427.729 471.587C427.686 468.396 426.874 465.266 425.364 462.475L425.047 461.887L425.869 457.982C426.925 452.965 426.441 447.737 424.483 443.013L422.417 373.983C429.797 324.967 394.626 293 394.626 293H341.938L330.627 332.828C323.149 407.489 324.506 480.245 336.372 550.733L336.049 550.9C334.884 551.313 334.384 552.966 334.933 554.594C335.481 556.222 336.87 557.208 338.035 556.796L365.859 555.804C367.024 555.392 367.524 553.738 366.976 552.11C366.427 550.482 365.039 549.497 363.874 549.909L361.982 550.889L366.017 479.48L365.569 466.437L366.491 451.64L370.756 385.081L386.9 466.929L403.39 555.587C402.935 556.009 402.616 556.562 402.475 557.174C402.333 557.786 402.376 558.428 402.598 559.014C402.819 559.6 403.209 560.104 403.716 560.459C404.222 560.813 404.822 561.002 405.436 561H427.952C428.352 561.001 428.748 560.921 429.118 560.764C429.488 560.608 429.824 560.378 430.107 560.089C430.39 559.799 430.615 559.455 430.768 559.076C430.921 558.698 431 558.292 431 557.882C431 557.472 430.921 557.066 430.768 556.687C430.615 556.308 430.39 555.964 430.107 555.675C429.824 555.385 429.488 555.155 429.118 554.999C428.748 554.843 428.352 554.763 427.952 554.763Z"
            fill="#2F2E41"
          />
          <path
            d="M386.5 162C370.76 162 358 149.016 358 133C358 116.984 370.76 104 386.5 104C402.24 104 415 116.984 415 133C415 149.016 402.24 162 386.5 162Z"
            fill="#FFB6B6"
          />
          <path
            d="M510.202 266.613C506.203 257.176 500.713 248.469 493.948 240.835C499.676 250.117 502.95 260.745 503.452 271.691C501.378 273.008 499.208 274.162 496.961 275.142C490.208 278.022 483.007 279.666 475.691 280C471.748 266.645 464.942 254.344 455.763 243.983C462.378 254.707 465.705 267.19 465.319 279.843C457.159 279.126 449.119 277.374 441.387 274.628C429.777 270.568 418.507 264.504 410.478 255.072C401.788 244.864 397.505 231.393 396.122 217.964C394.739 204.545 396.04 191 397.351 177.571C397.97 171.172 392.727 163.806 393.346 157.407H393.759C396.515 153.567 399.322 149.632 400.674 145.079C402.015 140.536 401.664 135.175 398.579 131.597C396.85 129.728 394.668 128.353 392.252 127.611C392.025 127.317 391.778 127.034 391.52 126.75C386.847 121.705 381.347 117.523 375.265 114.391C379.651 117.759 382.582 121.568 383.945 125.502C380.147 124.652 376.349 123.806 372.551 122.963C371.282 121.594 369.945 120.292 368.547 119.06C366.514 117.266 365.843 117.13 363.418 115.441C365.376 117.192 366.894 119.393 367.845 121.861C362.964 120.613 358.082 118.735 355.543 114.465C351.333 107.404 356.338 97.8777 363.325 93.6601C368.407 90.7414 374.263 89.5206 380.065 90.1701C385.868 90.8196 391.322 93.3067 395.658 97.2797C405.761 89.7153 420.148 89.8412 431.387 95.4961C438.806 99.3965 445.198 105.049 450.025 111.978C447.225 111.613 444.406 111.413 441.583 111.38C445.557 111.972 449.341 113.494 452.636 115.829C454.094 118.13 455.43 120.508 456.64 122.952C457.435 124.558 458.185 126.184 458.89 127.831C463.214 137.84 466.031 148.499 468.952 159.033C472.358 171.308 476.011 183.667 482.389 194.651C492.168 211.354 507.594 223.867 525.785 229.85C527.302 243.731 520.636 257.307 510.202 266.613Z"
            fill="#2F2E41"
          />
          <path
            d="M358.062 181.565L363.594 179.455L370.569 168L395.414 170.062L401.452 182.345L416 193.629L409.638 227.661L399.754 269L333.589 260.599L333.659 229.48C333.659 229.48 321.703 204.894 341.016 195.682L358.062 181.565Z"
            fill="#6C63FF"
          />
          <path
            d="M255.991 289.306C257.267 289.831 258.64 290.063 260.013 289.985C261.386 289.908 262.726 289.522 263.938 288.856C265.15 288.191 266.205 287.26 267.028 286.131C267.851 285.002 268.423 283.701 268.704 282.321L342 236.848L328.603 221L260.767 270.682C258.475 270.353 256.144 270.898 254.217 272.213C252.289 273.528 250.9 275.523 250.311 277.818C249.722 280.114 249.975 282.551 251.022 284.669C252.069 286.786 253.837 288.436 255.991 289.306Z"
            fill="#FFB6B6"
          />
          <path
            d="M367.306 215.273C367.306 215.273 370.833 218.915 361.984 224.904C354.9 229.699 323.302 253.394 312.1 257.142C312.241 258.831 311.83 260.52 310.932 261.943C310.034 263.365 308.701 264.441 307.142 265L297 242.121C299.195 236.891 302.707 238.102 304.554 239.288L316.803 229.832L346.881 199L364.803 212.593L367.306 215.273Z"
            fill="#6C63FF"
          />
          <path
            d="M396 98C399.509 103.072 401.776 108.869 402.624 114.94C403.473 121.01 402.88 127.191 400.891 133"
            fill="#FD6584"
          />
          <path
            d="M540 613.5C540 613.697 539.971 613.892 539.912 614.075C539.854 614.257 539.768 614.423 539.659 614.562C539.551 614.701 539.422 614.812 539.281 614.887C539.139 614.962 538.987 615.001 538.834 615H264.166C263.857 615 263.56 614.842 263.342 614.561C263.123 614.279 263 613.898 263 613.5C263 613.102 263.123 612.721 263.342 612.439C263.56 612.158 263.857 612 264.166 612H538.834C538.987 611.999 539.139 612.038 539.281 612.113C539.422 612.188 539.551 612.299 539.659 612.438C539.768 612.577 539.854 612.743 539.912 612.925C539.971 613.107 540 613.303 540 613.5Z"
            fill="#CCCCCC"
          />
          <path
            d="M435.173 342.937C435.856 343.183 436.416 343.696 436.73 344.364C437.044 345.032 437.086 345.8 436.847 346.5L398.638 459.131C398.397 459.83 397.895 460.403 397.242 460.724C396.589 461.045 395.838 461.088 395.154 460.843L172.827 381.064C172.144 380.818 171.584 380.304 171.27 379.636C170.956 378.968 170.914 378.2 171.153 377.5L209.363 264.869C209.603 264.17 210.106 263.597 210.759 263.276C211.412 262.955 212.163 262.912 212.847 263.157L435.173 342.937Z"
            fill="#E6E6E6"
          />
          <path
            d="M378.853 445C383.228 444.999 387.495 443.614 391.069 441.036C394.642 438.458 397.346 434.814 398.809 430.603L419.791 369.985C421.66 364.586 421.352 358.65 418.935 353.483C416.518 348.316 412.189 344.342 406.902 342.433L294.54 301.883C273.507 294.319 250.394 295.583 230.272 305.398C210.15 315.213 194.663 332.777 187.209 354.236C185.34 359.635 185.648 365.571 188.065 370.738C190.482 375.905 194.811 379.88 200.098 381.788L371.827 443.765C374.083 444.581 376.459 444.999 378.853 445Z"
            fill="white"
          />
          <path
            d="M229.555 324.979L330.715 360.894C332.141 361.4 333.907 360.048 334.661 357.874C335.415 355.7 334.87 353.527 333.445 353.021L232.285 317.106C230.86 316.6 229.093 317.952 228.339 320.126C227.586 322.3 228.129 324.475 229.555 324.979Z"
            fill="#E6E6E6"
          />
          <path
            d="M221.555 347.979L322.715 383.894C324.141 384.4 325.907 383.048 326.661 380.874C327.415 378.7 326.87 376.527 325.445 376.021L224.285 340.106C222.86 339.6 221.093 340.952 220.339 343.126C219.585 345.3 220.13 347.473 221.555 347.979Z"
            fill="#E6E6E6"
          />
          <path
            d="M343.576 373.337C342.48 376.426 341.948 379.687 342.004 382.964C342.026 384.464 342.174 385.959 342.447 387.434C343.317 392.199 345.43 396.65 348.571 400.336C351.713 404.022 355.772 406.814 360.338 408.428C364.904 410.042 369.815 410.421 374.575 409.528C379.335 408.635 383.775 406.501 387.445 403.341C387.816 403.024 388.177 402.696 388.528 402.359C391.526 399.486 393.834 395.971 395.28 392.078C396.725 388.185 397.271 384.015 396.875 379.881C396.479 375.747 395.153 371.757 392.995 368.209C390.837 364.661 387.904 361.648 384.415 359.396C380.927 357.144 376.974 355.711 372.853 355.205C368.732 354.699 364.55 355.133 360.62 356.474C356.691 357.816 353.116 360.029 350.164 362.95C347.212 365.87 344.96 369.421 343.576 373.337Z"
            fill="#E4E4E4"
          />
          <path
            d="M368.5 387C365.462 387 363 384.538 363 381.5C363 378.462 365.462 376 368.5 376C371.538 376 374 378.462 374 381.5C374 384.538 371.538 387 368.5 387Z"
            fill="#FD6584"
          />
          <path
            d="M388 402.999C386.666 399.807 385.089 394.937 381.436 396.71C379.631 397.516 376.399 399.967 375.086 397.117L364.81 374.943C364.615 374.529 364.342 374.16 364.007 373.857C363.672 373.554 363.281 373.323 362.858 373.177C362.435 373.032 361.988 372.975 361.544 373.01C361.099 373.045 360.666 373.172 360.269 373.382L342 383.235C342.021 384.763 342.168 386.287 342.438 387.79L386.93 404L388 402.999Z"
            fill="#3F3D56"
          />
          <path
            d="M384.02 338.321C385.309 337.812 386.473 337.023 387.429 336.008C388.385 334.994 389.111 333.779 389.554 332.449C389.998 331.119 390.148 329.707 389.996 328.311C389.843 326.916 389.391 325.571 388.671 324.373L412 240.17L391.532 238L375.036 321.45C373.132 322.811 371.786 324.834 371.253 327.135C370.719 329.436 371.037 331.855 372.144 333.935C373.251 336.014 375.072 337.609 377.26 338.418C379.449 339.226 381.854 339.192 384.02 338.321Z"
            fill="#FFB6B6"
          />
          <path
            d="M414.829 193.198C414.829 193.198 419.761 193.382 417.323 203.919C415.371 212.354 408.203 265.272 402.598 275.823C403.809 276.953 404.622 278.468 404.91 280.129C405.198 281.791 404.944 283.504 404.189 285L381.855 275.455C380.001 270.12 381.437 265.275 383.547 264.846L386.156 249.413L390.001 197.641L411.266 193L414.829 193.198Z"
            fill="#6C63FF"
          />
          <path
            d="M211.996 415.675L243.238 416.996C243.905 417.025 244.57 416.9 245.184 416.63C245.797 416.36 246.343 415.951 246.779 415.435C247.21 414.932 247.524 414.336 247.697 413.692C247.871 413.047 247.899 412.371 247.779 411.714C245.382 398.366 246.08 384.631 249.819 371.608C250.108 370.613 250.049 369.545 249.654 368.588C249.258 367.632 248.549 366.845 247.648 366.362C234.852 359.574 222.862 359.23 212.013 365.337C211.444 365.653 210.95 366.091 210.564 366.622C210.178 367.152 209.91 367.762 209.779 368.409C206.955 382.619 206.278 397.187 207.772 411.606C207.875 412.691 208.36 413.701 209.137 414.449C209.913 415.197 210.929 415.633 211.996 415.675Z"
            fill="#6C63FF"
          />
          <path
            d="M213.122 394.914L236.693 395.998C236.984 396.011 237.274 395.961 237.547 395.85C237.82 395.739 238.071 395.57 238.285 395.351C238.499 395.133 238.672 394.869 238.795 394.576C238.917 394.283 238.986 393.967 238.998 393.644C239.01 393.321 238.965 392.999 238.865 392.696C238.765 392.393 238.612 392.114 238.415 391.877C238.218 391.639 237.98 391.447 237.716 391.312C237.453 391.176 237.167 391.099 236.877 391.086L213.305 390.002C213.014 389.989 212.724 390.039 212.451 390.15C212.179 390.261 211.928 390.431 211.714 390.649C211.5 390.868 211.328 391.131 211.205 391.424C211.083 391.717 211.014 392.034 211.002 392.356C210.99 392.679 211.035 393.001 211.135 393.304C211.235 393.607 211.388 393.885 211.585 394.122C211.782 394.36 212.019 394.552 212.282 394.688C212.546 394.823 212.831 394.9 213.122 394.914Z"
            fill="white"
          />
          <path
            d="M214.122 386.914L237.695 387.998C238.282 388.025 238.854 387.792 239.286 387.351C239.718 386.909 239.974 386.295 239.998 385.644C240.022 384.993 239.813 384.357 239.415 383.878C239.018 383.398 238.465 383.113 237.878 383.086L214.305 382.002C213.718 381.975 213.146 382.208 212.714 382.649C212.282 383.091 212.026 383.705 212.002 384.356C211.978 385.007 212.187 385.643 212.585 386.122C212.982 386.602 213.535 386.887 214.122 386.914Z"
            fill="white"
          />
          <path
            d="M324 317C318.477 317 314 312.523 314 307C314 301.477 318.477 297 324 297C329.523 297 334 301.477 334 307C334 312.523 329.523 317 324 317Z"
            fill="#3F3D56"
          />
        </svg>
      </section>

      {/* IMPLEMENTACION DE UN MODAL INVASIVO QUE APARECE CUANDO EL USUARIO LLEGA A LA CANTIDAD MAXIMA DE POSTEOS */}
      {/* empresa.numberPosts < empresa.conditionPlan ? Renderizar todo : Rendirizar el modal*/}
      {/* empresa.numberPosts === empresa.conditionPlan */}
    </div>
  );
};

export default EventForm;

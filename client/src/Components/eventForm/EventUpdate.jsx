import NavBarLateral from "../NavBarLateral/NavBarLateral"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import axios from "axios";
import Cloudinary from "../Cloudinary/Cloudinary";
import styles from "./EventUpdate.module.css";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { getAllCompanies, get_company_by_id } from "../../redux/actions"

const EventUpdate = () => {

    const {eventId} = useParams();

    const URL = `https://deploy-sprint-2-backend.onrender.com/events/${eventId}`;
  
    const idUser = localStorage.getItem("user_id");
    
    const imageURl = useSelector((state) => state.imageUrl);

    const empresa = useSelector((state) => state.companyById);
  
    const initialState = {
      name: "",
      date: "",
      ubication: "",
      image: imageURl,
      shortDescription: "",
      description: "",
      habilityRequired: [],
      salary: "",
      contact: [],
      email: "",
      num: "",
      active: true,
      CompanyId: idUser,
    };
  
      const optionshabilityRequired = [
          { value: 'Actuación', label: 'Actuación' },
          { value: 'Animador/a', label: 'Animador/a' },
          { value: 'Bailarín/a', label: 'Bailarín/a' },
          { value: 'Blogger', label: 'Blogger' },
          { value: 'Cantante', label: 'Cantante' },
          { value: 'DJ', label: 'DJ' },
          { value: 'Influencer', label: 'Influencer' },
          { value: 'Locutor/a', label: 'Locutor/a' },
          { value: 'Mago/a', label: 'Mago/a' },
          { value: 'Músico/a', label: 'Músico/a' },
          { value: 'Modelo', label: 'Modelo' },
          { value: 'Presentador/a', label: 'Presentador/a' },
          { value: 'Promotor/a', label: 'Promotor/a' },
        ];
      
      // Estados
  
      const [input, setInput] = useState(initialState)
  
      const [orientaciones, setOrientaciones] = useState([])
  
      initialState.idCompany = idUser;
      initialState.image = imageURl;
  
      input.idCompany = idUser;
      input.image = imageURl;
  
      // Hability
  
      const habilityValue = orientaciones.map(item => item.value);
  
      input.habilityRequired = habilityValue;

      // Estatus

      const [isActive, setIsActive] = useState(true)

      const handleStatus = () => {
        setIsActive(!isActive);
      };

      input.active = isActive;

      console.log(input.active)
            
      // Handlers
  
      const handleChange = (event) => {
          const { name, value } = event.target;
          if (name === "image") {
            setInput({ ...input, image: event.target.files[0] });
          } else {
            setInput((prevInput) => ({
              ...prevInput,
              [name]: value,
            }));
        }
    }
        const handleAddContact = () => {
          setInput((prevInput) => ({
            ...prevInput,
            contact: [input.email, input.num], 
          }));
        };
  
        const handleChangeSelect = (selectedOptions) => {
          setOrientaciones(selectedOptions);
        };

    // Submit 

    const filledFields = Object.keys(input).reduce((acc, key) => {
        const value = input[key];
        if (value !== "" && value !== null && value.length !== 0 && value !== 0) {
          acc[key] = value;
        }
        return acc;
      }, {});

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        await axios.put(URL, filledFields)

        //email para enviar cuando se edite el evento
        // const emailToCompany = axios.post(`https://deploy-sprint-2-backend.onrender.com/email/handlerCompanyEditedEvent/${empresa.email}`)
        // .then((resp) => console.log(resp.data))
        // .catch((error) => console.log(error));

          setInput(initialState);
        } catch (error) {
          console.log({ error });
        }
      };

    return(
        <section className={styles.updateSection}>
            <NavBarLateral/>
            <div className={styles.formSection}>
            <form action="" method="PUT" onSubmit={handleSubmit}>
                <h1 className={styles.title}>Actualiza tu Evento</h1>
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
                        </article>
                        <article className={styles.coolinput}>
                        <label className={styles.text}>Fecha del evento</label>
                        <input
                            type="date"
                            name="date"
                            value={input.date}
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

                    </article>
                    <article className={styles.coolinput}>
                    <label htmlFor="image" className={styles.text}>
                        Imagen promocional
                    </label>
                    <Cloudinary />
                    </article>
                    <article className={styles.coolinput}>
                    <label htmlFor="num" className={styles.text}>
                        Número telefónico
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
                        Email
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
                    <article className={styles.coolinput1}>
                        <label htmlFor="" className={styles.text}>Estatus del Evento</label>
                        <input type="button" onClick={handleStatus} value={isActive ? 'Activo' : 'Desactivo'}/>
                    </article>
                    <article className={styles.coolinput}>
                    <label htmlFor="" className={styles.text}>
                        Descripción
                    </label>
                    <textarea
                        name="description"
                        id=""
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
                    </article>
                    <button type="submit" className={styles.btn} >
                    Actualizar datos
                    </button>
                </div>
                </section>
            </form>
            </div>
            <article className={styles.svg}>
                <svg width="400" height="300" viewBox="0 0 1417 418" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2525.11 142.197C2327.85 43.9905 2086.61 -4.64757 1825.5 1.13836C1564.39 6.92428 1292.53 66.9318 1037.06 175.17C781.599 283.409 551.466 436.092 369.639 617.976C187.813 799.861 60.6533 1004.58 0.855708 1211.71L1111.64 1191.86C1126.88 1139.05 1159.31 1086.85 1205.66 1040.48C1252.02 994.109 1310.7 955.181 1375.83 927.585C1440.96 899.988 1510.28 884.689 1576.85 883.214C1643.42 881.738 1704.93 894.139 1755.22 919.178L2525.11 142.197Z" fill="#7E7193"/>
                </svg>
            </article>


        </section>
    )
}

export default EventUpdate
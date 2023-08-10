import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import Select from "react-select"
import Styles from "./FormTalento.module.css"
import axios from "axios"
import validationTalentos from "./validationTalentos"
import Cloudinary from "../Cloudinary/Cloudinary"
import NavBarLateral from "../NavBarLateral/NavBarLateral"
import { get_talent_by_id } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormTalento = () => {

    const URL = `https://casting-app-thdg.onrender.com/forms/talents`

    const idUser = localStorage.getItem("user_id")

    const dispatch = useDispatch()

    const imageURl = useSelector((state) => state.imageUrl)

    const talentData = useSelector((state) => state.talentById)

    useEffect(() => {
      if (idUser) {
        dispatch(get_talent_by_id(idUser));
      }
    }, [dispatch, idUser]);


    const optionshability = [
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

      const initialState = {
        id: "",
        email: "",
        name: "",
        dni: 0,
        password: "",
        image: "",
        aboutMe: "",
        nationality: "", 
        ubication: "",
        contexture: "",
        weight: 0,
        height: 0,
        gender: "",
        ethnicOrigin: "",
        socialNetwork: [""],
        contact: [""],
        hability: [""],
      };
      

    // States

    const [input, setInput] = useState(initialState)

    const [orientaciones, setOrientaciones] = useState([])

    const [error, setError] = useState({})

    useEffect(() => {
        const filteredObject = Object.entries(talentData).reduce((acc, [key, value]) => {
            if (value !== null) {
              acc[key] = value;
            }
            return acc;
          }, {});
        
          setInput((estadoAnterior) => ({
            ...estadoAnterior,
            ...filteredObject,
          }));
    },[talentData])


    // Asignamiento 

    const habilityValue = orientaciones.map(item => item.value);

    input.hability = habilityValue;

    input.image = imageURl;

    input.id = idUser;


    // Handles

    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target;
        setInput({...input, [name]: value})
        setError(validationTalentos({ ...input, [name]: value }))
    }

    const handleChangeSelect = (selectedOptions) => {
        setOrientaciones(selectedOptions);
      };

      const handleSocialNetworkChange = (index, event) => {
        const { value } = event.target;
        setInput((prevInput) => {
          const updatedSocialNetwork = [...prevInput.socialNetwork];
          updatedSocialNetwork[index] = value;
          return { ...prevInput, socialNetwork: updatedSocialNetwork };
        });
      };

      const handleContactChange = (index, event) => {
          const {value} = event.target;
          setInput((prevInput) => {
              const updatedCOntact = [...prevInput.contact];
              updatedCOntact[index] = value;
              return {...prevInput, contact: updatedCOntact}
            })
        }
        
        const filledFields = Object.keys(input).reduce((acc, key) => {
            const value = input[key];
            if (value !== "" && value !== null && value.length !== 0 && value !== 0) {
                acc[key] = value;
            }
            return acc;
        }, {});
        
    let messageUpdated = "Se ha actualizado el perfil correctamente."; 
    const hanldeSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = (await (axios.patch(URL, filledFields))).data;
            console.log(response);
            if(response === messageUpdated){
                mensaje_success_Toast();
            }  
            
            const emailToCompany = axios.post(`https://casting-app-thdg.onrender.com/email/editedPerfilTalent/${talentData.email}`)
            .then((resp) => console.log(resp.data))
            .catch((error) => console.log(error));

            setInput(initialState)
        } catch (error) {
            mensaje_error_Toast();
            console.log({error: error.message})
        }
    }

      //Mostrar mensaje cuando se actualizan los datos del perfil
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: messageUpdated,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(messageUpdated, {
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

  let errorMessage = "Ha ocurrido un error al actualizar los datos de tu perfil.";
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
    return(
        <div>
            <NavBarLateral/>
            <ToastContainer />
            <section className={Styles.section}>
                <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg1}>
                <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
                </svg>
                
                <form action="" className={Styles.form} method="POST" onSubmit={hanldeSubmit} encType="multipart/form-data">
                    <div className={Styles.div}>
                        <h2>Datos personales</h2>
                        <article className={Styles.coolinput}>
                            <label htmlFor="name" className={Styles.text}>Nombre Completo</label>
                            <input type="text" name="name" id="name" value={input.name} onChange={handleChange}/>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="email" className={Styles.text}>Email</label>
                            <input type="text" name="email" id="email" value={input.email} onChange={handleChange} autoComplete="off"/>
                            <p className={error.email ? Styles.error : ""}>{error.email ? error.email : null} </p>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="contact" className={Styles.text}>Número de contacto</label>
                            <input type="text" name="contact" id="contact" value={input.contact[0] || ""} onChange={(e) => handleContactChange(0, e)}/>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="nationality" className={Styles.text}>Nacionalidad</label>
                            <input type="text"  name="nationality" id="nationality" value={input.nationality} onChange={handleChange}/>
                        </article>
                        <article className={Styles.coolinput}>
                                <label htmlFor="" className={Styles.text}>Descripción</label>
                                <textarea name="aboutMe" id="" value={input.aboutMe} onChange={handleChange} placeholder="Descripción de tu perfil..."></textarea>
                            </article>
                    </div>
                    <div className={Styles.div}>
                        <article className={Styles.img}>
                                {input.image ? <img src={imageURl} alt="Foto de Perfil" /> : <svg width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_497_36)">
                                <g clipPath="url(#clip0_497_36)">
                                <rect x="3" y="1" width="181" height="181" rx="90.5" fill="#F5F5F5"/>
                                <rect x="57.2197" y="30.0244" width="72.5612" height="72.5612" rx="36.2806" fill="#4B31A1"/>
                                <rect x="-42.3506" y="121.734" width="271.702" height="271.702" rx="135.851" fill="#4B31A1"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_d_497_36" x="0.581292" y="0.193764" width="185.837" height="185.837" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0.806236" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_497_36"/>
                                <feOffset dy="1.61247"/>
                                <feGaussianBlur stdDeviation="0.806236"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_36"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_497_36" result="shape"/>
                                </filter>
                                <clipPath id="clip0_497_36">
                                <rect x="3" y="1" width="181" height="181" rx="90.5" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>}
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Subir Imágen</label>
                            <Cloudinary/>
                        </article>
                        <article className={Styles.coolinput}>
                                    <label htmlFor="" className={Styles.text}>Orientación artística</label>
                                    <Select
                                    isMulti 
                                    options={optionshability}
                                    className={Styles.select}
                                    value={orientaciones}
                                    onChange={handleChangeSelect}
                                    name="hability"/>
                        </article> 
                        <article className={Styles.charSec}>
                                <article className={Styles.coolinput}>
                                    <label htmlFor="ethnicOrigin" className={Styles.text}>Origen étnico</label>
                                    <select name="" id="" onChange={handleChange} value={input.ethnicOrigin}>
                                        <option value="" disabled>Tipos</option>
                                        <option value="Caucásico">Caucásico</option>
                                        <option value="Afroamericano">Afroamericano</option>
                                        <option value="Asiático">Asiático</option>
                                        <option value="Hispano">Hispano</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </article>
                            <div className={Styles.char}>
                                <article className={Styles.coolinput}>
                                    <label htmlFor="height" className={Styles.text}>Altura</label>
                                    <input type="number" id="height" name="height" onChange={handleChange} value={input.height}/>
                                </article>
                                <article className={Styles.coolinput}>
                                    <label htmlFor="weight" className={Styles.text}>Peso</label>
                                    <input type="number"  id="weight" name="weight" onChange={handleChange} value={input.weight} />
                                </article >
                                <article className={Styles.coolinput}>
                                    <label htmlFor="" className={Styles.text}>Contextura</label>
                                    <select name="contexture" id="" value={input.contexture} onChange={handleChange}>
                                        <option value="" disabled>Tipos</option>
                                        <option value="Ectomorfo" >Ectomorfo</option>
                                        <option value="Endomorfo" >Endomorfo</option>
                                        <option value="Mesomorfo" >Mesomorfo</option>
                                    </select>
                                </article>
                            </div>
                            <div>
                                <article className={Styles.coolinput1}>
                                    <label htmlFor="gender" className={Styles.text}>Género</label>
                                    <select name="gender" id="gender" value={input.gender} onChange={handleChange}>
                                        <option value="" disabled>Género</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </article>
                                
                            </div>
                        </article>
                        <button type="submit" className={Styles.btn}>Enviar Datos</button>
                    </div>
                    <div className={Styles.div}>
                        <h2>Información de Contacto</h2>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Facebook</label>
                            <input type="text" name="facebook" value={input.socialNetwork[0] || ""} onChange={(e) => handleSocialNetworkChange(0, e)} />
                            </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Instagram</label>
                            <input type="text" name="instagram" value={input.socialNetwork[1] || ""} onChange={(e) => handleSocialNetworkChange(1, e)} />
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="twitter" className={Styles.text}>Twitter</label>
                            <input type="text" name="twitter" id="twitter" value={input.socialNetwork[2] || ""} onChange={(e) => handleSocialNetworkChange(2, e)} />
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="ubication" className={Styles.text}>Ubicación</label>
                            <input type="text" id="ubication" name="ubication" value={input.ubication} onChange={handleChange}/>
                            <p className={error.ubication ? Styles.error : ""}>{error.ubication ? error.ubication : null}</p>
                        </article>
                        
                        <article className={Styles.coolinput}>
                            <label htmlFor="dni" className={Styles.text}>Documento de Identidad</label>
                            <input type="text" name="dni" id="dni" value={input.dni} onChange={handleChange}/>
                        </article>
                    </div>
                </form>
                <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg2}>
                    <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
                </svg>
            </section>
        </div>
    )
}

export default FormTalento
import { useEffect, useState } from "react"
import Styles from "./FormEmpresas.module.css"
import axios from "axios"
import validationEmpresas from "./validationEmpresas"
import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Cloudinary from "../Cloudinary/Cloudinary"
import NavBarLateral from "../NavBarLateral/NavBarLateral"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCompanies, get_company_by_id } from "../../redux/actions";

const FormEmpresa = () => {
const navigate = useNavigate();
    const idUser = localStorage.getItem("user_id");

    const imageURL = useSelector((state) => state.imageUrl)

    const dispatch = useDispatch();
    const miEmpresa = useSelector((state) => state.companyDetail);
    // console.log(miEmpresa);
    const [loading, setLoading] = useState(true); // Bandera de carga

    const empresa = useSelector((state) => state.companyById);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          await dispatch(get_company_by_id(idUser)); // Espera a que los datos se obtengan
          setLoading(false); // Cambia la bandera de carga cuando los datos están listos
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); // Cambia la bandera de carga incluso si hay un error
        }
      };
  
      fetchData();
    }, [dispatch]);
  useEffect(() => {
      if (!loading && miEmpresa ) {
            const empresa= miEmpresa;
            
            setInput({...empresa})}
    }, [loading, miEmpresa]);

 const URL = "http://localhost:3001/forms/companies"

        const initialState = {
            id: "",
            description: "",
            descriptionShort: "",
            name: "",
            password: "", 
            email: "",
            image: "",
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            phoneNumber: "",
            country: "",
            domain: "",
            industryMain: "",
        }

    const [input, setInput] = useState(initialState)

    const [error, setError] = useState({})

    input.id = idUser;

    input.image = imageURL;


    const handleChange = (event) => {

        const {name, value} = event.target;
        setInput({...input, [name]: value})
        setError(validationEmpresas({...input, [name]: value}))
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
          console.log(input)
            console.log(filledFields);
            const response = (await axios.patch(URL, filledFields)).data;
            // console.log("En actualizacion");
            //console.log(response);
            if(response === messageUpdated){
                mensaje_success_Toast();
            }           
            const emailToCompany = axios.post(`http://localhost:3001/email/editedPerfilCompany/${empresa.email}`)
                .then((resp) => console.log(resp.data))
                .catch((error) => console.log(error));
            setInput(initialState)
            navigate("/home/company")
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
                
                <form action="" className={Styles.form} method="POST" onSubmit={hanldeSubmit} >
                    <div className={Styles.div}>
                        <article className={Styles.coolinput}>
                            <label htmlFor="name" className={Styles.text}>Nombre de la Empresa</label>
                            <input type="text" name="name" id="name" value={input.name} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.name ? Styles.error : ""}>
                    {error.name ? error.name : null}
                  </p>
                        </article>
                        <article className={Styles.coolinput}>
                                <label htmlFor="industryMain" className={Styles.text}>Industria Principal</label>
                                <input type="text" name="industryMain" id="industryMain" value={input.industryMain} autoComplete="off" onChange={handleChange}/>
                                <p className={error.industryMain ? Styles.error : ""}>
                    {error.industryMain ? error.industryMain : null}
                  </p>
                            </article>
                            <article className={Styles.coolinput}>
                            <label htmlFor="phoneNumber" className={Styles.text}>Número Telefónico</label>
                            <input type="number" name="phoneNumber" id="phoneNumber" value={input.phoneNumber} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.phoneNumber ? Styles.error : ""}>
                    {error.phoneNumber ? error.phoneNumber : null}
                  </p>
                        </article>
                        {/* <article className={Styles.coolinput}>
                            <label htmlFor="password" className={Styles.text}>Contraseña</label>
                            <input type="password" name="password" id="password" value={input.password} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.password ? Styles.error : ""}>{error.password ? error.password : null}</p>
                        </article> */}
                        <article className={Styles.coolinput}>
                            <label htmlFor="email" className={Styles.text}>Email</label>
                            <input type="text" name="email" id="email" value={input.email} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.email ? Styles.error : ""}>{error.email ? error.email : null}</p>
                        </article>

                            <article className={Styles.coolinput}>
                            <label htmlFor="country" className={Styles.text}>Ubicación</label>
                            <input type="text" id="country" name="country" value={input.country} autoComplete="off"  onChange={handleChange} />
                        </article>
                        


                    </div>
                    <div className={Styles.div}>
                        <section className={Styles.chart}>
                            <article className={Styles.img}>
                                    {input.image ? <img src={imageURL} alt="Foto de Perfil" /> : <svg width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <label htmlFor="logo" className={Styles.text}>Subir Imágen</label>
                                <Cloudinary/>
                            </article>
                           

                            <article className={Styles.coolinput}>
                                <label htmlFor="descriptionShort" className={Styles.text}>Descripción Corta</label>
                                <textarea name="descriptionShort" id="descriptionShort" value={input.descriptionShort} autoComplete="off"  onChange={handleChange} placeholder="Descripción breve de tu empresa..."></textarea>
                                <p className={error.descriptionShort ? Styles.error : ""}>{error.descriptionShort ? error.descriptionShort : null}</p>
                        </article>
                        <article className={Styles.coolinput}>
                                <label htmlFor="description" className={Styles.text}>Descripción</label>
                                <textarea name="description" id="description" value={input.description} autoComplete="off"  onChange={handleChange} placeholder="Descripción de tu empresa..."></textarea>
                                <p className={error.description ? Styles.error : ""}>{error.description ? error.description : null}</p>
                        </article>
                        <button type="submit" className={Styles.btn}>Enviar Datos</button>
                        </section>
                    </div>
                    <div className={Styles.div}>
                        <article className={Styles.coolinput}>
                                <label htmlFor="logo" className={Styles.text}>Página Web</label>
                                <input type="text" name="domain" id="domain" value={input.domain} autoComplete="off"  onChange={handleChange}/>
                                <p className={error.domain ? Styles.error : ""}>{error.domain ? error.domain : null}</p>
                            </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Facebook</label>
                            <input type="text" name="facebook" value={input.facebook} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.facebook ? Styles.error : ""}>{error.facebook ? error.facebook : null}</p>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Instagram</label>
                            <input type="text" name="instagram" value={input.instagram} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.instagram ? Styles.error : ""}>{error.instagram ? error.instagram : null}</p>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Twitter</label>
                            <input type="text" name="twitter" value={input.twitter} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.twitter ? Styles.error : ""}>{error.twitter ? error.twitter : null}</p>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Linkedin</label>
                            <input type="text" name="linkedin" value={input.linkedin} autoComplete="off"  onChange={handleChange}/>
                            <p className={error.linkedin ? Styles.error : ""}>{error.linkedin ? error.linkedin : null}</p>
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

export default FormEmpresa;
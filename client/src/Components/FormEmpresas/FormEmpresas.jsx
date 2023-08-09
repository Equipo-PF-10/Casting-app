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
                        </article>
                        <article className={Styles.coolinput}>
                                <label htmlFor="industryMain" className={Styles.text}>Industria Principal</label>
                                <input type="text" name="industryMain" id="industryMain" value={input.industryMain} autoComplete="off" onChange={handleChange}/>
                            </article>
                            <article className={Styles.coolinput}>
                            <label htmlFor="phoneNumber" className={Styles.text}>Número Telefónico</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" value={input.phoneNumber} autoComplete="off"  onChange={handleChange}/>
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
                        </article>
                        <article className={Styles.coolinput}>
                                <label htmlFor="description" className={Styles.text}>Descripción</label>
                                <textarea name="description" id="description" value={input.description} autoComplete="off"  onChange={handleChange} placeholder="Descripción de tu empresa..."></textarea>
                        </article>
                        <button type="submit" className={Styles.btn}>Enviar Datos</button>
                        </section>
                    </div>
                    <div className={Styles.div}>
                        <NavLink to="/" className={Styles.nav}>
                            <svg width="300" height="100" viewBox="0 0 1541 731" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="1541" height="730.171" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_143_375" transform="scale(0.00137741 0.00290698)"/>
                            </pattern>
                            <image id="image0_143_375" width="726" height="344" href="data:image/png;base64,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AAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgIBoBf4/6YYe9ezISK0AAAAASUVORK5CYII="/>
                            </defs>
                            </svg>
                        </NavLink>
                        <article className={Styles.coolinput}>
                                <label htmlFor="logo" className={Styles.text}>Página Web</label>
                                <input type="text" name="domain" id="domain" value={input.domain} autoComplete="off"  onChange={handleChange}/>
                            </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Facebook</label>
                            <input type="text" name="facebook" value={input.facebook} autoComplete="off"  onChange={handleChange}/>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Instagram</label>
                            <input type="text" name="instagram" value={input.instagram} autoComplete="off"  onChange={handleChange}/>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Twitter</label>
                            <input type="text" name="twitter" value={input.twitter} autoComplete="off"  onChange={handleChange}/>
                        </article>
                        <article className={Styles.coolinput}>
                            <label htmlFor="" className={Styles.text}>Linkedin</label>
                            <input type="text" name="linkedin" value={input.linkedin} autoComplete="off"  onChange={handleChange}/>
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
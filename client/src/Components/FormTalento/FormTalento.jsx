import { useState } from "react"
import Select from "react-select"
import Styles from "./FormTalento.module.css"
import axios from "axios"
import validationTalentos from "./validationTalentos"

const FormTalento = () => {

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

    const initialState = {
        name: "",
        password: "",
        passwordConfirm: "",
        email: "",
        emailConfirm: "",
        img: "",
        piel: "",
        contextura: "",
        facebook: "",
        twitter: "",
        instagram: "",
        num: "",
        nacionalidad: "",
        location: "",
        dni: "",
        habilityRequired: []
    }

    const [input, setInput] = useState(initialState)

    const [error, setError] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
        setError(validationTalentos({ ...input, [name]: value }))
    }

    
    const handleChangeSelect = (selectedOptions) => {
        setInput({ ...input, habilityRequired: selectedOptions });
      };

    const hanldeSubmit = async(event) => {
        event.preventDefault();
        try {
            await axios.post()
            setInput(initialState)
        } catch (error) {
            console.log({error: error.message})
        }
    }


    return(
        <section className={Styles.section}>
            <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg1}>
            <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
            </svg>
            
            <form action="" className={Styles.form} method="POST" onSubmit={hanldeSubmit}>
                <div className={Styles.div}>
                <h1>Registro</h1>
                    <coolinputicle className={Styles.coolinput}>
                        <label htmlFor="name" className={Styles.text}>Nombre Completo</label>
                        <input type="text" name="name" id="name" value={input.name} onChange={handleChange} required/>
                        <p className={error.name ? Styles.error : ""}>{error.name ? error.name : null}</p>
                    </coolinputicle>

                    <coolinputicle className={Styles.coolinput}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" value={input.password} onChange={handleChange} required/>
                        <p className={error.password ? Styles.error : ""}>{error.password ? error.password : null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={handleChange} required/>
                        <label htmlFor="passwordConfirm">Confirma Contraseña</label>
                        <p className={error.passwordConfirm ? Styles.error : ""}>{error.passwordConfirm ? error.passwordConfirm: null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="email" id="email" value={input.email} onChange={handleChange} required/>
                        <label htmlFor="email">Email</label>
                        <p className={error.email ? Styles.error : ""}>{error.email ? error.email : null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="emailConfirm" id="emailConfirm" onChange={handleChange} required/>
                        <label htmlFor="emailConfirm">Confirmar Email</label>
                        <p className={error.emailConfirm ? Styles.error : ""}>{error.emailConfirm ? error.emailConfirm: null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                                <label htmlFor="" className={Styles.text}>Orientación coolinputística</label>
                                <Select
                                isMulti 
                                options={optionshabilityRequired}
                                className={Styles.select}
                                value={input.habilityRequired}
                                onChange={handleChangeSelect}
                                name="habilityRequired"/>
                                <p className={error.habilityRequired ? Styles.error : ""}>{error.habilityRequired ? error.habilityRequired : null}</p>
                            </coolinputicle> 
                    <coolinputicle className={Styles.coolinput}>
                        
                    </coolinputicle>

                </div>
                <div className={Styles.div}>
                <coolinputicle className={Styles.img}>
                        <svg viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_100_143)">
                        <g clipPath="url(#clip0_100_143)">
                        <rect x="5" y="2" width="324" height="324" rx="162" fill="#F5F5F5"/>
                        <rect x="102.056" y="53.9554" width="129.889" height="129.889" rx="64.9443" fill="#4B31A1"/>
                        <rect x="-76.1807" y="218.12" width="486.361" height="486.361" rx="243.18" fill="#4B31A1"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_100_143" x="0.670379" y="0.556793" width="332.659" height="332.659" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="1.44321" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_100_143"/>
                        <feOffset dy="2.88641"/>
                        <feGaussianBlur stdDeviation="1.44321"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_143" result="shape"/>
                        </filter>
                        <clipPath id="clip0_100_143">
                        <rect x="5" y="2" width="324" height="324" rx="162" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinputImg}>
                        <input type="file" name="img" value={input.img} required onChange={handleChange}/>
                        <label htmlFor="">Subir Imágen</label>
                    </coolinputicle>

                    <h4>Características</h4>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Piel</label>
                        <select name="" id="">
                            <option value="">Tipos</option>
                        </select>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Contextura</label>
                        <select name="" id="">
                            <option value="">Tipos</option>
                        </select>
                    </coolinputicle>
                    <h4>Medidas</h4>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Altura</label>
                        <input type="number"  onChange={handleChange}/>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Peso</label>
                        <input type="number" onChange={handleChange} />
                    </coolinputicle >
                    <h4>Tallas</h4>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Piel</label>
                        <input type="number"  onChange={handleChange}/>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput1}>
                        <label htmlFor="">Contextura</label>
                        <input type="number"  onChange={handleChange}/>
                    </coolinputicle>      
                </div>
                <div className={Styles.div}>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="num" id="num" value={input.num} onChange={handleChange}/>
                        <label htmlFor="num">Número Telefónico</label>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="facebook" value={input.facebook} onChange={handleChange}/>
                        <label htmlFor="">Facebook</label>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="instagram" value={input.instagram}  onChange={handleChange}/>
                        <label htmlFor="">Instagram</label>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="twitter" value={input.twitter} onChange={handleChange}/>
                        <label htmlFor="">Twitter</label>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" id="location" name="location" value={input.location} onChange={handleChange} required/>
                        <label htmlFor="location">Ubicación</label>
                        <p className={error.location ? Styles.error : ""}>{error.location ? error.location : null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text"  name="nacionalidad" id="nacionalidad" value={input.nacionalidad} onChange={handleChange} required/>
                        <label htmlFor="">Nacionalidad</label>
                        <p className={error.nacionalidad ? Styles.error : ""}>{error.nacionalidad ? error.nacionalidad : null}</p>
                    </coolinputicle>
                    <coolinputicle className={Styles.coolinput}>
                        <input type="text" name="dni" id="dni" value={input.dni} onChange={handleChange} required/>
                        <label htmlFor="dni">Documento de Identidad</label>
                        <p className={error.dni ? Styles.error : ""}>{error.dni ? error.dni : null}</p>
                    </coolinputicle>
                    <button type="submit">Enviar Datos</button>
                </div>
            </form>
            <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg2}>
            <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
            </svg>
        </section>
    )
}

export default FormTalento
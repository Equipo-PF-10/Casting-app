import { useState } from "react"
import Styles from "./FormEmpresas.module.css"
import axios from "axios"
import validationEmpresas from "./validationEmpresas"

const FormEmpresa = () => {
    const initialState = {
        name: "",
        password: "",
        passwordConfirm: "",
        email: "",
        emailConfirm: "",
        img: "",
        facebook: "",
        twitter: "",
        instagram: "",
        num: "",
        location: "",
    }

    const [input, setInput] = useState(initialState)
    const [error, setError] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
        setError(validationEmpresas({...input, [name]: value}))
    }

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
            
            <form action="" className={Styles.form} method="POST" onSubmit={hanldeSubmit} >
                <div className={Styles.div}>
                <h1>Registro</h1>
                    <article className={Styles.art}>
                        <input type="text" name="name" id="name" value={input.name} onChange={handleChange} required/>
                        <label htmlFor="name">Nombre Completo</label>
                        <p className={error.name ? Styles.error : ""}>{error.name ? error.name : null}</p>
                    </article>

                    <article className={Styles.art}>
                        <input type="password" name="password" id="password" value={input.password} onChange={handleChange} required/>
                        <label htmlFor="password">Contraseña</label>
                        <p className={error.password ? Styles.error : ""}>{error.password ? error.password : null}</p>
                    </article>
                    <article className={Styles.art}>
                        <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={handleChange} required/>
                        <label htmlFor="passwordConfirm">Confirma Contraseña</label>
                        <p className={error.passwordConfirm ? Styles.error : ""}>{error.passwordConfirm ? error.passwordConfirm: null}</p>
                    </article>
                    <article className={Styles.art}>
                        <input type="text" name="email" id="email" value={input.email} onChange={handleChange} required/>
                        <label htmlFor="email">Email</label>
                        <p className={error.email ? Styles.error : ""}>{error.email ? error.email : null}</p>
                    </article>
                    <article className={Styles.art}>
                        <input type="text" name="emailConfirm" id="emailConfirm" onChange={handleChange} required/>
                        <label htmlFor="emailConfirm">Confirmar Email</label>
                        <p className={error.emailConfirm ? Styles.error : ""}>{error.emailConfirm ? error.emailConfirm: null}</p>
                    </article>
                </div>
                <div className={Styles.div}>
                <article className={Styles.img}>
                        <svg viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_100_143)">
                        <g clip-path="url(#clip0_100_143)">
                        <rect x="5" y="2" width="324" height="324" rx="162" fill="#F5F5F5"/>
                        <rect x="102.056" y="53.9554" width="129.889" height="129.889" rx="64.9443" fill="#4B31A1"/>
                        <rect x="-76.1807" y="218.12" width="486.361" height="486.361" rx="243.18" fill="#4B31A1"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_100_143" x="0.670379" y="0.556793" width="332.659" height="332.659" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
                    </article>
                    <article className={Styles.artIMG}>
                        <label htmlFor="img">Subir Imágen</label>
                        <input type="file" id="img" name="img" value={input.img} onChange={handleChange}/>
                    </article>
                    <h4>Orientación Artística</h4>
                    <article className={Styles.art}>
                        
                    </article>    
                </div>
                <div className={Styles.div}>
                <article className={Styles.art}>
                        <input type="text" name="num" id="num" value={input.num} onChange={handleChange}/>
                        <label htmlFor="num">Número Telefónico</label>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Facebook</label>
                        <input type="text" name="facebook" value={input.facebook} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Instagram</label>
                        <input type="text" name="instagram" value={input.instagram}  onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Twitter</label>
                        <input type="text" name="twitter" value={input.twitter} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Linkedin</label>
                        <input type="text" name="linkedin" value={input.linkedin} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <input type="text" id="location" name="location" value={input.location} onChange={handleChange} required/>
                        <label htmlFor="location">Ubicación</label>
                        <p className={error.location ? Styles.error : ""}>{error.location ? error.location : null}</p>
                    </article>
                    <button type="submit">Enviar Datos</button>
                </div>
            </form>
            <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg2}>
            <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
            </svg>
        </section>
    )
}

export default FormEmpresa;
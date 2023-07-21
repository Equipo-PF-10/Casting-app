import { useState } from "react"
import Styles from "./FormEmpresas.module.css"


const FormEmpresa = () => {
    const initialState = {
        name: "",
        password: "",
        email: "",
        img: "",
        piel: "",
        contextura: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        num: "",
        nacionalidad: "",
        location: "",
        dni: "",

    }

    const [input, setInput] = useState(initialState)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }


    return(
        <section className={Styles.section}>
            <svg width="345" height="202" viewBox="0 0 345 202" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.svg1}>
            <path d="M276.775 -48.0724L345 -66L-57 -57.4216V202C17.4227 78.335 137.182 -11.3914 276.775 -48.0724Z" fill="#7E7193"/>
            </svg>
            
            <form action="" className={Styles.form}>
                <div className={Styles.div}>
                <h1>Registro</h1>
                    <article className={Styles.art}>
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text" name="name" value={input.name} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Contraseña</label>
                        <input type="text" name="password" value={input.password} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Confirma Contraseña</label>
                        <input type="text" name="password" onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" value={input.email} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Confirmar Email</label>
                        <input type="text" onChange={handleChange}/>
                    </article>
                    <article className={Styles.img}>
                        {<img src=" " alt="imange" />}
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Subir Imágen</label>
                        <input type="file" name="img" value={input.img} onChange={handleChange}/>
                    </article>
                </div>
                <div className={Styles.div}>
                    <h4>Orientación Artística</h4>
                    <article className={Styles.art}>
                        
                    </article>    
                </div>
                <div className={Styles.div}>
                    <article className={Styles.art}>
                        <label htmlFor="">Número Telefónico</label>
                        <input type="text" name="dni" value={input.dni} onChange={handleChange}/>
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
                        <label htmlFor="">Ubicación</label>
                        <input type="text" name="location" value={input.location} onChange={handleChange}/>
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Nacionalidad</label>
                        <input type="text"  name="nacionalidad" value={input.nacionalidad} onChange={handleChange}/>
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
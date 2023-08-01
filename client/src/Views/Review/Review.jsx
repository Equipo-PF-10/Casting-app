import { useState } from "react";
import {FaStar} from "react-icons/fa"
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral"
import Styles from "./Review.module.css"
import axios from "axios"

const Review = () => {

    const initialState ={
        id: "",
        description: "",
        rating: 0,
    }

    const [input, setInput] = useState(initialState)

    const userId  = localStorage.getItem("user_id");

    const userType = localStorage.getItem("userType")

    const URLTalent = `http://localhost:3001/talents/${userId}`

    const URLCompany = `http://localhost:3001/companies/${userId}`

    input.id = userId;

    // UserName

    let userName = "";

/*     if(userType === "talent"){
        const response = axios.get(URLTalent).data
        userName = response.name
    } else{
        const response = axios.get(URLCompany).data
        userName = response.name
    } */

    // Estrellas

    const stars = Array(5).fill(null).map((_star, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={80}
            onClick={() => setInput((input) => ({ ...input, rating: starValue }))}
            color={starValue <= input.rating ? '#4B31A1' : '#324844'}
            style={{ cursor: 'pointer' }}
          />
        );
      });

    // Handle

    const handlerChage = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            axios.post()
        } catch (error) {
            console.log({error})
        }
    }

    return(
        <section className={Styles.section}>
            <NavBarLateral/>
            <section className={Styles.container}> 
                <article className={Styles.inputSection}>
                    <h2>Reseña de {userName} </h2>
                    <form action=""  method="POST" onSubmit={submitHandler} className={Styles.form}>
                        <article className={Styles.input}>
                            <label htmlFor="">Califica tu experiencia</label>
                            <div className={Styles.stars}>
                                {stars}
                            </div>
                        </article>
                        <article className={Styles.input}>
                            <label htmlFor="description">Coméntanos sobre su experiencia</label>
                            <textarea style={{ padding: '10px' }} name="description" id="description" value={input.description} onChange={handlerChage}></textarea>
                        </article>
                        <button type="submit">Enviar Reseña</button>
                    </form>
                </article>
            </section>
            <svg className={Styles.vector} width="1000" height="200" viewBox="0 0 1417 418" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2525.11 142.197C2327.85 43.9905 2086.61 -4.64757 1825.5 1.13836C1564.39 6.92428 1292.53 66.9318 1037.06 175.17C781.599 283.409 551.466 436.092 369.639 617.976C187.813 799.861 60.6533 1004.58 0.855708 1211.71L1111.64 1191.86C1126.88 1139.05 1159.31 1086.85 1205.66 1040.48C1252.02 994.109 1310.7 955.181 1375.83 927.585C1440.96 899.988 1510.28 884.689 1576.85 883.214C1643.42 881.738 1704.93 894.139 1755.22 919.178L2525.11 142.197Z" fill="#7E7193"/>
            </svg>
        </section>
    )
}

export default Review;
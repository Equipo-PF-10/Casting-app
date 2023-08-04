import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral"
import styles from "./Report.module.css"
import { useState } from "react"
import axios from "axios"

const Report = () => {

    //URLs

    const URLTalent = "http://localhost:3001/talents/report"

    const URLCompany = "http://localhost:3001/companies/report"

    // Estados

    const initialState = {
        idCompany: "",
        idTalent: "",
        report: "",
        text: ""
    }

    const [input, setInput] = useState(initialState);

    // Id - userType

    const userId = localStorage.getItem("user_id");

    const userType = localStorage.getItem("userType");

    let URL = "";

    if(userType === "talent"){
        input.idTalent = userId
        URL = URLTalent
    } else {
        input.idCompany = userId;
        URL = URLCompany;
    }

    // Handlers

    const handlerChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(URL, input)
        } catch (error) {
            console.log(Error);
        }
    }


    return(
        <section className={styles.section}>
            <NavBarLateral/>
            <section className={styles.fromSection}>
                <h1>Reporte</h1>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <article className={styles.inputSection}>
                        <label htmlFor="">Tipo de Reporte</label>
                        <select name="" id="" onChange={handlerChange}>
                            <option value="1">Opción 1</option>
                            <option value="2">Opción 2</option>
                            <option value="3">Opción 3</option>
                            <option value="4">Opción 4</option>
                        </select>
                    </article>
                    <article className={styles.inputSection}>
                        <label htmlFor="text">Descripción del reporte</label>
                        <textarea style={{ padding: '10px' }} name="text" id="text" value={input.text} onChange={handlerChange}></textarea>
                    </article>
                    <button>Enviar Reporte</button>
                </form>
            </section>
            <svg className={styles.svg} width="500" height="418" viewBox="0 0 1417 418" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2525.11 142.197C2327.85 43.9905 2086.61 -4.64757 1825.5 1.13836C1564.39 6.92428 1292.53 66.9318 1037.06 175.17C781.599 283.409 551.466 436.092 369.639 617.976C187.813 799.861 60.6533 1004.58 0.855708 1211.71L1111.64 1191.86C1126.88 1139.05 1159.31 1086.85 1205.66 1040.48C1252.02 994.109 1310.7 955.181 1375.83 927.585C1440.96 899.988 1510.28 884.689 1576.85 883.214C1643.42 881.738 1704.93 894.139 1755.22 919.178L2525.11 142.197Z" fill="#7E7193"/>
            </svg>

        </section>
    )
}

export default Report
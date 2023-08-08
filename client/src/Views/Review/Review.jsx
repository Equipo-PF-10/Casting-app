import { useState } from "react";
import { FaStar } from "react-icons/fa";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import Styles from "./Review.module.css";
import axios from "axios";
import Validation from "./validation";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Review = () => {
  const userId = localStorage.getItem("user_id");

  const userType = localStorage.getItem("userType");

  //const userReview="";
 
  let userReview = "";

    if(userType === "talent"){
      userReview = userId;
  } else {
      userReview  = userId;
  }
  
  const dispatch=useDispatch()
  
  const reviewTalents = (state) => state.reviewTalents

  // Rutas Talentos

  const URLTalent = `https://deploy-sprint-2-backend.onrender.com/talents/${userReview}`;

  const TalentReview = "https://deploy-sprint-2-backend.onrender.com/talents/reviews";

  // Rutas Compañias

  const URLCompany = `https://deploy-sprint-2-backend.onrender.com/companies/${userReview}`;

  const CompanyReview="https://deploy-sprint-2-backend.onrender.com/companies/reviews";

  const company="https://deploy-sprint-2-backend.onrender.com/companies";
  
  const navigate = useNavigate(company + `/hiredtalent/${userId}`);

    // Estados
  
      let initialState = {
        text: "",
        rating: 0,
        CompanyId: "",
        TalentId: "",
        EventId: ""
    }


  const [input, setInput] = useState(initialState);

  //const [error, setError] = useState({});

    //userName

    let userName = "";

    const getUserData = async () => {
        try {
          if (userType === "talent") {
            const response = await axios.get(URLCompany);
            if (response) {
              userName = response.data.name;
            }
          } else {
            const response = await axios.get(URLTalent);
            if (response) {
              userName = response.data.name;
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

      (async () => {await getUserData()})();

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

    // Handlers

    const handlerChage = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
        setError(Validation({ ...input, [name]: value }))
    }

    const submitHandler = async (event) => {
      event.preventDefault();
  
      const endpoint = userType === "talent" ? TalentReview : CompanyReview;
      const filteredData = filterInitialStateByUserType(userType);
  
      try {
          const response = await axios.post(endpoint, filteredData);
          return response.data;

      } catch (error) {
          console.log("Error:", error);
      }
  }
  
  const filterInitialStateByUserType = (userType) => {
      const excludedProperty = userType === "talent" ? 'TalentId' : 'CompanyId';
  
      return Object.keys(initialState)
          .filter(key => key !== excludedProperty)
          .reduce((obj, key) => {
              obj[key] = initialState[key];
              return obj;
          }, {});
  }

  if (userType === "talent") {
    input.TalentId = userId;
  } else {
    input.CompanyId = userId;
  }

  return (
    <section className={Styles.section}>
      <NavBarLateral />
      <section className={Styles.container}>
        <article className={Styles.inputSection}>
          <h2>Reseña de {userName} </h2>
          <form
            action=""
            method="POST"
            onSubmit={submitHandler}
            className={Styles.form}
          >
            <article className={Styles.input}>
              <label htmlFor="">Califica tu experiencia</label>
              <div className={Styles.stars}>{stars}</div>
              {/*<p className={error.text && error.text ? Styles.error : null}>
                {error.text ? error.text : null}
              </p>*/}
            </article>
            <article className={Styles.input}>
              <label htmlFor="text">Coméntanos sobre su experiencia</label>
              <textarea
                style={{ padding: "25px" }}
                name="text"
                id="text"
                value={input.text}
                onChange={handlerChage}
              ></textarea>
            </article>
            <button type="submit">Enviar Reseña</button>
          </form>
        </article>
      </section>
      <svg
        className={Styles.vector}
        width="1000"
        height="200"
        viewBox="0 0 1417 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2525.11 142.197C2327.85 43.9905 2086.61 -4.64757 1825.5 1.13836C1564.39 6.92428 1292.53 66.9318 1037.06 175.17C781.599 283.409 551.466 436.092 369.639 617.976C187.813 799.861 60.6533 1004.58 0.855708 1211.71L1111.64 1191.86C1126.88 1139.05 1159.31 1086.85 1205.66 1040.48C1252.02 994.109 1310.7 955.181 1375.83 927.585C1440.96 899.988 1510.28 884.689 1576.85 883.214C1643.42 881.738 1704.93 894.139 1755.22 919.178L2525.11 142.197Z"
          fill="#7E7193"
        />
      </svg>
    </section>
  );
};

export default Review;

import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function User() {
  const id = localStorage.getItem("user_id");
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/companies/${id}`).then(({ data }) => {
      setCompany(data);
    });
  }, []);

  
  const user_type = localStorage.getItem("userType");
  //console.log(user_type);
  let url_profile;
  //useEffect(()=>{
    if(user_type === "company"){
      url_profile = "/company/profile";
    } else if (user_type === "talent") {
      url_profile = "/model/profile";
    }
  //},[user_type])
//console.log(company.image)
  return (
        <Link to={`${url_profile}/${id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {company.image ? (
            <img style={{width:"200px"}} src={company.image} alt="Profile Picture" />
          ) : (
            <svg
              width="200"
              height="200"
              viewBox="0 0 187 187"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_497_36)">
                <g clipPath="url(#clip0_497_36)">
                  <rect
                    x="3"
                    y="1"
                    width="181"
                    height="181"
                    rx="90.5"
                    fill="#F5F5F5"
                  />
                  <rect
                    x="57.2197"
                    y="30.0244"
                    width="72.5612"
                    height="72.5612"
                    rx="36.2806"
                    fill="#4B31A1"
                  />
                  <rect
                    x="-42.3506"
                    y="121.734"
                    width="271.702"
                    height="271.702"
                    rx="135.851"
                    fill="#4B31A1"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_497_36"
                  x="0.581292"
                  y="0.193764"
                  width="185.837"
                  height="185.837"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="0.806236"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_497_36"
                  />
                  <feOffset dy="1.61247" />
                  <feGaussianBlur stdDeviation="0.806236" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_497_36"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_497_36"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_497_36">
                  <rect
                    x="3"
                    y="1"
                    width="181"
                    height="181"
                    rx="90.5"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
           
        <article className={styles.info}>
          {company.name ? <h3>{company.name}</h3> : <h3>Nombre de la Empresa</h3>}
          <div className={styles.plan}>
            <h5>Plan Activo:</h5> 
            {/* {company.plan ? <h5>{company.plan}</h5> : <h5>Pendiente</h5>}  */}
            {company.plan !== "PENDIENTE" ? (
              <h5>{company.plan}</h5>
            ) : (
              <h5>Pendiente</h5>
            )}
          </div>
        </article>
      </div>
      </Link>
  );
}

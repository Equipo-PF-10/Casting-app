import React from "react";
import styles from "./HomeCompany.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";

export default function HomeCompany () {

return (
    <div className={styles.container}>
        <div> <NavBarLateral/> </div>
        <div className={styles.view}></div>
        
    </div>
    )
}
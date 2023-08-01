import React from 'react'
import style from './Admin.module.css'
import {Link} from 'react-router-dom';
import NavBarLateral from '../../Components/NavBarLateral/NavBarLateral';

const Admin = () => {
  return (
    <div>
      <div className={style.logoContainer}>
        <Link to={"/"}>
          <img src="/Logo con Letras.svg" alt="" className={style.imgLogo} />
        </Link>
      </div>
      <div className={style.navLateral}>
        <NavBarLateral />
      </div>
    </div>
  );
}

export default Admin

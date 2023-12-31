import AboutUs from "../../Views/AboutUs/AboutUs";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
//import './NavbarModule.css'
//import style from "./Navbar.Module.css";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <section className={style.logoContainer}>
        <Link to={'/'}>
          <img src="/Logo con Letras.svg" alt="" className={style.imgLogo} />
        </Link>
      </section>
      <section className={style.buttonsContainer}>
        <div className={style.containerButtonNav}>
          <LoginButton className={style.buttonNav} />
          {/* <button className='button-login'><a href="/login">Ingresa</a></button> */}
          <button className={style.buttonBlog}>
            <a className={style.buttonNav} href="#servicios">
              Servicios
            </a>
          </button>
          <button className={style.buttonBlog}>
            <a href="#blog" className={style.buttonNav}>
              Tips
            </a>
          </button>
          <button className={style.buttonNosotros}>
            <a href="/about" className={style.buttonNav}>
              Nosotros
            </a>
          </button>
          <button className={style.buttonContacto}>
            <a href="#contacto" className={style.buttonNav}>
              Contacto
            </a>
          </button>
          {/*<LogoutButton className={style.buttonNav} />*/}
        </div>
      </section>
      {/* <section className='dropdown-container'>
      <li class="nav-item dropdown" className='dropdown'>
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/coffe.svg" alt="Prueba" className='imagen-dorpdown'/>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">Ingresa como Talento</a></li>
            <br />
            <li><a class="dropdown-item" href="/login">Ingresa como Empresa</a></li>
            <br />
            <li><a class="dropdown-item" href="/">Salir</a></li>
          </ul>
        </li>
      </section>  */}
    </nav>
  );
}

export default Navbar;

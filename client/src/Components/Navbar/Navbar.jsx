import './NavbarModule.css'
import {Link} from 'react-router-dom'; 

function Navbar() {
return (
    <nav>
      <section className='logo-container'>
        <Link to={"/"}>
          <img src="/Logo con Letras.svg" alt="" />
        </Link>
      </section>
      <section className='buttonsPrincipalNavBar'>      
        <button className='buttonNavBar'><a href="/login">Regístrate</a></button>
        <button className='buttonNavBar'><a href="#servicios">Servicios</a></button>
        <button className='buttonNavBar'><a href="#blog">Blog</a></button>
        <button className='buttonNavBar'><a href="#nosotros">Nosotros</a></button>
        <button className='buttonNavBar'><a href="#contacto">Contacto</a></button>       
      </section>
      
      <section className='dropdown-container'>
      <li class="nav-item dropdown" className='dropdown'>
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <img src="/coffe.svg" alt="Prueba" className='imagen-dorpdown'/> */}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">Ingresa como Talento</a></li>
            <br />
            <li><a class="dropdown-item" href="/login">Ingresa como Empresa</a></li>
            <br />
            <li><a class="dropdown-item" href="/">Salir</a></li>
          </ul>
        </li>
      </section> 

    </nav>
    )
};

export default Navbar;

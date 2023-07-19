
import Navbar from '../../Components/Navbar/Navbar.jsx';
import './LandingModule.css'

const Landing = () => {
  return (
    <>
    <Navbar/>
      <main>
        <section id="introduccion-login" className='introduccion'>
          <div className='introduccion'>
            <img src="Vector 1 -.svg" alt="Inicio" />
            <p>La mejor forma de encontrar <b>TALENTOS</b></p>
          </div>
          <div className='login'>
            <article className='login-talento'>
              <img src="Vector - Talento.svg" alt="Talento" />
              <button><a href="/model/register">Soy Talento</a></button>
            </article>
            <article className='login-empresa'>
              <img src="Vector - Reclutador.svg" alt="Reclutador" />
              <button><a href="/company/register">Soy Reclutador</a></button>
            </article>
          </div>
        </section>
        <section id="anuncios" className='anuncios'>
          <h3>Aqui está la sección Anuncios</h3>
        </section>
        <section id="servicios" className='servicios'>
          <h3 >Aqui está la seccioón servicios</h3>
        </section>
        <section id="blog" className='blog'>
          <h3 >Aqui está la seccioón blog</h3>
        </section>
        <section id="nosotros">
          <h3 >Aqui está la seccioón nosotros</h3>
        </section>
        <section id="contacto" className='contacto'>
          <h3 >Aqui está la seccioón contacto</h3>
        </section>
      </main>
      <footer>
        <h3>Aquí está el footer</h3>
      </footer>
    </>
  );
};

export default Landing;
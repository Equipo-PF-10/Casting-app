
import Navbar from '../../Components/Navbar/Navbar';
import './LandingModule.css'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <section id="introduccion" className='introduccion'>
          <h3>Aqui está la seccion introducción</h3>
        </section>
        <hr />
        <section id="anuncios" className='anuncios'>
          <h3>Aqui está la sección Anuncios</h3>
        </section>
        <hr />
        <section id="login" className='login'>
          <h3 >Aqui está la seccioón login</h3>
        </section>
        <hr />
        <section id="servicios" className='servicios'>
          <h3 >Aqui está la seccioón servicios</h3>
        </section>
        <hr />
        <section id="blog">
          <h3 >Aqui está la seccioón blog</h3>
        </section>
        <hr />
        <section id="nosotros">
          <h3 >Aqui está la seccioón nosotros</h3>
        </section>
        <hr />
        <section id="contacto">
          <h3 >Aqui está la seccioón contacto</h3>
        </section>
        <hr />
        <footer>
          <h3>Aquí está el footer</h3>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
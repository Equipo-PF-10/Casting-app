
import Adds from '../../Components/Adss/Adds.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import './LandingModule.css'

const Landing = () => {





  return (
    <>
    <Navbar/>
      <main>
        <section id="introduccion-login" className='introduccion'>
          <div className='introduccion'>
            <img src="inicio.svg" alt="Inicio" />
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
          <button className='paginado-button'><img src="/prev.svg" alt="" /></button>
          <Adds/>
          <Adds/>
          <Adds/>
          <Adds/>
          <button className='paginado-button'><img src="/next.svg" alt="" /></button>
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
          <p>!!! Tienes algo que quisieras contarnos...? <b>Contactanos</b></p>
          <form action="mailto:castingapp.pf.10@gmail.com" method="post" encType="text/plain" autoComplete='off'>
            Nombre:<br/>
            <input type="text" name="nombre"/><br/>
            Correo electrónico:<br/>
            <input type="text" name="correo"/><br/>
            Comentario:<br/>
            <textarea type="text" name="comentario" size="50" className='input-comentario'/><br/><br/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Borrar"/>
          </form>
        </section>
      </main>
      <footer>
        <h3>Aquí está el footer</h3>
      </footer>
    </>
  );
};

export default Landing;
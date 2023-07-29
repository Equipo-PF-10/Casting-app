import React from 'react';
// import ChartComponent from '../../Components/graficos/chart.jsx';
import Adds from '../../Components/Adss/Adds.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
 import './LandingModule.css'


const Landing = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      event.target.reset();
      alert('Gracias por contactarte con CastingAPP, te responderemos a la brevedad');
    }
  };

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
          <button className='paginado-button'><img src="/next.svg" alt="" /></button>
        </section>
        <br />
        <section id="servicios" className='servicios'>
        <h3>Conoce nuestros servicios</h3>
        <div class="card-servicios-empresa">
          <div class="img-container">
            <div class="img-empresa">
              <br />
              <span><b>En Casting App encontras:</b></span><br /><br />
                <span>1.- Reducir tu gestión de casting de días en horas.</span><br />
                <span>2.- Compartir y elige tu casting con tus clientes en línea.</span><br />
                <span>3.- Te asistimos en todo el proceso.</span><br />
            </div>
            <div class="description card">
              <span class="title">
                ...Buscas un Talento?
              </span>
            </div>
          </div>
        </div>
        <div class="card-servicios-empresa">
          <div class="img-container">
            <div class="img-talento">
              <br />
          <span><b>Crea tu perfil y:</b></span><br /><br />
                <span>1.- Recibe solo propuestas laborales que encajan con tu perfil artístico.</span><br />
                <span>2.- Promovemos tu perfil ante productores y directores.</span><br />
                <span>3.- Elige o rechaza las propuestas que te lleguen a tu celular.</span><br />
            </div>
            <div class="description card">
              <span class="title">
                ...Eres un talento artistico?
              </span>
            </div>
          </div>
        </div>
        <div class="card-servicios-empresa">
          <div class="img-container">
            <div class="img-representado">
              <br />
              <span><b>Dentro de tu perfil:</b></span><br /><br />
                <span>1.- Crea el perfil de tu hijo menor de edad.</span><br />
                <span>2.- Gestiona y administrar por sus invitaciones a proyectos audiovisuales.</span><br />
            </div>
            <div class="description card">
              <span class="title">
                ...tus hijos son menores de edad?
              </span>

            </div>
          </div>
        </div>

        </section>
        <section id="blog" className='blog'>
          <h3 >Aqui está la seccioón blog</h3>
          {/* <ChartComponent/> */}
        </section>
        <section id="nosotros" className='nosotros'>
          <h3 >Aqui está la seccioón nosotros</h3>
          <div class="card-nosotros"></div>
        </section>
        

        <section id="contacto" className='contacto'>
        
        <div className="container p-5">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8 col-lg-6">
                  <div className="cardMail">
                    <div className="card-header text-center">
                    <h3>Formulario de contacto</h3>
                    </div>
                    <div className="card-body">
                      <form action="https://formspree.io/f/xoqovoyp" method="POST" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Nombre"
                            className="form-control"
                            
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            type="text"
                            name="email"
                            placeholder="Correo electrónico"
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Teléfono"
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <textarea className="form-control" name="message" rows="3" placeholder="Mensaje"></textarea>
                        </div>

                        <div className="text-center">
                          <button className="btn btn-primary w-100">Enviar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

      </main>
      <footer>
        <h3>Aquí está el footer</h3>
      </footer>
    </>
  );
};

export default Landing;
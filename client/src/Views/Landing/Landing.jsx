import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Adds from "../../Components/Adss/Adds.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Blog from "../../Components/Blog/Blog.jsx";
import "./LandingModule.css";
import axios from "axios";
import LogoutButton from "../../Components/LogoutButton/LogoutButton.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const Landing = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userType = localStorage.getItem("userType");
  useEffect(() => {
    if (userType === "talent" && isAuthenticated) {
      const getUserMetadata = async () => {
        const domain = "dev-btf5b41eu5m4dqh0.us.auth0.com";

        try {
          const accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            },
          });

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = await metadataResponse.json();
          console.log(data);
          localStorage.setItem("user_email", `${data.email}`);
          localStorage.setItem("user_name", `${data.name}`);
          localStorage.setItem("user_image", `${data.picture}`);
        } catch (e) {
          console.log(e.message);
        }
      };

      getUserMetadata();

      let email = localStorage.getItem("user_email");
      let name = localStorage.getItem("user_name");
      let image = localStorage.getItem("user_image");
      let busquedaEmail = false;
      if (isAuthenticated) {
        const validation = axios
          .get(`http://localhost:3001/companies/email/${email}`)
          .then((res) => {
            if (res.data.length > 0) {
              busquedaEmail = true; // Incluir un modal de aviso al usuario
              return alert(
                "Este email está siendo utilizado como usuario empresa."
              );
            }
          })
          .catch((error) => console.log(error));
      }

      if (busquedaEmail === "false") {
        const register = axios
          .post("http://localhost:3001/talents/register", {
            email,
            name,
            image,
          })
          .then((res) => console.log(res.data))
          .then((res) => {
            const getByEmail = axios(
              `http://localhost:3001/talents/email/${email}`
            ).then((res) =>
              localStorage.setItem("user_id", `${res.data[0].id}`)
            );
          })
          .catch((error) => console.log(error.response.data));
        navigate("/home/talent");
      } else {
        //! Pendiente desloguear usuario.
        // const { logout } = useAuth0();
        // logout({ logoutParams: { returnTo: window.location.origin } });
        // logout();
      }
    }
    if (userType === "company" && isAuthenticated) {
      const getUserMetadata = async () => {
        const domain = "dev-btf5b41eu5m4dqh0.us.auth0.com";

        try {
          const accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            },
          });

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = await metadataResponse.json();
          console.log(data);
          localStorage.setItem("user_email", `${data.email}`);
          localStorage.setItem("user_name", `${data.name}`);
          localStorage.setItem("user_image", `${data.picture}`);
        } catch (e) {
          console.log(e.message);
        }
      };

      getUserMetadata();

      let email = localStorage.getItem("user_email");
      let name = localStorage.getItem("user_name");
      let image = localStorage.getItem("user_image");
      let busquedaEmail = false;
      if (isAuthenticated) {
        const validation = axios
          .get(`http://localhost:3001/talents/email/${email}`)
          .then((res) => {
            if (res.data.length > 0) {
              busquedaEmail = true; // Incluir un modal de aviso al usuario
              return alert(
                "Este email está siendo utilizado como usuario talento."
              );
            }
          })
          .catch((error) => console.log(error));
      }
      if (!busquedaEmail) {
        console.log(busquedaEmail);
        const register = axios
          .post("http://localhost:3001/companies/register", {
            email,
            name,
            image,
          })
          .then((res) => console.log(res.data))
          .then((res) => {
            const getByEmail = axios(
              `http://localhost:3001/companies/email/${email}`
            ).then((res) =>
              localStorage.setItem("user_id", `${res.data[0].id}`)
            );
          })
          .catch((error) => console.log(error.response.data));
        navigate("/home/company");
      } else {
        //! Pendiente desloguear usuario.
        // const { logout } = useAuth0();
        // logout({ logoutParams: { returnTo: window.location.origin } });
        // logout();
      }

      //   let email = localStorage.getItem("user_email");
      //   let name = localStorage.getItem("user_name");
      //   let image = localStorage.getItem("user_image");
      //   const register = axios
      //     .post("http://localhost:3001/companies/register", {
      //       email,
      //       name,
      //       image,
      //     })
      //     .then((res) => console.log(res.data))
      //     .then((res) => {
      //       const getByEmail = axios(
      //         `http://localhost:3001/companies/companies/${email}`
      //       ).then((res) => localStorage.setItem("user_id", `${res.data[0].id}`));
      //     })
      //     .catch((error) => console.log(error.response.data));
      //   navigate("/home/company");
    }
  }, [isAuthenticated, getAccessTokenSilently, user?.sub]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      event.target.reset();
      alert(
        "Gracias por contactarte con CastingAPP, te responderemos a la brevedad"
      );
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section id="introduccion-login" className="introduccion">
          <div className="introduccion">
            <div className="imagenIntro">
              <img src="inicio.svg" alt="Inicio" />
            </div>
            <div className="textoTalentos">
              <p>
                La mejor forma de encontrar <b>TALENTOS</b>
              </p>
            </div>
          </div>
          {/*<div className='login'>*/}
          {/*<article className='login-talento'>*/}
          {/*<img src="Vector - Talento.svg" alt="Talento" />*/}
          {/* <LoginButton type="talent"/> */}
          {/* <button><a href="/model/register">Soy Talento</a></button> */}
          {/*</article>*/}
          {/*<article className='login-empresa'>*/}
          {/*<img src="Vector - Reclutador.svg" alt="Reclutador" />*/}
          {/* <LoginButton type="company"/> */}
          {/* <button><a href="/company/register">Soy Reclutador</a></button> */}
          {/*</article>*/}
          {/*</div>*/}
        </section>
        <section id="anuncios" className="anuncios">
          <button className="paginado-button">
            <img src="/prev.svg" alt="" />
          </button>
          <Adds />
          <Adds />
          <Adds />
          <button className="paginado-button">
            <img src="/next.svg" alt="" />
          </button>
        </section>
        <br />
        <section id="servicios" className="servicios">
          <h3>Conoce nuestros servicios</h3>
          <div className="card-servicios-empresa">
            <div className="img-container">
              <div className="img-empresa">
                <br />
                <span>
                  <b>En Casting App encontras:</b>
                </span>
                <br />
                <br />
                <span>1.- Reducir tu gestión de casting de días en horas.</span>
                <br />
                <span>
                  2.- Compartir y elige tu casting con tus clientes en línea.
                </span>
                <br />
                <span>3.- Te asistimos en todo el proceso.</span>
                <br />
              </div>
              <div className="description card">
                <span className="title">...Buscas un Talento?</span>
              </div>
            </div>
          </div>
          <div className="card-servicios-empresa">
            <div className="img-container">
              <div className="img-talento">
                <br />
                <span>
                  <b>Crea tu perfil y:</b>
                </span>
                <br />
                <br />
                <span>
                  1.- Recibe solo propuestas laborales que encajan con tu perfil
                  artístico.
                </span>
                <br />
                <span>
                  2.- Promovemos tu perfil ante productores y directores.
                </span>
                <br />
                <span>
                  3.- Elige o rechaza las propuestas que te lleguen a tu
                  celular.
                </span>
                <br />
              </div>
              <div className="description card">
                <span className="title">...Eres un talento artistico?</span>
              </div>
            </div>
          </div>
          <div className="card-servicios-empresa">
            <div className="img-container">
              <div className="img-representado">
                <br />
                <span>
                  <b>Dentro de tu perfil:</b>
                </span>
                <br />
                <br />
                <span>1.- Crea el perfil de tu hijo menor de edad.</span>
                <br />
                <span>
                  2.- Gestiona y administrar por sus invitaciones a proyectos
                  audiovisuales.
                </span>
                <br />
              </div>
              <div className="description card">
                <span className="title">...tus hijos son menores de edad?</span>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section id="blog" className="blog">
          <div className="containerBlogs">
            <Blog />
          </div>
        </section>
        <section id="nosotros" className="nosotros">
          {/*<h3>Aqui está la seccioón nosotros</h3>
          <div class="card-nosotros"></div>*/}
        </section>

        <section id="contacto" className="contacto">
          <div className="container p-5">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="cardMail">
                  <div className="card-header text-center">
                    <h3>Formulario de contacto</h3>
                  </div>
                  <div className="card-body">
                    <form
                      action="https://formspree.io/f/xoqovoyp"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
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
                        <textarea
                          className="form-control"
                          name="message"
                          rows="3"
                          placeholder="Mensaje"
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <button className="btn btn-primary w-50">
                          Enviar
                        </button>
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
      </main>
      <footer className='footerE'>
        <Footer/>
      </footer>
    </>
  );
};

export default Landing;

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import julio from "../../../assets/Fotos/julio.png";
import edu from "../../../assets/Fotos/edu.png";
import agus from "../../../assets/Fotos/agus.png";
import pablo from "../../../assets/Fotos/pablo.png";
import pedro from "../../../assets/Fotos/pedro.png";
import sarah from "../../../assets/Fotos/sarah.png";
import jesus from "../../../assets/Fotos/jesus.png";
import santi from "../../../assets/Fotos/santi.png";
import style from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.containerGral}>
      <Navbar />
      <div className={style.containerCards}>
        <h2 className={style.titulo}>Casting App Team</h2>
        <div className={style.top}>
          {/*julio */}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img
                src={julio}
                alt="Julio Cegarra"
                className={style.fotoPerfil}
              />
            </div>
            <p className={style.name}>
              <h3>Julio Cegarra</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/julio-cegarra-cobaleda-developer/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a
                  className={style.link}
                  href="https://github.com/JulioACegarraC"
                >
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*sarah*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img
                src={sarah}
                alt="Sarah Grommelt"
                className={style.fotoPerfil}
              />
            </div>
            <p className={style.name}>
              <h3>Sarah Grommelt</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/sarahgrommelt/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a className={style.link} href="https://github.com/SGrommelt">
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*santi*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img
                src={santi}
                alt="Santiago Ocampo"
                className={style.fotoPerfil}
              />
            </div>
            <p className={style.name}>
              <h3>Santiago Ocampo</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/santiocampo/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a
                  className={style.link}
                  href="https://github.com/santiocampo1"
                >
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*edu*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img src={edu} alt="Edward Vera" className={style.fotoPerfil} />
            </div>
            <p className={style.name}>
              <h3>Edward Vera</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/edward-vera-20a577188/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a className={style.link} href="https://github.com/edwardv1">
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          {/*pedro*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img
                src={pedro}
                alt="Pedro Cavataio"
                className={style.fotoPerfil}
              />
            </div>
            <p className={style.name}>
              <h3>Pedro Cavataio</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/pedro-francisco-cavataio/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a
                  className={style.link}
                  href="https://github.com/PedroCavataio"
                >
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*pablo*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img src={pablo} alt="Pablo Esaá" className={style.fotoPerfil} />
            </div>
            <p className={style.name}>
              <h3>Pablo Esaá</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/pabloesaa/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a className={style.link} href="https://github.com/DrownUnity">
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*agus*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img
                src={agus}
                alt="Agustin Vargas"
                className={style.fotoPerfil}
              />
            </div>
            <p className={style.name}>
              <h3>Agustin Vargas</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/agustin-vargas-a80692264/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a className={style.link} href="https://github.com/agustinnnv">
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
          {/*jesus*/}
          <div className={style.cardClient}>
            <div className={style.userPicture}>
              <img src={jesus} alt="Jesús Re" className={style.fotoPerfil} />
            </div>
            <p className={style.name}>
              <h3>Jesús Re</h3>
              <span>Fullstack web developer</span>
            </p>
            <div className={style.social}>
              <div>
                <a
                  className={style.link}
                  href="https://www.linkedin.com/in/jes%C3%BAs-re-1a11aa1a5/"
                >
                  <BsLinkedin className={style.tooltip} />
                </a>
              </div>
              <div>
                <a className={style.link} href="https://github.com/jesusre890">
                  <BsGithub className={style.tooltip} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

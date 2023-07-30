import { useEffect, useState } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_all_postulations , get_event_by_id, get_talent_by_id, close_modal_search_compnay, clear_message_deleted, close_modal_refuse_postulate } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanySearch = () => {
  const {id} = useParams();
  const MESSAGE_SEND_EMAIL = "Se ha enviado correctamente un email de contacto al postulante seleccionado.";
  const dispatch = useDispatch();
  const evento = useSelector((state) => state.eventDetail);
  const postulantes = useSelector((state) =>  state.postulatedTalentsByEvent ); 
  const postulantesCopy = useSelector((state) =>  state.postulatedTalentsByEventFiltered ); 
  const idCard = useSelector((state) =>  state.idCard); 
  const talent = useSelector((state) =>  state.talentById);
  const filters = useSelector((state) =>  state.filters);
  const modal = useSelector((state) =>  state.modalInSearchCompany);
  let messageDeleted = useSelector((state) =>  state.messagePostulantDeleted );
  
  //localStorage.getItem("id");
  //Verificar si cuando se elimina un postulante se actualiza la lista (si no lo hace, buscar la forma)

  
  let [idTalent, setIdTalent] = useState("");
  
  //Fucnion para controlar el modal de Contactar
  const onClickCloseModalConfirmation = () => {
    const close = "isClosed";
    dispatch(close_modal_search_compnay(close));
  };
  const onClickSendEmail = () => {
    const close = "isClosed";
    dispatch(close_modal_search_compnay(close));
    //PEDRO ----Agregar logica de envio de email

    //Agregar mensaje por toastify
    mensaje_success_Toast_send_mail();
  };

  


  // Paginación

  const [currentPage, setCurrentPage] = useState(1);
  const talentsPerPage = 8;

  const lastIndex = currentPage * talentsPerPage;
  const firstIndex = lastIndex - talentsPerPage;
  const currentTalents = postulantes.slice(firstIndex, lastIndex);
  const currentTalentsCopy = postulantesCopy.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const pageNumbers = Math.ceil(postulantes.length / talentsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );
  const pageNumbersCopy = Math.ceil(postulantesCopy.length / talentsPerPage);
  const paginationCopy = Array.from(
    { length: pageNumbersCopy },
    (_, index) => index + 1
  );

  //Dispatch

  //let id = "fb615033-e4ec-4213-b65b-af21fb1a3599";
  //Obtener todos los postulantes en base al id del evento
  //Obtener el detalle del evento para renderizar el nombre del mismo como un Titulo
  useEffect(() => {
    dispatch(get_all_postulations(id));
    dispatch(get_event_by_id(id));
  }, [dispatch, id]);

//Funcion para traerme el detail de un postulante, muestra el detail de un talento al hacer click en la Card
useEffect(()=>{
  dispatch(get_talent_by_id(idCard));
},[idCard])

  // Función que muestra el detail de un talento al hacer click en la Card
  const handleClick = (talentoId) => {
    setIdTalent(talentoId);
    setTalentSelected(postulantes.find((talent) => talent.id === idTalent));
  };

  //Map Talentos
  const listedTalents = currentTalents.map((talento) => (
    <li key={talento.id}>
      <Card
        id={talento.id}
        name={talento.name}
        image={talento.image}
        gender={talento.gender}
        hability={talento.hability}
        handlerClick={handleClick}
      />
    </li>
  ));
  const listedTalentsCopy = currentTalentsCopy.map((talento) => (
    <li key={talento.id}>
      <Card
        id={talento.id}
        name={talento.name}
        image={talento.image}
        gender={talento.gender}
        hability={talento.hability}
        handlerClick={handleClick}
      />
    </li>
  ));

  const ubication = postulantes.map((postulante) => {
    return postulante.ubication;
  });

  // Evita ubicaciones repetidas
  const singleLocation = ubication.filter((item, index) => {
    return ubication.indexOf(item) === index;
  });

  

  //Mostrar mensaje cuando se elimina un postulante
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: messageDeleted,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(messageDeleted, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "500px",
        },
      });
    }
  };

  //Mostrar mensaje cuando se envie un mail de contacto al Postulante
  let currentToastIdSendMail = null;
  const mensaje_success_Toast_send_mail = () => {
    if (currentToastIdSendMail) {
      toast.update(currentToastIdSendMail, {
        render: MESSAGE_SEND_EMAIL,
        autoClose: 5000,
      });
    } else {
      currentToastIdSendMail = toast.success(MESSAGE_SEND_EMAIL, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "450px",
        },
      });
    }
  };

  useEffect(() => {
    if (Object.keys(messageDeleted).length > 0) {
      mensaje_success_Toast();
      dispatch(clear_message_deleted(""));
      //PEDRO aplicar logica para enviar mensaje al talento cuando una empresa rechaza su postulacion
    }
  }, [messageDeleted]);

  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search ubication={singleLocation} setCurrentPage={setCurrentPage} id_event={id} />
      </div>
      <div>
        <ToastContainer />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        {      
          postulantesCopy.length === 0 ?
          <div  className={style.text}>
           <h3>No se han encontrado resultados.</h3>
           </div>
          :
          filters ?
          <div className={style.grid}>
           <div><h2>Postulantes al Evento: {evento.name}</h2><hr /></div>
           
          <div className={style.cards}>{listedTalentsCopy}</div>
        </div>
          :
          <div className={style.grid}>
           <div><h2>Postulantes al Evento: {evento.name}</h2></div>
          <div className={style.cards}>{listedTalents}</div>
        </div>
        }
        <div className={style.detailCard}>
           {
            idCard.length === 0  ?
            filters ?
            <Detail className={style.detail} talent={postulantesCopy[0]} id_event={id}/>
            :
            <Detail className={style.detail} talent={postulantes[0]} id_event={id}/>
            :
            <Detail className={style.detail} talent={talent} key={talent.id} id_event={id}/>
          } 
        </div>
      </div>
      {
        filters ?
        <ul className={style.pagination}>
        {paginationCopy.map((number) => (
          <li
            key={number}
            className={number === currentPage ? style.active : ""}
            onClick={() => paginate(number)}
          >
            <p>{number}</p>
          </li>
        ))}
      </ul>
      :
      <ul className={style.pagination}>
        {pagination.map((number) => (
          <li
            key={number}
            className={number === currentPage ? style.active : ""}
            onClick={() => paginate(number)}
          >
            <p>{number}</p>
          </li>
        ))}
      </ul>
      }

{/* -------MODAL PARA ENVIAR UN MAIL AL POSTULANTE ------------*/}
{
        modal ?
        <div className= {style.containerModalOpened}>
            <div className={style.modalConfirmationOpened}>
              <div className={style.head3}>
                <h4>¿Está seguro/a de enviar un mail de conacto al Postulante?</h4>
                <hr />
              </div>
              
              <div className={style.bottom3}>
                <button className={style.buttonConfirmar} onClick={onClickSendEmail}>Confirmar</button>
                <button className={style.buttonRegresar} onClick={onClickCloseModalConfirmation}>Regresar</button>
              </div>
          </div>
        </div>
        :
        <div className= {style.containerModalClosed}>
            <div className={style.modalClosed}>
              
              
          </div>
        </div>
      }
    </div>
  );
};

export default CompanySearch;

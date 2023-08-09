import styles from "./HomeEvent.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  close_event_by_id,
  getAllEvents,
  get_all_postulations,
  get_event_by_id,
  get_event_by_id_event,
} from "../../../redux/actions";
import { useEffect, useState } from "react";

const HomeEvent = (props) => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  //const postulantes = useSelector((state) => state.postulatedTalentsByEvent);
  const [postulantes, setPostulantes] = useState([]);

  useEffect(() => {
    const get_postulantes = async (fk) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/applied/event/${fk}`
        );
        console.log(response);
        setPostulantes(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    get_postulantes(props.id);
    // dispatch(get_all_postulations(props.id));
  }, []);

  // let [numberPostulations, setNumberPostulations] = useState(postulantes.length);

  // // Actualizamos el contador cuando cambia la cantidad de postulantes
  // useEffect(() => {
  //   console.log(props.id);
  //   setNumberPostulations(postulantes.length);
  //   console.log(postulantes);
  // }, [postulantes]);

  const handleClickEditEvent = () => {
    //navigate(`/company/editEvent/${props.id}`)
  };
  //console.log(numberPostulations);

  const hanldleClickEventDetail = () => {
    console.log("entro en error");
    mensaje_error_Toast();
  };

  let errorMessage =
    "Podrá ver el detalle del evento cuando hayan postulantes al mismo.";
  let currentToastId = null;
  const mensaje_error_Toast = () => {
    if (currentToastId) {
      toast.update(currentToastId, {
        render: errorMessage,
        autoClose: 5000,
      });
    } else {
      currentToastId = toast.error(errorMessage, {
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

  return (
    <div className={styles.containerGral}>
      <ToastContainer />
      <div className={styles.container}>
        {postulantes.length > 0 ? (
          <Link to={`/${props.url}/${props.id}`}>
            <div className={styles.fonts}>
              <h2 className={styles.text}>{props.title}</h2>
              <h5 className={styles.text}>{props.subTitle}</h5>
              <h5 className={styles.text}>{props.active}</h5>
            </div>
          </Link>
        ) : (
          <Link onClick={hanldleClickEventDetail}>
            <div className={styles.fonts}>
              <h2 className={styles.text}>{props.title}</h2>
              <h5 className={styles.text}>{props.subTitle}</h5>
              <h5 className={styles.text}>{props.active}</h5>
            </div>
          </Link>
        )}
        <div className={styles.postulantes}>
          <h5 className={styles.postulantesh5}>Cantidad de postulantes:</h5>
          <h5>{postulantes.length}</h5>
        </div>
        <div className={styles.options}>
          <button className={styles.buttonEdit} onClick={handleClickEditEvent}>
            <Link to={"/company/create"} className={styles.editar}>
              Editar
            </Link>
          </button>
          <button
            className={styles.buttonClose}
            onClick={() => props.handleDelete(props.id)}
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeEvent;

//todo: Rutas de Eventos
//mainRouter.use("/events", eventRouter);
// ? Esta ruta actualiza informacion de un evento por su id.
// eventRouter.put("/:id", handlerUpdateEventById);

/*
   active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
*/

//? Esta ruta hace el borrado logico de un evento por su id.
//eventRouter.delete("/:id", handlerDeleteEventById);

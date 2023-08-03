import styles from './HomeEvent.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { edit_event_by_id } from '../../../redux/actions';

const HomeEvent = (props) => {
  const dispatch = useDispatch();
  console.log(props.id);

  const handleClickEditEvent = () => {
    //despachar la action
    dispatch(edit_event_by_id(props.id))
  }
  return (
    <div className={styles.container}>
      <div className={styles.fonts}>
        <Link to={`/${props.url}/${props.id}`}>
          <h2 className={styles.text}>{props.title}</h2>
          <h5 className={styles.text}>{props.subTitle}</h5>
        </Link>
      </div >
      <div className={styles.options}>
        <button className={styles.buttonEdit} onClick={() => {handleClickEditEvent}}>Editar Evento</button>
        <button className={styles.buttonClose}>Cerrar Evento</button>
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
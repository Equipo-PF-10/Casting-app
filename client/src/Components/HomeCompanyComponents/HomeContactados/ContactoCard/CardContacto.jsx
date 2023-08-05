import styles from './CardContacto.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

const CardContacto = (props) => {
  const dispatch = useDispatch();

  const handleClickContratar = () => {
    //eliminar de la lista de contactos y postear en la de contratados
  }
  return (
    <div className={styles.container}>
      <div className={styles.fonts}>
        {/* REDIRIGIR AL PERFIL DEL CONTACTADO */}
        <Link to={`${props.url}/${props.id}`}>
          <h2 className={styles.text}>{props.name}</h2>
          {/* <h5 className={styles.text}>{props.habilities ? props.habilities.map((hability)=> `${hability} `) : null}</h5> */}
          <h5 className={styles.text}>{props.habilities}</h5>
        </Link>
      </div >
      <div className={styles.options}>
        <button className={styles.buttonEdit} onClick={() => {handleClickContratar}}>Contratar</button>
        {/* ¿Estas seguro/a de mover al postulante a la lista de Contratados? */}
        <button className={styles.buttonClose}>Rechazar</button>
      </div>
    </div>
  );
};

export default CardContacto;

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
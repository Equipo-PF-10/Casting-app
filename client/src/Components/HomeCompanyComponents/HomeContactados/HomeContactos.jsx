import CardContacto from "./ContactoCard/CardContacto";
import styles from "./HomeContactos.module.css";

const HomeContactos = (props) => {
  //console.log(props.eventDetail.index);
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <hr />
      {props.contactedTalents && props.contactedTalents.length > 0 ? (
        typeof props.contactedTalents === "object" ? (
          props.contactedTalents?.map((event) => (
            event.Applieds?.map((talent, index) => {
              return (
                <CardContacto
                  key={index}
                  name={talent[0]?.name}
                  habilities={talent[0]?.hability}
                  url={props.url}
                  id_talent={talent[0]?.id}
                  id_company={props.id_company}
                  id_event={props.eventDetail.length > 0 && props.eventDetail[index]}
                  id_post={talent[0]?.TalentApplied?.AppliedId}
                />
              );
            })
          ))
        ) : (
          <h4 className={styles.mensajePost}>
            En esta sección podrá visualizar a los postulantes a eventos que
            fueron Contactados.
          </h4>
        )
      ) : (
        <h4 className={styles.mensajePost}>
          En esta sección podrá visualizar a los postulantes a eventos que
          fueron Contactados.
        </h4>
      )}
    </div>
  );
};

export default HomeContactos;

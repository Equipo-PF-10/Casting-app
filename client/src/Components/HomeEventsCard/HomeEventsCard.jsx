import styles from './HomeEventsCard.module.css';
import HomeEvent from './HomeEvent/HomeEvent.jsx';
import {connect, useDispatch} from 'react-redux';


const HomeEventsCard=(props) => {
  //const dispatch = useDispatch()
  console.log(props.eventDetail);
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <hr />
      {props.eventDetail.length === 0
        ? 
        <h4 className={styles.mensajeEvento}>En esta sección podrá visualizar sus Eventos publicados.</h4>
        :
        props.eventDetail.map((event, index) => {
            return (
              <HomeEvent
                key={index}
                title={event.name}
                subTitle={event.shortDescription}
                url={props.url}
                id={event.id}
                handleDelete={props.handleDelete}
              />
            );
          })
        }
      {/* <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        />
        <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        />
        <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        /> */}
    </div>
  );
};

export default HomeEventsCard;

//export default connect(mapStateToProps, null)(HomeEventsCard);
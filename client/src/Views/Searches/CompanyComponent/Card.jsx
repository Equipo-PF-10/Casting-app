import React from 'react'
import style from './Card.module.css'

const Card = () => {
  return (
    <div className={style.containerCard}>
          <div className={style.imagen}>
              <img src="" alt="" />
          </div>
          <div>
              <h4>Nombre Apellido</h4>
              <h5>Titulo</h5>
          </div>
    </div>
  )
}

export default Card

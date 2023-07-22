import React from 'react'
import style from './DetailComp.module.css'

const Detail = () => {
  return (
    <div className={style.containerDetail}>
      <h2>Nombre Apellido</h2>
      <h5>Locación</h5>
      <h5>Empresa</h5>
      <p className={style.textoDetail}>
        Fusce ac lacus ac diam ullamcorper egestas ut nec velit. Duis facilisis
        urna vel sapien elementum euismod. Phasellus aliquet feugiat pretium.
        Etiam id dignissim dui. Maecenas ex velit, fringilla non scelerisque ut,
        ullamcorper vel tellus. In lacinia tincidunt lorem et ullamcorper. Etiam
        nec facilisis felis.imperdiet. Fusce ac lacus ac diam ullamcorper
        egestas ut nec velit. Duis facilisis urna vel sapien elementum euismod.
        Phasellus aliquet feugiat pretium. Etiam id dignissim dui. Maecenas ex
        velit, fringilla non scelerisque ut, ullamcorper vel tellus. In lacinia
              tincidunt lorem et ullamcorper.
              Etiam nec facilisis felis. Donec magna
        ex, interdum non interdum ut, fermentum a lorem. Donec quis neque eu
        magna sollicitudin fermentum sed dapibus elit. Etiam molestie accumsan
        velit pharetra imperdiet.
      </p>
      <p className={style.textoDetail}>
        Fusce ac lacus ac diam ullamcorper egestas ut nec velit. Duis facilisis
        urna vel sapien elementum euismod. Phasellus aliquet feugiat pretium.
        Etiam id dignissim dui. Maecenas ex velit, fringilla non scelerisque ut,
        ullamcorper vel tellus. In lacinia tincidunt lorem et ullamcorper. Etiam
        nec facilisis felis.imperdiet. Fusce ac lacus ac diam ullamcorper
        egestas ut nec velit. Duis facilisis urna vel sapien elementum euismod.
      </p>
      <div className={style.conteinerConectar}>
        <button className={style.postularme}>Postularme</button>
      </div>
    </div>
  );
}

export default Detail

import './AddsModule.css'

function Adds() {
    return (
        // <div className='anuncio'>
        //     <div className='imagen-container'>
        //         <img src="film-muestra.jfif" alt="" />
        //     </div>
        //     <div className='resumen'>
        //         <h6>Resumen del Evento</h6>
        //         <p>Lorem, igfghfghfghfhfghfghfgdfsgffggfgpsum dolor sit amet consectetur adipisicing elit.
        //         </p>
        //     </div>
        //     <div className='requeridos'>
        //         <h6>Resumen de Solicitudes</h6>
        //         <li>Actor</li>
        //         <li>Mago</li>
        //         <li>Promotor/a</li>

        //     </div>
        //     <div className='button-container'>
        //         <button className='postularte-button'><a href="">Postulate</a></button>
        //     </div>
        // </div>
    <div className='card-container'>
        <div className="card-img">
        <img src="film-muestra.jfif" alt="" />
        </div>
        <div className="card-info">
            <p className="text-title">Anuncio </p>
            <p className="text-body">largo de la descripción-----------------------------------------------------------------------------------------------------------</p>
        </div>
        <div className="card-footer">
            <label className='talento-label'>Actor</label>
            <label className='talento-label'>Mago</label>
            <label className='talento-label'>Promotor</label>
            <button className='talento-button'>Postulate</button>
            {/* <div className="card-button"> 
            </div>*/}
        </div>
    </div>
    )
};

export default Adds;
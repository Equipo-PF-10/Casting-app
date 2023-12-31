import React from 'react';


const emailSend = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      event.target.reset();
      alert('Gracias por contactarte con CastingAPP, te responderemos a la brevedad');
    }
  };

  return (
       
        
    <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="card">
                <div className="card-header text-center">
                  <h1>Formulario de contacto</h1>
                </div>
                <div className="card-body">
                  <form action="https://formspree.io/f/xoqovoyp" method="POST" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Nombre"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="Correo electrónico"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" name="message" rows="6" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-primary w-100">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>    
  );
};

export default emailSend;
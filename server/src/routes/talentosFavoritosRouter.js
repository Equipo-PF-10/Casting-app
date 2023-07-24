const express = require('express');
const router = express.Router();
const { agregarTalentoFavoritoHandler, obtenerTalentosFavoritosDeEmpresaHandler} = require('../handlers/talentosFavoritosHandler')

// Rutas para los talentos favoritos
router.post('/favorito', agregarTalentoFavoritoHandler);
router.get('/:idEmpresa/favoritos', obtenerTalentosFavoritosDeEmpresaHandler);
module.exports = router;
const { Router } = require('express')
const router = Router()
const { 
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController } = require('../controllers')

// CRUD de mascotas 
router.post('/mascotas', crearMascota)
router.get('/mascotas', obtenerTodasMascotas)
router.get('/mascotas/:idMascota', obtenerMascota)
router.put('/mascotas/:idMascota', modificarMascota)
router.delete('/mascotas/:idMascota', eliminarMascota)


/* ejercicios */
// ejercicio 1 CRUD
router.get('/api', apiController)
// ejercicio 2 CRUD
router.get('/api/suma', apiSumaController)
// ejercicio 3 CRUD
router.get('/api/usuario/:nombre', apiUsuarioController)
// ejercicio 4 CRUD
router.put('/api/body', apiBodyController)

module.exports = router
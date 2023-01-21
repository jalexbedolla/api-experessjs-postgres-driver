const { Router } = require('express')
const router = Router()
const { controllerget, controllerpost} = require('../controllers')


// esto se le llama controlador
router.get('/products/:productid', controllerget) // params
router.post('/products', controllerpost)


module.exports = router
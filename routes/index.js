const { Router } = require('express')
const router = Router()


router.get('/users', function (req, res) { 
  console.log(req);
  res.json({message: 'hola soy la puta respuesta'})
})

module.exports = router
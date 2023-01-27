const connect = require('../database')

// req ---> recibe datos de la peticion
// res ---> responde al cliente
// req.params ---> recibimos los datos que llegan por la URL pero son obligatorios
// req.query ---> recibimos los datos que llegan por la URL pero son opcionales
// req.body ---> recibimos los datos que llegan en el body

//controladores de mascotas 'aka peticiones'

/* crearmascota */
const crearMascota = (req, res) => { // este es de tipo 'post'
  console.log('crear mascota');

  const nombre = req.body.nombre
  const edad = req.body.edad
  console.log(`el nombre de la mascota es ${nombre} y tiene ${edad} años`);

  /* pasamos los codigos */
  res.status(201).send({
    message: 'tu mascota fue creada'
  })
}

/* obtenerTodasMascotas */ // este es de tipo 'get'
const obtenerTodasMascotas = async (req, res) => {
  try {
    const dbResponse = await connect.query('SELECT * FROM mascotas')
    res.status(200).send({
      data: dbResponse.rows
    })
  } catch (error) {
    res.status(404).send({
      error 
    })
  }
}

/* obtenerMascota */
const obtenerMascota = (req, res) => {
  console.log('obtener una Mascota');
}
/* modificarMascota */
const modificarMascota = (req, res) => {
  console.log('modificar Mascota');
}
/* eliminarMascota */
const eliminarMascota = (req, res) => {
  console.log('eliminar Mascota');
}

/* CRUD ejercicios */
// este seria el home
const apiController = (req, res) => {
  res.status(200).send({
    message: 'Hola Mundo'
  })
}

// ejercicio 2 'queries'
/*  en esta creamos variables para recibir las queries */
/* localhost:3000/api/suma?num1=5&num2=10 */
const apiSumaController = (req, res) => {
  const numeroUno = Number(req.query.num1)
  const numeroDos = Number(req.query.num2)
  
  const resultadoSuma = numeroUno + numeroDos
  res.status(200).send({
    resultado: resultadoSuma
  })
}

// ejercicio 3 'params'
// localhost:3000/api/usuario/merlin
const apiUsuarioController = (req, res) => {
  res.status(200).send({
    usuario: req.params.nombre
  })
}

// ejercicio 4 'body'
// localhost:3000/api/body
const apiBodyController = (req, res) => {
  const data = req.body

  res.status(200).send(data)
}

module.exports = {
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController
}
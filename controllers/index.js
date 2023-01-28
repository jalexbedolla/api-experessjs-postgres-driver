const connect = require('../database')

// req ---> recibe datos de la peticion
// res ---> responde al cliente
// req.params ---> recibimos los datos que llegan por la URL pero son obligatorios
// req.query ---> recibimos los datos que llegan por la URL pero son opcionales
// req.body ---> recibimos los datos que llegan en el body

//controladores de mascotas 'aka peticiones'

/* crearmascota */
const crearMascota = async (req, res) => { // este es de tipo 'post'
  const { nombre, tipo, raza, edad, propietario_id } = req.body
    try {
      const dbResponse = await connect.query('INSERT INTO mascotas (nombre, tipo, raza, edad, propietario_id) VALUES($1, $2, $3, $4, $5)', [nombre, tipo, raza, edad, propietario_id])
        if(dbResponse.rowCount > 0){
          res.status(201).send({
            message: 'Mascota Creada'
          })
        } else{
          res.status(409).send({
            message: 'valio vrga'
          })
        }       
    } catch (error) {
      res.status(409).send({
        error
      })
    }
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
const obtenerMascota = async (req, res) => {
  const id = req.params.idMascota
  console.log(id);
  try {
    const dbResponse = await connect.query('SELECT * FROM mascotas WHERE  id_mascota =$1', [id])
      if(dbResponse.rowCount > 0) { res.status(200).send({
        data: dbResponse.rows
      })
    } else {
        res.status(404).send({
          message: 'mascota no encontrada'
        })
    }
  } catch (error) {
    res.status(404).send({
      error
    })
  }
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
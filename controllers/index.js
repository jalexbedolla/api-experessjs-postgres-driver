// req ---> recibe datos
// res ---> responde al cliente

const controllerget = (req, res) => {
  console.log(req.params); // recibimos datos que llegan por la URL, pero , me limitan la ruta
  console.log(req.query); //  recibimos datos que llegan por la URL.. pero no me limitan la ruta
 
 /*  if(req.query.name) {
    console.log('hola ' + req.query.name);
  } */
  res.send({
    message: 'este es el id ' + req.params.productid
  })
}

const controllerpost = (req, res) => {
  console.log(req.body); // se utiliza normalmente con POST, PUT, PATCH o DELETE

  res.send({
    message: 'usuario registrasdo con exito'
  })

}

module.exports = {
  controllerget,
  controllerpost
}
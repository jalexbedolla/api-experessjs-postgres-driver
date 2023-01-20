const express = require('express') // importamos la libreria express
const app = express() // inicializamos la libreria en una constante
const router = require('./routes') // importamos las rutas

//middlewares --> obtienen los datos de la peticion antes de que lleguen a la nuestra funcion
app.use(express.json()) // nos comunicamos a travez del formato JSON
app.use(express.urlencoded({extended: false})) // permitimos recibir datos del formulario

// utilizamos las rutas... this is a middleware too
app.use(router)

app.listen(3000, (error)=>{
  error ? console.log(error) : console.log('Server running');
})


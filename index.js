const express = require('express')
const app = express()

app.get('/user', (req, res) => { console.log('hola perrillo') })

app.listen(3000, (error)=>{
  error ? console.log(error) : console.log('Server running');
})
const { Pool } = require("pg")

const connect = new Pool({
  host:"localhost",
  user:"postgres",
  password:"alex",
  database:"intro-backend",
  port:"5432"
})

module.exports = connect
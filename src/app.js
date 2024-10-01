const express = require("express");
const dontenv = require('dotenv')
const connectDB = require ("./config/db")
const userRoutes = require('./routes/userRoutes')
const timesRoutes = require("./routes/times")
dontenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use('/api', userRoutes)
app.use("/times", timesRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
module.exports = app
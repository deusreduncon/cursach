require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const http = require('http');

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

const server = http.createServer(app);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        server.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}


start()

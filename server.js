const exp = require('express')
const app = exp()
const mysql = require('mysql')
const myconn = require("express-myconnection")

const routes= require('./routes')

app.set('port', process.env.PORT || 3000)
const BDOptions= {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'cine'
}

//middlewares
app.use(myconn(mysql, BDOptions, 'single'))
app.use(exp.json())

//routes
app.get('/', (req, res) =>{
    res.send('Bienvenido al web service sencillo')
})

app.use('/api', routes)

//server corriendo hacia la laguna del nainari
app.listen(app.get('port'), () =>{
    console.log('El servidor está corriendo en el puerto', app.get('port'))
})
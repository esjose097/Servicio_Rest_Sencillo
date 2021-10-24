const exp = require('express')
const app = exp()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) =>{
    res.send('Bienvenido al web service sencillo')
})

app.listen(app.get('port'), () =>{
    console.log('El servidor está corriendo en el puerto', app.get('port'))
})
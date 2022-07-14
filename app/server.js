var express =  require('express') //Llamamos express
var app = express();

var port = process.env.PORT || 8080; //Establecer nuestro puerto

app.get('/', function(req, res){
    res.json({mensaje: '¡Hola Mundo!'})
})

app.get('/cervezas', function(req, res){
    res.json({mensaje: '¡A bebe cerveza!'})
})

app.post('/', function(req, res){
    res.json({mensaje: 'Metodo Post'})
})

app.delete('/', function(req, res){
    res.json({mensaje: 'Metodo delete'})
})

//iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto' + port)
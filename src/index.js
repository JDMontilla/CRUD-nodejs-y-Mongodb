const express = require('express');
const conectarBD = require('../config/db');
const cors = require ('cors');

// ceamos nuestro servidor
const app = express();

// enlazamos la conexion con nuestra base de datos

conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require ('../routes/rutas'));



//definir ruta principal 

app.get('/',(req,res)=>{
    res.send('Hola Mundo desde la web');
})

app.listen(3000,() =>{
    console.log('El servidor esta conectado http://localhost:3000/');
})
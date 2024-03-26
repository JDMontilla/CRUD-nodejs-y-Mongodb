const mongoose = require ('mongoose');

// el modelo que se cree aca debe ser igual al de la base de datos

const clienteShema = mongoose.Schema({

    nombres:{
        type: String,
        require: true
    },
    apellidos:{
        type: String,
        require: true
    },
    documento:{
        type: Number,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    telefono:{
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
},{versionkey:false});

module.exports = mongoose.model('cliente', clienteShema);

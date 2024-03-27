const Cliente = require('../models/Cliente');

// Funcion para buscar clientes 

exports.buscarClientes = async(req, res) => {
    try {

        const clientes = await Cliente.find();
        res.json(clientes);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

// Funcion agregar clientes
exports.agregarClientes = async(req, res) => {

    try {

     let clientes;
     clientes = new Cliente(req.body)
     console.log(req)  
     await clientes.save();
     res.send(clientes); 
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente');
    }

}
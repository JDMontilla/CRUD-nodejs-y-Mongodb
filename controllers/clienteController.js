const Cliente = require('../models/Cliente');

// Función para buscar los clientes que esten en la base de datos

exports.buscarClientes = async(req, res) => {
    try {

        const cliente = await Cliente.find();
        res.json(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar los clientes');
    }
}

// Funcion agregar clientes
exports.agregarClientes = async(req, res) => {

    try {

     let cliente;
     cliente = new Cliente(req.body)  
     await cliente.save();
     res.send(cliente); 
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente'); 
    }

}

// Función para buscar los clientes que esten en la base de datos

exports.buscarCliente = async(req, res) =>{

    try {
        let = cliente = await Cliente.findById(req.params.id)
        if(!cliente){
            res.status(404).json({msg: 'Cliente no encontrado con ese ID'});
        }
        res.send(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}


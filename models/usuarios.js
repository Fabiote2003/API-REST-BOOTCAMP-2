const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    lastName: {
        type: String,
        required: [true, 'El lastname es obligatorio']
    },
    age: {
        type: Number,
        required: [true, 'La edad es obligatoria']
    },
    address: {
        type: String,
        required: [true, 'La dirección es obligatoria']
    }
});

module.exports = model( 'Usuario', UsuarioSchema );
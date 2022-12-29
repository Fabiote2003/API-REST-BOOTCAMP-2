const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre del rol es obligatorio'],
    },
    desc: {
        type: String,
        required: [true, 'La descripción del rol es obligatoria']
    }
});

module.exports = model( 'Role', RoleSchema );
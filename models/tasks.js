const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la tarea es obligatorio'],
    },
    desc: {
        type: String,
        required: [true, 'La descripción de la tarea es obligatoria']
    }
});

module.exports = model( 'Task', TaskSchema );
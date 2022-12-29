const { response, request } = require('express');
const Task = require('../models/tasks')

const tasksGet = async (req = request, res = response) => {
    const tasks = await Task.find();
    res.json({
        tasks,
    })
}

const tasksPost = async (req = request, res = response) => {
    const body = req.body;
    const task = new Task(body);
    try {
        await task.save();
        res.json({
            msg: "Tarea agregada correctamente",
            task,
        })
    } catch (error) {
        res.json({
            msg: "La tarea no pudo ser agregada",
        })
    }
}

const tasksGetById = async (req = request, res = response) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        res.json({
            task,
        })
    } catch (error) {
        res.json({
            msg: "No se pudo obtener la tarea"
        })
    }
    

}

const tasksPut = async (req = request, res = response) => {
   const {id} = req.params;
   const {_id, ...resto} = req.body;
   try {

    const tareaActualizada = await Task.findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'Tarea actualizada correctamente',
        tareaActualizada,
    })

   } catch (error) {
    res.json({
      msg: 'No se pudo actualizar la tarea',
    })
   }
}

const tasksDelete = async (req = request, res = response) => {
    const {id} = req.params;
    try {
        const tareaEliminada = await Task.findByIdAndRemove(id);
        res.json({
            msg: "Tarea eliminada correctamente",
            tareaEliminada
        })
    } catch (error) {
        res.json({
            msg: "No se pudo eliminar la tarea",
        })
    }
}
module.exports = {
    tasksGet,
    tasksPost,
    tasksGetById,
    tasksPut,
    tasksDelete
}
const { response, request } = require('express');
const Usuario = require('../models/usuarios');

const usuariosGet = async (req = request, res = response) => {
   const usuarios = await Usuario.find();
   const total = await Usuario.countDocuments();
   res.json({
    usuarios,
    total,
   })
}

const usuariosPost = async (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario( body );

    await usuario.save();

    res.json({
        usuario
    })

}

const usuariosGetById = async (req, res = response) => {
   const userId = req.params.id;
   try {
        const usuario = await Usuario.findById(userId);
        res.json(usuario)
   } catch (error) {
        res.json({
            msg: "No se encontro un usuario con ese ID"
        })
   }

}

const usuariosPut = async (req, res = response) => {
   const {id} = req.params;
   const {_id, ...resto} = req.body;
   try {

    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, resto);
    
    res.json({
    msg: 'Usuario actualizado correctamente',
    usuarioActualizado,
    })

   } catch (error) {
    res.json({
      msg: 'No se pudo actualizar el usuario',
    })
   }
   
}

const usuariosDelete = async (req, res = response) => {
   const {id} = req.params;
   try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    res.json({
        msg: "Usuario eliminado",
        usuarioEliminado,
    })
   } catch (error) {
    res.json({
        msg: "No se pudo eliminar el usuario"
    })
   }
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosGetById,
    usuariosPut,
    usuariosDelete
}
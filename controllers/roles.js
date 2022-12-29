const { response, request } = require('express');
const Role = require('../models/roles')

const rolesGet = async (req = request, res = response) => {
   const roles = await Role.find();
   res.json({
    roles,
   })
}

const rolesPost = async (req = request, res = response) => {
    const body = req.body;
    const rol = new Role(body);
    
    try {
        await rol.save();
        res.json({
            msg: "Rol creado correctamenta!",
            rol,
        })
    } catch (error) {
        res.json({
            error
        })
    }
    
}

const rolesGetById = async (req = request, res = response) => {
    const rolId = req.params.id;
    try {
        const rol = await Role.findById(rolId);
        res.json(rol)
   } catch (error) {
        res.json({
            msg: "No se encontro un rol con ese ID"
        })
   }
}

const rolesPut = async (req = request, res = response) => {
    const {id} = req.params;
   const {_id, ...resto} = req.body;
   try {

    const rolActualizado = await Role.findByIdAndUpdate(id, resto);
    
    res.json({
    msg: 'Usuario actualizado correctamente',
    rolActualizado,
    })

   } catch (error) {
    res.json({
      msg: 'No se pudo actualizar el rol',
    })
   }
   
}

const rolesDelete = async (req = request, res = response) => {
   const {id} = req.params;
   try {
    const rolEliminado = await Role.findByIdAndDelete(id);
    res.json({
        msg: "Rol eliminado",
        rolEliminado,
    })
   } catch (error) {
    console.log(error)
    res.json({
        msg: "No se pudo eliminar el rol"
    })
   }
}
module.exports = {
    rolesGet,
    rolesPost,
    rolesGetById,
    rolesPut,
    rolesDelete
}
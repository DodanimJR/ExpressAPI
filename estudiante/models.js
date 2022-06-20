const Joi = require('joi')
const StudentModel= Joi.object({
    primerNombre: Joi.string().required(), 
    primerApellido: Joi.string().required(), 
    edad: Joi.string().required(), 
    paisOrigen: Joi.string().required(), 
    carrera: Joi.string().required(),
    materias: Joi.array(), 
    moroso: Joi.boolean().required(), 
    deudaCicloAnual: Joi.number().integer().required()
})

module.exports={
    StudentModel
}
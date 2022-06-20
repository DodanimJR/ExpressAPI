const { PrismaClient } = require('@prisma/client');
const e = require('express');
const prisma = new PrismaClient()
const getAllStudents = async()=>{
    const students = await prisma.Estudiante.findMany();
    return students;
}
const createStudent = async(bodys)=>{
    try {
        const params=bodys.value;
        const newStudent =await prisma.Estudiante.create({
            data:{
                "primerNombre":params.primerNombre , 
                "primerApellido": params.primerApellido, 
                "edad": params.edad, 
                "paisOrigen": params.paisOrigen, 
                "carrera": params.carrera,
                "materias":params.materias, 
                "moroso":params.moroso , 
                "deudaCicloAnual": params.deudaCicloAnual
            }
        });
        return newStudent;
    } catch (error) {
        throw error
    }
}
const getStudentById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const student = await prisma.Estudiante.findUnique({where:{id:finalId}});
        if(student!=null){
            return student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateStudent = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const student = await prisma.Estudiante.update({
            where:{id:finalId},
            data:{
                "primerNombre":params.primerNombre , 
                "primerApellido": params.primerApellido, 
                "edad": params.edad, 
                "paisOrigen": params.paisOrigen, 
                "carrera": params.carrera,
                "materias":params.materias, 
                "moroso":params.moroso , 
                "deudaCicloAnual": params.deudaCicloAnual
            }
        });
        if(student!=null){
            return student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveStudent = async(id)=>{
    try {
        const finalId= parseInt(id);
        const student = await prisma.Estudiante.delete({where:{id:finalId}});
        if(student!=null){
            return student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createStudent,
    getAllStudents,
    getStudentById,
    UpdateStudent,
    RemoveStudent
}
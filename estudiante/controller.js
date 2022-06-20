const StudentServics=require('./studentService')
const createStudentmodel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    students=await StudentServics.getAllStudents();

    res.json(students);
}

const create = async(req,res)=>{
    try {
        const body = await createStudentmodel.StudentModel.validate(req.body);
        const newStudent=await StudentServics.createStudent(body);
        res.json({"Created student":body}); 

        //console.log(req.body);
    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        const body = await createStudentmodel.StudentModel.validate(req.body);
        const result = await StudentServics.UpdateStudent(body,id);
        if(result){
            res.json({"response":result});
        }

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}
const remove = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await StudentServics.RemoveStudent(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
}

const getbyId =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await StudentServics.getStudentById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}

module.exports={
    getAll,
    create,
    update,
    remove,
    getbyId
}
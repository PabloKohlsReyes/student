import { StudentModel } from "../models/StudentModel.js";

export const getStudents = async (req,res)=>{
    try {
        const students = await StudentModel.find()
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const getStudent = async (req,res)=>{
    const {id}=req.params
    try {
        const student = await StudentModel.findById(id)
        if (!student) {
            return res.status(404).json('Estudiante no encontrado')            
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const createStudents = async (req,res)=>{
    try {
        const student = await StudentModel.create(req.body)
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const updateStudent = async (req,res)=>{
    const {id}=req.params
    try {
        const student = await StudentModel.findByIdAndUpdate({_id:id},
            req.body,
            {new:true})
            res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const deleteStudent = async (req,res)=>{
    const {id}=req.params
    try {
        const student = await StudentModel.findByIdAndDelete(id)
        if (!student) {
            return res.status(404).json('Estudiante no encontrado')            
        }
        res.status(200).json('Estudiante eliminado');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



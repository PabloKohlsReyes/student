import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema
(
    {
        name: {
            type: String,
            required: [true,"por favor llena esto"]
        },        
            address: {
                type: String,
                required: [true,"por favor llena esto"]
        },
        phone:{
            type:Number,
            required: [true, "por favor llena esto"]
        }
    },{
        timestamps: true,
        versionKey: false
    }    
)

export const StudentModel = mongoose.model("Student", studentSchema)
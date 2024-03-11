
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        unique : true,
    }
}, {timestamps:true}
)

export const todo = mongoose.modal("todo", userSchema);
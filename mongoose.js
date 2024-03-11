import mongoose from "mongoose";

 const newSchema = new mongoose.Schema({ 
       userName : {
        type: String,
        email: String,
        unique: true,
        lowercase:true
       },
       createdBy:{
        type: mongoose.Schema.type.objectID,
        ref: "todo"
       },
       subtodo : {
        type: mongoose.schema.type.objectID,
        ref: "sub"
       }
   }, {timestamps:true}
 );

 export const User = mongoose.model("User", newSchema);
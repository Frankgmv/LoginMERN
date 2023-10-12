import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minLength: [6, "La contraseña debe tener mínimo 6 caracteres"]
    }
},{ 
    timestamps: true
})

export default mongoose.model("User", userSchema);
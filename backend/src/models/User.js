import mongoose from "mongoose";

import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    bio: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },
    nativeLanguage: {
        type: String,
        default: "",
    },
    isOnboarded: {
        type: Boolean,
        default: false,
    },
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ]
}, { timestamps: true })
// createdAt, updatedAt
//member since createdAt


// pre hook
// e.g: ashish@gamil.com pass: ashish123 => $?__12as%$@2 2 422c2__#?$

userSchema.pre("save", async function (next) {
    //pre hook
    if(!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error)
    }
    
    
})

userSchema.methods.matchPassword = async function (enteredPassword){
    const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
    return isPasswordCorrect;
}

const User = mongoose.model("User", userSchema)
export default User
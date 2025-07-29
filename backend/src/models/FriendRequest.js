import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    recipient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "accepted"],
        default: "pending"
    },
}, 
 {timestamps: true}  // by using timestamp, it gives us createAt & updatedAt field in DB field
 );

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);

export default FriendRequest;














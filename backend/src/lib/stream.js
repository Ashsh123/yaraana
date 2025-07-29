import {StreamChat} from 'stream-chat'
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API Key or Secret Key is missing ");
}
    
const streamClient = StreamChat.getInstance(apiKey, apiSecret)

export const upsertStreamUser = async (userData)=>{
    try {
        await streamClient.upsertUsers([userData]) //upsertUsers : it create a new user if it does not present otherwise it updates
        return userData
    } catch (error) {
        console.error("Error upserting Stream user:", error);
        
    }
}

export const generateStreamToken = (userId)=>{
    try {
        // ensure userId is a String
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        
    }
}





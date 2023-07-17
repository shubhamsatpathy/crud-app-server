import mongoose from "mongoose"

const Connection= async()=>{
    const URL='mongodb+srv://shubham:shubham@crud-app.c91pqha.mongodb.net/do-survey?retryWrites=true&w=majority';
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
       console.log("DB CONNECTED SUCCESSFULLY");

    }catch(error){
        console.log("ERROR WHILE CONNECTING TO DB ",error);
    }

}
export default Connection 
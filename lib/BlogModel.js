import mongoose from "mongoose";
import dbConnect from "./dbConnect";

dbConnect();
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , "Blog title is missing!"],
        unique:[true , "This title is already used in some blog! please chnge the title of the blog!"]
    },
    authorName:{
        type:String,
        required:[true , "Author name is missing fot the blog!"],
    },
    linkdInProfileURL:{
        type:String,
        required:[true, "Please provide the linkedin profile link of the author!"],
    },
    imgURL:{
        type:String,
        default:"/blogImage.jpg",
    },
    content:{
        type:String,
        required:[true, "There is no content in this blog!"]
    }
});


export default mongoose.models.Blog || mongoose.model("Blog" , blogSchema);
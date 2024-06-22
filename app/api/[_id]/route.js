import Blog from "@/lib/BlogModel";
import { NextResponse } from "next/server";


export async function GET(req , {params}) {
    try {
        let blog = await Blog.findOne({_id:params._id});
        if(blog) {
            return NextResponse.json({success:true , blog});            
        }
        return NextResponse.json({success:false , message:"invalid request!"});
    } catch(error) {
        return NextResponse.json({success:false , message:"invalid request!"});
    }
}
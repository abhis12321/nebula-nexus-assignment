import { NextResponse } from "next/server";
import Blog from '/lib/BlogModel';

export async function GET() {
    try {
        let blogs = await Blog.find();
        return NextResponse.json({success:true , blogs});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}


export async function POST(req) {
    try {
        let blogData = await req.json();
        if(!(blogData?.imgURL?.length > 0))  blogData.imgURL = "/blogImage.jpg";        
        let blog = new Blog(blogData);
        await blog.save();
        return NextResponse.json({success:true , blog});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}
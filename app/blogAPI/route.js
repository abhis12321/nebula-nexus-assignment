import { NextResponse } from "next/server";
import Blog from '/lib/BlogModel';


export async function POST(req) {
    try {
        let blogdata = await req.json();
        let blog = new Blog(blogdata);
        await blog.save();
        return NextResponse.json({success:true , blog});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}
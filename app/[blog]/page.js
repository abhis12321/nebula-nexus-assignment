"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function page({ params }) {
    const [blog, setBlog] = useState();
    useEffect(() => {
        axios.get(`/api/${params.blog}`)
            .then(response => response.data)
            .then(data => data.success ? setBlog(data.blog) : alert(data.message));
    }, []);

    const copyURL = e => {
        e.target.classList.replace('text-red-950', 'text-green-800');
        navigator.clipboard.writeText(`https://nebula-nexus-assignment.vercel.app/${blog?._id}`);
        e.target.innerText = "copied";
    }


    return (
        <div className='flex items-center justify-center flex-col px-1 sm:px-2 py-4'>
            {
                blog ?
                    <div className='ring-2 bg-blue-900/10 px-2 sm:px-3 pt-3 pb-5 rounded w-[98%] max-w-[750px] flex flex-col items-start justify-start relative'>
                        <div className="absolute bottom-2 left-3 px-2 py-1 rounded cursor-pointer font-semibold text-red-950 hover:bg-gray-700/20 text-sm bg-gray-700/10 shadow-[0_0_2px_gray]" onClick={copyURL}>share</div>
                        <img src={blog?.imgURL} alt='blog-image' className='rounded self-center w-full' width={400} height={350} />
                        <h2 className="sm:px-1 py-2 text-2xl font-bold font-serif text-red-950">{blog?.title}</h2>
                        <div className="sm:px-1 font-mono text-gray-600 text-sm">{blog?.content}</div>
                        <Link href={`${blog ? blog.linkdInProfileURL : '/'}`} target='_blank' className='px-2 text-[11px] hover:underline self-end font-semibold text-blue-800'>__{blog?.authorName.toLowerCase()}</Link>
                    </div>
                    :
                    <div className="">Invalid request</div>
            }
        </div>
    )
}

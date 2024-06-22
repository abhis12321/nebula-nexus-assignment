import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blog }) {
    const copyURL = e => {
        e.target.classList.replace('text-green-700' , 'text-red-950');
        navigator.clipboard.writeText(`https://nebula-nexus-assignment.vercel.app/${blog?._id}`);
        e.target.innerText = "copied";
    }

    return (
        <div className='ring-2 bg-blue-900/10 px-2 sm:px-3 pt-2 pb-3 rounded w-[98%] max-w-[400px] flex flex-col items-start justify-start relative'>
            <div className="absolute bottom-1 left-3 px-2 py-1 rounded cursor-pointer font-semibold text-green-700 hover:bg-gray-700/20 text-xs bg-gray-700/10 shadow-[0_0_2px_gray]" onClick={copyURL}>share</div>
            <img src={blog.imgURL} alt='blog-image' className='rounded self-center w-full' width={400} height={350}/>
            <h2 className="sm:px-1 py-2 text-2xl font-bold font-serif text-red-950">{blog.title}</h2>
            <div className="sm:px-1 font-mono text-gray-600 text-sm">{blog.content.substring(0 , 60)}... <Link href={`/${blog._id}`} className='text-blue-600 underline hover:text-blue-900'>read more&gt;&gt;</Link></div>
            <Link href={blog.linkdInProfileURL} target='_blank' className='px-2 text-[11px] hover:underline self-end font-semibold text-blue-800'>__{blog.authorName.toLowerCase()}</Link>
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className='ring-2 bg-blue-900/10 p-3 rounded w-[98%] max-w-[500px] flex flex-col items-start justify-start'>
            <Image src={"/blogImage.jpg"} alt='blog-image' className='rounded self-center w-[98%]' width={400} height={350}/>
            <h2 className="p-2 text-2xl font-bold font-serif text-red-950">{blog.title}</h2>
            <p className="px-2 font-mono text-gray-600 text-sm">{blog.content}</p>
            <Link href={blog.linkdInProfileURL} target='_blank' className='px-2 text-[11px] hover:underline self-end font-semibold text-blue-800'>__{blog.authorName.toLowerCase()}</Link>
        </div>
    )
}

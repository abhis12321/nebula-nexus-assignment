import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className=''>
            <Image src={blog.imgURL} className=''/>
            <h2 className="">{blog.title}</h2>
            <p className="">{blog.content}</p>
            <Link href={blog.linkdInProfileURL} className=''>{blog.authorName}</Link>
        </div>
    )
}

"use client"
import React, { useEffect, useState } from 'react'
import BlogForm from './_components/BlogForm'
import axios from 'axios';
import BlogCard from './_components/BlogCard';

export default function page() {
  const [blogs , setBlogs] = useState([]);
  const [blogForm , setBlogForm] = useState(false);

  useEffect(() => {
    axios.get('/api')
        .then(response => response.data)
        .then(data => data.success ? setBlogs(data.blogs) : console.log(data.message))
        .catch(error => console.log(error.message));
  } , []);


  return (
    <div className='py-5'>
    {
      blogForm ?
        <BlogForm setBlogForm={setBlogForm} setBlogs={blog => setBlogs([...blogs , blog])} />
        :
        <h1 className="mx-auto py-2 px-6 w-fit text-red-950 hover:text-white bg-red-950/20 hover:bg-red-950 ring-1 ring-red-950 rounded-xl cursor-pointer outline-none font-semibold duration-300" onClick={e => setBlogForm(true)}>write a new blog</h1>
    }

      <div className="flex gap-4 xs:px-1 py-4 flex-wrap justify-center">
        {
          blogs?.map((blog , index) => <BlogCard key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  )
}

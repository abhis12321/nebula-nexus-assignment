"use client"
import React, { useEffect, useState } from 'react'
import BlogForm from './_components/BlogForm'
import axios from 'axios';
import BlogCard from './_components/BlogCard';

export default function page() {
  const [blogs , setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/blogAPI')
        .then(response => response.data)
        .then(data => data.success ? setBlogs(data.blogs) : console.log(data.message))
        .catch(error => console.log(error.message));
  });


  return (
    <div>
      statring the assignment
      <BlogForm />

      <div className="flex gap-4 p-4 flex-col items-center justify-center">
        {
          blogs?.map((blog , index) => <BlogCard key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  )
}

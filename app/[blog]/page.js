"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page({params}) {
    const [blog , setBlog] = useState();
    useEffect(() => {
        axios.get(`/api/${params.blog}`)
            .then(response => response.data)
            .then(data => data.success ? setBlog(data.blog) : alert(data.message));
    });

  return (
    <div>
      hello
    </div>
  )
}

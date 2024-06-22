import axios from 'axios';
import React, { useState } from 'react'

export default function BlogForm({ setBlogForm , setBlogs }) {
    const [title, setTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [linkdInProfileURL, setLinkdInProfileURL] = useState('');
    const [content, setContent] = useState('');
    const [imgURL, setImgURL] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/blogAPI', { title, authorName, linkdInProfileURL, content, imgURL })
            .then(response => response.data)
            .then(data => data.success ? setBlogs(data.blog) : alert(data.message))
            .catch(error => console.log(error.message))

        setTitle('');
        setAuthorName('');
        setLinkdInProfileURL('');
        setContent('');
        setImgURL('');
        setBlogForm(false);
    }

    return (
        <div className="flex items-center justify-center">
            <form className="flex flex-col gap-1 items-center justify-evenly p-4 w-[98%] max-w-[500px] bg-blue-900/10 rounded-lg ring-2" onSubmit={handleSubmit}>
                <h2 className="text-red-950 font-bold text-2xl pb-2 font-serif">write your blog</h2>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='blog title' className="rounded py-2 px-3 w-full ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none text-blue-700 focus:text-violet-800 focus:bg-red-700/5" required />

                <input value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder='your name' type="text" className="rounded py-2 px-3 w-full ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none text-blue-700 focus:text-violet-800 focus:bg-red-700/5" required />

                <input value={linkdInProfileURL} onChange={e => setLinkdInProfileURL(e.target.value)} placeholder='your linkedIn proile url' type="text" className="rounded py-2 px-3 w-full ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none text-blue-700 focus:text-violet-800 focus:bg-red-700/5" required />

                <input value={imgURL} onChange={e => setImgURL(e.target.value)} placeholder='url of an image for this blog' type="text" className="rounded py-2 px-3 w-full ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none text-blue-700 focus:text-violet-800 focus:bg-red-700/5" />

                <textarea value={content} onChange={e => (e.target.value).length < 450 && setContent(e.target.value)} placeholder='write your blog here(withing 450 characters)...' cols="30" rows="9" className='rounded py-2 px-3 w-full ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none text-blue-700 focus:text-violet-800 focus:bg-red-700/5' required></textarea>
                <div className="flex items-center justify-between w-full">
                    <div className="rounded py-[8px] w-[48%] ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none bg-red-800 hover:bg-red-600 active:bg-blue-800 text-white text-center" onClick={e => setBlogForm(false)}>cancel</div>
                    <input type="submit" value={'post'} className='rounded py-[8px] w-[48%] ring-1 ring-cyan-600/50 focus:ring-violet-800 outline-none bg-red-800 hover:bg-red-600 active:bg-blue-800 text-white text-center' required />
                </div>
            </form>
        </div>
    )
}

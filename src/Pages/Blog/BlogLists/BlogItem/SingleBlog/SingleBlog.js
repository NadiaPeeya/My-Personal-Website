import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const SingleBlog = () => {
    const [singleBlog, setSingleBlog] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        const url = `https://murmuring-meadow-96410.herokuapp.com/blogs/blogItem/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleBlog(data));
    }, [])
    return (
        <div data-aos="fade-left" className="text-center border-0 about">
        <div className="card-header border-0">
          <img width="50%" src={singleBlog.img} alt="" />
        </div>
        <div className="card-body">
          <div style={{display: "flex" , justifyContent: "space-between"}}>
          
          <p className='writing-text' style={{textAlign:"left"}}>{singleBlog.catagory}</p>
          <p className='writing-text'   style={{textAlign:"left"}}>{singleBlog.date}</p>
          </div>

          <h5 style={{textAlign:"left", color: "#464040", fontWeight: '700' }} className="card-title">{singleBlog.name}</h5>
          <p  style={{textAlign: "justify", color: "#333333"}} className="card-text">{singleBlog.description}</p>
         
        </div>
      </div>
    );
};

export default SingleBlog;
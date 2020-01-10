import React from 'react'

export default function Posts({title, content, img, deletePost, id}){
    return(
      <div>
        <h3>{title}</h3>
        <img src={img} alt="Profile"/>
        <p>{content}</p>
        <button onClick={() => {deletePost(id)}}>X</button>
      </div>
    )
}
import React, {useState, useEffect} from "react";
import axios from "axios";

export default function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  return (
    <>
    <ul>
      {posts.map(post => (
      <li key={post.id}>{post.firstName}</li>
      ))}
    </ul>
    </>
  )
}

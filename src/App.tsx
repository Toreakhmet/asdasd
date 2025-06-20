import React, { useEffect, useState } from 'react';
import './App.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts,setPost]=useState<Post[]>([]);
  const [navbar,setNavbar]=useState<boolean>(false);
  const [added_data,setAdd]=useState<Post[]>([])

  function Add(item:Post){
    setAdd(prev=>[...prev,item])
  }
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(response=>setPost(response))
  })

  return (

    <div className="App">
      <div onClick={()=>{setNavbar(prev=>!prev)}} className='center'>open</div>
      {
        posts.length > 0 && posts.map((item)=>(
          <div className="posts" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={()=>{Add(item)}} >Add spisok</button>
          </div>
        ))
      }
      <div className="navbar" style={{left:navbar ? "0px" : "-150px"}}>
        {
          added_data.length > 0 && 
          added_data.map((item)=>(
            <div key={item.id}>
              <p>{item.title}</p>
            <h1>{item.body}</h1>
            </div>
          ))
        }
      
    </div>
    </div>

    
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';

interface Post{
  id:number
  title:string
    body:string
}

function App() {
  const [data, setData] = useState<Post[]>([]);
  const [navbar,serNavnar]=useState<boolean>(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sako</h1>
        <ul>
          <li>aspan</li>
          <li>asfsa</li>
          <li>dgsasg</li>
          <li>dsgdg</li>
          <li onClick={()=>serNavnar(prev=>!prev)}>open</li>
        </ul>
      </header>
      <main>
        {data.length > 0 &&
          data.map(item => (
            <div key={item.id} className='posts'>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        }

      </main>
      <div className="navbar" style={{left: navbar ? "0px" : "-150px"}}>

      </div>

    </div>
  );
}

export default App;

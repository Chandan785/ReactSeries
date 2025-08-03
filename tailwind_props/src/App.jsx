import React from 'react'
import Card from './components/card'
import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 let MyObject = {
    name: "chandan kumar",
    age: 20,
    channel: "chandan kumar",
    address: "patna",
    isMarried: false,
    hobbies: ["reading", "coding", "gaming"]
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className='bg-amber-600'>Hello, Vite!</h1>
      <br></br>
      <Card 
      Username="Chandan kumar" 
      btnTxt="Click me" 
      imageUrl="/src/assets/image.jpg"
      />

       <Card  
       Username= "Swarna  yadav" 
       btnTxt="read More" 
       imageUrl="/src/assets/download.png"
       />
    </>
  )
}

export default App

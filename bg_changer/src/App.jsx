import './App.css'
import React from 'react'
import { useState } from 'react'
function App() {
  const [color ,setColor] = useState('olive')
  return (
    <>
     <div className="bg-changer bg-amber-50 p-4 rounded-lg shadow-md">
        <button onClick={() => document.body.classList.toggle('bg-red')}>
          Change Background Color
        </button>
      </div>
       <div className='w-full h-screen flex items-center justify-center bg-amber-50' style={{ backgroundColor: color }}>
         <div className='flex justify-center items-center mt-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' 
        style={{ backgroundColor: 'blue' }}
        onClick={() => setColor('blue')}>
          Blue
        </button>
         </div>

          <div className='flex justify-center items-center mt-4'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg'
        style={{ backgroundColor: 'green' }}
         onClick={() => setColor('green')}>
          Green
        </button>
         </div>
          <div className='flex justify-center items-center mt-4'>
        <button className='bg-red-500 text-white px-4 py-2 rounded-lg' 
        style={{ backgroundColor: 'red' }}
        onClick={() => setColor('red')}>
          Red
        </button>
          </div>
          <div className='flex justify-center items-center mt-4'>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded-lg'
        style={{ backgroundColor: 'yellow' }}
         onClick={() => setColor('yellow')}>
          Yellow
        </button>
        </div>
          <div className='flex justify-center items-center mt-4'>
        <button className='bg-purple-500 text-white px-4 py-2 rounded-lg' 
        style={{ backgroundColor: 'purple' }}
        onClick={() => setColor('purple')}
          
          >
          Purple
        </button>
        </div>
       </div>
      
    </>
  )
}

export default App
   
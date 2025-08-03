import React from 'react';
 //import { useState } from 'react';

// function App() {
//   let [count, setCount] = useState(0);

//   const increment = () => {
//     if(count>=20){
//       alert("You cannot increment beyond 20");
//       return;
//     }
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     if(count <= -10){
//       alert("You cannot decrement below 10");
//       return;
//     }
//     setCount(count - 1);
//   };
//   console.log(count);

//   return (
//     <> 
//     <h1>Hello, Vite!</h1>
//     <p>This is a simple React application using Vite.</p>

//    <b><p>values:-  {count}</p></b> 
    
//     <button onClick={increment}>increment </button>
//     <button onClick={decrement}>Decrement </button>
//     </>
//   )
// }
//export default App


function App() {
  return (
    <> 
      <h1 className='bg-amber-600'>Hello, Vite!</h1>
      
    </>
  );
}
export default App;
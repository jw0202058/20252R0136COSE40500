import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
    <div>CS Colloquium Final Assignment</div>
    <button onClick={() => setCount(0)}>Reset BTN</button>
    <button
    onClick={() => setCount(count + 1)}
    style={{backgroundColor: 'black', color: 'white'}}>+</button>
    </>
  )
}

export default App

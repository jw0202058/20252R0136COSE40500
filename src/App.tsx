import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
    <h3>CS Colloquium Final Assignment</h3>
    <div>{count}</div>
    <button
    onClick={() => setCount(count - 1)}
    style={{backgroundColor: 'black', color: 'white'}}
    disabled={count === 0}
    >-</button>
    <button onClick={() => setCount(0)}>Reset BTN</button>
    <button
    onClick={() => setCount(count + 1)}
    style={{backgroundColor: 'black', color: 'white'}}>+</button>
    </>
  )
}

export default App

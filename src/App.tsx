import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
    <div>CS Colloquium Final Assignment</div>
    <button onClick={() => setCount(0)}>Reset BTN</button>

    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Score Count</h1>
        <button onClick={() => setCount((count) => count + 1)}> + </button>    {count}
               <button onClick={() => setCount((count) => count - 1)}>-
        
          
        </button>

        
    </div>
  )
}

export default App

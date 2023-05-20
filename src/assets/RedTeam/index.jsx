import { useState } from 'react'


function RedTeam() {
    const [countRed, setCount] = useState(0)
  
    return (


<div className='redTeam'>
        <h2>Red Team: {countRed}</h2>
            <h3>Add</h3>
          <button onClick={() => setCount((count) => count + 1)}> + 1</button>
          <button onClick={() => setCount((count) => count + 3)}> + 3</button>
          <button onClick={() => setCount((count) => count + 5)}> + 5</button>
          <button onClick={() => setCount((count) => count + 10)}> + 10</button>  
            <h3>Subtract</h3>
          <button onClick={() => setCount((count) => count - 1)}>- 1 </button>
          <button onClick={() => setCount((count) => count - 3)}>- 3 </button>
          <button onClick={() => setCount((count) => count - 5)}> - 5</button>
          <button onClick={() => setCount((count) => count -10 )}> -10</button>
      </div>
    )}

    export default RedTeam
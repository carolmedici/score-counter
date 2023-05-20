import { useState } from 'react'


function BlueTeam() {
    const [countBlue, setCount] = useState(0)
  
    return (
    
  
  
        <div className='blueTeam'>
          <h2>Blue Team: {countBlue}</h2>
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

        export default BlueTeam


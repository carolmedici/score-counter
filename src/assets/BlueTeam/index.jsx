import { useState } from 'react'
import "./BlueTeam.css"

function BlueTeam() {
    const [countBlue, setCount] = useState(0)

    const resetCount = () =>{
      setCount(0)
    }
  
    return (
    
  
  
        <div className='blueTeam'>
          <h2 className='blue'>BLUE TEAM: {countBlue}</h2>
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
          <h3 className='reset' onClick={resetCount}>Reset</h3>
            
        </div>

        )}

        export default BlueTeam


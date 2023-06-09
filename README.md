﻿# Score Counter
 
Score Counter created based on [Jean Meira's](https://github.com/JCDMeira/challenge-FR-003-score-counter) React challenge .
 

 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add or subtract points from the blue and/or red scoreboard.
- Add or subtract 1, 3, 5 and 10 points.
- Reset points.


### Screenshot

![](https://github.com/carolmedici/score-counter/blob/main/public/print.jpg)


### Links

- Solution URL: [https://github.com/carolmedici/score-counter](https://github.com/carolmedici/score-counter)
- Live Site URL: [https://score-counter-omega.vercel.app/](https://score-counter-omega.vercel.app/)

## My process

### Built with

- React:
 -- useState
 -- Functions
 -- Components


### What I learned

I keep learning how to better utilize Rect.js tools.

Check it out:
```js
function RedTeam() {
    const [countRed, setCount] = useState(0)
  
  const resetCount = () =>{
    setCount(0)
  }

    return (


<div className='redTeam'>
        <h2 className='red'>RED TEAM: {countRed}</h2>
            <h3 className='bg-blue-400'>Add</h3>
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
```


### Continued development

The next challenge is to use useEffect: https://github.com/JCDMeira/challenge-FR-004-winning-choice

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)






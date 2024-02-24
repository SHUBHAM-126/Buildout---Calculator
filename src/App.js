import {useState} from 'react'

function App() {

  const [ inField, setInField ] = useState('')
  const [ ans, setAns ] = useState(null)

  const handleClick = (val) => {
    
    if(val == "C"){
      setInField('')
      setAns(null)
    }
    else if(val == "="){
      setAns(eval(inField))
    }
    else{
      setInField(prev => prev+val)
    } 

  }

  return (
    <div className="calculator-wrapper">
      <h1>React Calculator</h1>
      <input type="text" value={inField} onChange={(e)=> setInField(e.target.value)} /> 

      {ans != null && <p className='anwser'>{ans}</p>}

      <div className="button-container">
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
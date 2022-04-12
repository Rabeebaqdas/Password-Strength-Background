import './App.css';
import React,{useState,useRef} from 'react';


function App() {

  const resultEl = useRef(null)
  const lengthEl = useRef(null)
  const uppercaseEl = useRef(null)  
  const lowercaseEl = useRef(null)
  const numbersEl = useRef(null)
  const symbolsEl = useRef(null)
  const generateEl = useRef(null)
  const [count,setCount] = useState(4)



  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
  
  }
 

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
  
  }


  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 48);
  
  }


 const getRandomSymbol = () => {
      const symbol = '!@$^&*(){}[]=<>/,.';
    return symbol[Math.floor(Math.random() * symbol.length)];
  
  }

  const randomFunc = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
  }

  const handleChange = () => {
    const length = +lengthEl.current.value;
    const hasLower = lowercaseEl.current.checked
    const hasUpper = uppercaseEl.current.checked
    const hasNumber = numbersEl.current.checked
    const hasSymbol = symbolsEl.current.checked
    resultEl.current.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)

  }

  const generatePassword = (lower,upper,number,symbol,length) => {
    let generatedPassword = '';
    const typeCount = lower + upper + number + symbol;
    const typeArray = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
 
    if(typeCount == 0) {
      return "";
    }

    for(let i = 0 ; i < length ; i+=typeCount){
      typeArray.forEach(type=>{
        const funcName = Object.keys(type)[0]
        generatedPassword += randomFunc[funcName]()
      })
    }
    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword;

  }


  const copyPassword = () => {
    const textarea = document.createElement("textarea")
    const password = resultEl.current.innerText

    if(!password){
      return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    navigator.clipboard.writeText(textarea.value);
    textarea.remove()
    alert("Password copied to clipboard");
  }

  const handleValue = (e) => {
    if(e.target.value >=4 && e.target.value<20){
      setCount(e.target.value)
    }else{
      setCount(4)
    }
  }

  return (
    <>
        <div className="container">
            <h2>Password Generator</h2>
            <div className="result-container">
                <span className='result' ref={resultEl}></span>
                <button className='btn' id='clipboard' onClick={copyPassword}>
                    <i className='far fa-clipboard'></i>
                </button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label htmlFor="">password length</label>
                    <input type="number" min="4" id="length" max="20" value={count} onChange={(e)=>handleValue(e)} ref={lengthEl} />
                </div>
                <div className="setting">
                    <label htmlFor="">Include uppercase letters</label>
                    <input type="checkbox" name="" id="uppercase"   ref={uppercaseEl}/>
                </div>
                <div className="setting">
                    <label htmlFor="">Include lowercase letters</label>
                    <input type="checkbox" name="" id="lowercase"  ref={lowercaseEl} />
                </div>
                <div className="setting">
                    <label htmlFor="">Include numbers </label>
                    <input type="checkbox" name="" id="numbers"  ref={numbersEl} />
                </div>
                <div className="setting">
                    <label htmlFor="">Include symbols</label>
                    <input type="checkbox" name="" id="symbols"  ref={symbolsEl} />
                </div>
            </div>
            <button className="btn btn-large" id="generate" ref={generateEl} onClick={(e)=>handleChange(e)}>
                Generate Password
            </button>
        </div>
    </>
  )
}

export default App;

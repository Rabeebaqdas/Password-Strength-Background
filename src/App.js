import './App.css';
import React,{useState,useRef,useEffect} from 'react';


function App() {
  const text = useRef(null)
  const speedEl = useRef(null)
  const [count,setCount] = useState(1)
  const [line] = useState("We Love Programming!");
  let idx = 1;
  
  let speed = 300;
  useEffect(()=>{
    const write = () => {
      text.current.innerText = line.slice(0,idx);
    idx++;
    if(idx > line.length) {
    idx = 1;
    }
    setTimeout(write,speed);
  
  }
  write()


 speedEl.current.addEventListener("input",(e)=>speed = 300 / e.target.value)
  
},[idx])

  return (
    <div className='main'>
    <h1  ref={text}></h1>
    <div className='child'>
        <label htmlFor="speed">Speed: </label>
        <input type="number" name="speed" ref={speedEl} onChange={(e)=>setCount(e.target.value)} value={count}  min="1" max="5" step="1" />

    </div>
</div>
  )
}

export default App;

import './App.css';
import React,{useState,useRef} from 'react';


function App() {
  const clickMe = useRef(null)
const time = useRef(null)
const [click,setClick] = useState(0)
const [count,setCount] = useState(0)

  const handleChange = (e) => {
    if(click == 0) {
      setClick(new Date().getTime())

    }else {
      if((new Date().getTime() - click) < 400){
       createHeart(e)
        setClick(0)
      }else{
        setClick(new Date().getTime())
      }
    }
  }
  
  const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x =e.nativeEvent.clientX;
    const y = e.nativeEvent.clientY;
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    clickMe.current.appendChild(heart);
    setCount(count+1);
    setTimeout(()=>heart.remove(),5000)
  }

  return (
    <>
    <h3>Double click on the  image to <i className='fas fa-heart'></i> it</h3>
    <small>You liked it <span id='times' ref={time}>{count}</span>{count > 1 ? " times" : " time"}</small>
    <div className="loveMe" ref={clickMe} onClick={(e)=>handleChange(e)}></div>
</>
  )
}

export default App;

import './App.css';
import React,{useRef,useEffect} from 'react';



function App() {
  const container = useRef(null)  
  const color = ['#e74c3c' , "#8e44ad" , "#3498db" , "#e67e22" , "#2ecc71"];
  const squares = 500;



  useEffect(()=>{
    for(let i = 0 ; i < squares ; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.addEventListener('mouseover',() => setColor(square))
      square.addEventListener('mouseout',() => removeColor(square))
        container.current.appendChild(square)
  }
  function setColor(element) {
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color},  0 0 10px ${color}`
  }
  function removeColor(element) {
      element.style.background = '#1d1d1d'
      element.style.boxShadow = '0 0 2px #000'
  }
function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)]
}
  },[])
  return (
    <>
    <div className="container" ref={container}>
    </div>
</>
  )
}

export default App;

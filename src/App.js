import './App.css';
import React,{useRef,useEffect} from 'react';



function App() {
  const counter = useRef(null)
  const finalMessage = useRef(null)
  const reply = useRef(null)
  
  
  useEffect(()=>{
    const nums = document.querySelectorAll('.nums span')
    
    function resetDom() {
      counter.current.classList.remove('hide')
      finalMessage.current.classList.remove('show')

      nums.forEach((num)=>{
        num.classList.value = ''

      })

      nums[0].classList.add('in')
    }
    
    function runAnimation() {
    nums.forEach((num,idx) => {
      const nextToLast = nums.length - 1;
       num.addEventListener('animationend',(e)=>{
         if(e.animationName == "goIn" && idx !== nextToLast){
           num.classList.remove('in')
           num.classList.add('out')
          
         }
         else if(e.animationName == "goOut" && num.nextElementSibling) {
            num.nextElementSibling.classList.add('in')
         
         }else{
           counter.current.classList.add('hide')
           finalMessage.current.classList.add('show')
          
          
         }
       })
    })
  }
  runAnimation()
  reply.current.addEventListener('click',()=>{
    resetDom()
    runAnimation()

  })
},[])


  return (
    <>
        <div className="counter" ref={counter}>
            <div className="nums">
                <span className='in'>3</span>
                <span>2</span>
                <span>1</span>
                <span>0</span>
            </div>
            <h4>Get Ready</h4>
        </div>
        <div className="final" ref={finalMessage}>
            <h1>Go</h1>
            <button id="replay" ref={reply}>Replay</button>
            
        </div>
    </>
  )
}

export default App;

import './App.css';
import React,{useRef,useEffect} from 'react';



function App() {
  const img = useRef(null)
  const leftbtn = useRef(null)
  const rightbtn = useRef(null)
  
  
  let idx = 0;
  
  useEffect(()=>{
    const image = document.querySelectorAll('#imgs img')
      console.log(idx)
    const run = () => {
      idx++;
      changeImage()
    }
  
    const changeImage = () => {
      if(idx > image.length - 1) {
    idx = 0;
  
  }else if(idx < 0) {
    idx = image.length - 1;
  }
  
  img.current.style.transform = `translateX(${-idx * 500}px)`
    }
  
  let interval = setInterval(run,2000)

  function reset() {
    clearInterval(interval)
    interval = setInterval(run,2000)
  }

  rightbtn.current.addEventListener('click',()=>{
    idx++
    changeImage()
    reset()
  })
  leftbtn.current.addEventListener('click',()=>{
    idx--
    changeImage()
    reset()
  })
  },[idx])

  return (
    <>
        <div className="carousel">
            <div className="image-container" id="imgs" ref={img}>
                <img src={"https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80"} alt="" />
                <img src={"https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="" />
                <img src={"https://images.unsplash.com/photo-1649821042125-699d75d0a893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="" />
                <img src={"https://images.unsplash.com/photo-1649821755622-d22da86de3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="" />

            </div>
            <div className="button-container">
                <button id="left" className='btn' ref={leftbtn}>Prev</button>
                <button id="right" className='btn' ref={rightbtn}>Next</button>
            </div>
        </div>
    </>
  )
}

export default App;

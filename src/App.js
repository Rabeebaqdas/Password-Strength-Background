import './App.css';
import React,{useState} from 'react';


function App() {
  const[count,setCount] = useState({
    count1:false,
    count2:false,
    count3:false
  })

  const handleChange = (e) => {
    if(e.target.id == "good"){
      setCount({
        count1:!count.count1,
        count2:false,
        count3:false,
      })
    }
   else if(e.target.id == "cheap"){
      setCount({
        count1:false,
        count2:!count.count2,
        count3:false,
      })
    }
    else if(e.target.id == "fast"){
      setCount({
        count1:false,
        count2:false,
        count3:!count.count3,
      })
    }
  }

  return (
    <>
        <h2>How do you want your project to be?</h2>
        <div className="toggle-container">
            <input type="checkbox" name="" id="good" checked={count.count1} onClick={handleChange} className='toggle' />
            <label htmlFor="good" className='label'>
                <div className="ball"></div>
            </label>
            <span>Good</span>
        </div>

        <div className="toggle-container">
            <input type="checkbox" checked={count.count2} onClick={handleChange} name="" id="cheap" className='toggle' />
            <label htmlFor="cheap" className='label'>
                <div className="ball"></div>
            </label>
            <span>Nice</span>
        </div>

        <div className="toggle-container">
            <input type="checkbox" name="" id="fast" checked={count.count3} onClick={handleChange} className='toggle' />
            <label htmlFor="fast" className='label'>
                <div className="ball"></div>
            </label>
            <span>Bad</span>
        </div>
    </>
  )
}

export default App;

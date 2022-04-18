import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {

    const password = useRef(null)
    const background = useRef(null)

    useEffect(()=>{
        password.current.addEventListener('input', (e) => {
            const input = e.target.value
            const length = input.length
            const blurValue = 20 - length * 2
            background.current.style.filter = `blur(${blurValue}px)`
        })
    },[])


  return (
    <>
    <div class="background" id="background" ref={background}></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
        <h1 class="text-3xl">Image Password Strength</h1>
        <p class="text-sm text-gray-700">Change the password to see the effect</p>
        <div class="my-4 text-left">
            <label for="email" class="text-gray-900">Email:</label>
            <input type="text" class="border block w-full p-2 mt-2 rounded" id="email" placeholder="Enter Email" />
        </div>
        <div class="my-4 text-left">
            <label for="password" class="text-gray-900">Password:</label>
            <input type="password" class="border block w-full p-2 mt-2 rounded" id="password" ref={password}
                placeholder="Enter Password" />
        </div>

        <button class="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">Submit</button>
    </div>
    </>
  )
}

export default App;

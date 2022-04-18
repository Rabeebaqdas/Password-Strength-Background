import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {


useEffect(()=>{
    const contents = document.querySelectorAll('.content')
    const listItems = document.querySelectorAll('nav ul li')
    
    listItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            hideAllContens()
            hideAllItems()
    
            item.classList.add('active')
            contents[idx].classList.add('show')
        })
    })
    
    function hideAllContens() {
        contents.forEach(content => content.classList.remove('show'))
    }
    
    function hideAllItems() {
        listItems.forEach(item => item.classList.remove('active'))
    }
},[])

  return (
    
    <div className="phone">
        <img src={"https://images.unsplash.com/photo-1649317739599-a326c2a5d8c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"} alt="" className='content show'  />
        <img src={"https://images.unsplash.com/photo-1650184466684-44b4a6cdb726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content'  />
        <img src={"https://images.unsplash.com/photo-1650170496638-b05030a94005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content'  />
        <img src={"https://images.unsplash.com/photo-1650204154100-983cc99567cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" className='content'  />
        <nav>
            <ul>
                <li className='active'>
                    <i className='fas fa-home'></i>
                    <p>Home</p>
                </li>
                <li>
                    <i className='fas fa-box'></i>
                    <p>Work</p>
                </li>
                <li>
                    <i className='fas fa-book-open'></i>
                    <p>Blog</p>
                </li>
                <li>
                    <i className='fas fa-users'></i>
                    <p>About Us</p>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default App;

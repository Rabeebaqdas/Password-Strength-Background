import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';



function App() {
  
  const [state, setState] = useState({
    value: '',
    show: ''
  });
  const [data,setData] =useState()
  const [repos,setRepos] =useState()

  useEffect(()=>{
    const getData = async (name) => {
      const res = await axios.get(`https://api.github.com/users/${name}`)
      const res2 =await axios.get(`https://api.github.com/users/${name}/repos`);
      console.log(res2.data)
      setRepos(res2.data);
      setData(res.data);
    }
    getData(state.show)
    console.log(state.show)
    setState({value:''})
  },[state.show])

  const handleChange = (e) => {
    e.preventDefault()
    setState({ show: state.value })
  }
 
  return (
    <>
        <form  className="user-form" id="form" onSubmit={handleChange}>
            <input type="text" placeholder="Search a github user"id="search" value={state.value} onChange={(e)=>setState({value:e.target.value})}/>
      
        </form>
        <main id="main">
          {
          data ?
          <div className="card">
                <div>
                    <img src={data?.avatar_url} className="avatar" width="200px"  alt="" />
                </div>
                <div className="user-info">
                    <h2>{data?.name || data?.login}</h2>
                    <p>{data?.bio}</p>
                    <ul>
                        <li>{data?.followers} <strong>Followers</strong></li>
                        <li>{data?.following} <strong>Following</strong></li>
                        <li>{data?.public_repos} <strong>Repos</strong></li>

                    </ul>
                    <div id="repo">
                        {repos && repos.slice(0,10).map((e)=>(
                            <a href={e.html_url} className="repos" target="_blank">{e.name}</a>
                        ))
                          }
            
                    </div>
                </div>
            </div>
            :
            <div className="card" style={{marginLeft:60}}>
          <h1>No Profile with this username</h1>
            </div>

        }
            
        </main>
    </>
  )
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const generatePassword = () =>{
    axios.get('http://localhost:8080/newpassword').then((res, err) => {
      if(err){
        console.log("in err: ", err)
        setPassword('');
      }
      else{
        console.log(res.data.password)
        setPassword(res.data.password)
      }
    })
  }

  useEffect(()=>{
    generatePassword();
  },[])

  const copyPassword = () => {
    alert("text copied ", password)
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div>
        <button onClick={generatePassword}>Generate passowrd</button>
        <div>
          <div style={{marginTop: '20px'}}>
            {password}
          <button onClick={copyPassword} style={{marginLeft: '20px'}}><i className="fa-solid fa-copy"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'


function App() {
  const [ip, setIp] = useState('127.0.0.1')
  const [message, setMessage] = useState(`Hello 👋 ${ip}`);
  useEffect(()=>{

    axios.get('http://192.168.29.80:3000').then(data=>{
      console.log(data);
      if(!data?.data){
        setMessage(`Mano's PI server is being attacked...😳, unable to fetch your IP(Suspicious request?). Incident will be reported to Mano!`)
      }
      else{
        setIp(data?.data)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    setMessage(`Hello 👋 ${ip}`);
  },[ip])

  return (
    <div className="App">
      <p>{message}</p><br>
      </br>
      <span>--Mano's PI server 😃</span>
    </div>
  );
}

export default App;

import axios from 'axios';
import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div>
      <div>hello</div>
      <Test />
    </div>
    

  );
}

function Test () {
  return (
    <div>
      <div>
        <form action="/">
          <label htmlFor="fname">
            First name:<input type="text" id="fname" name="fname"/>
          </label>
          <label htmlFor="lname">
            Last name:<input type="text" id="lname" name="lname" />
          <input type="submit" value="Post" onClick={(e) => {
            let fName = document.querySelector('#fname')
            e.preventDefault()
            postRequest(fName.value)
          }}/>
          </label>
        </form> 
      </div>

    <div>
      <input type="button" value="Get" onClick={(e) => {
        e.preventDefault()
        getRequest()
      }}/>
    </div>

    </div>
    

  )
}

function getRequest () {
  axios.get('/test',{headers:{'Content-Type':"application/json"}, withCredentials:true})
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

function postRequest (data) {
  axios.post('/test', {firstName:data}, {headers:{'Content-Type':"application/json"}, withCredentials:true})
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

export default App;

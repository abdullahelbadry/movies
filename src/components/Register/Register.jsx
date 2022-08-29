import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {


  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: ''
  });

  
  function getUser(e){
    let myUser = {...user}
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function submitRegister(e){
    e.preventDefault();
    setIsLoading(true);
    setError();
    let {data} = await axios.post(`https://routeegypt.herokuapp.com/signup`, user);
    if(data.message=== "success"){
      setIsLoading(false);
      console.log("Successfully Registered" + data.message);
    } else{
      setIsLoading(false);
      setError(data.message)
    }
  }

  return (
    <div>

      <h2 className='my-3 text-center'>Register Now</h2>

      {error?<div className="alert alert-danger">{error}</div> : ''}

      <form onSubmit={submitRegister}>
        <label htmlFor='first_name' className='mt-3'>First Name:</label>
        <input onChange={getUser} type="text" className="form-control" name='first_name' id='first_name' />

        <label htmlFor='last_name'  className='mt-3'>Last Name:</label>
        <input onChange={getUser} type="text" className="form-control" name='last_name' id='last_name' />

        <label htmlFor='age' className='mt-3'>Age: </label>
        <input onChange={getUser} type="number" className="form-control" name='age' id='age' />

        <label htmlFor='email' className='mt-3'>E-mail:</label>
        <input onChange={getUser} type="email" className="form-control" name='email' id='email' />

        <label htmlFor='password' className='mt-3'>Password:</label>
        <input onChange={getUser} type="password" className="form-control" name='password' id='password' />

        <button className='btn btn-outline-info mt-3'>
          {isLoading? <i className="fas fa-spinner fa-spin"></i>: 'Register'}
        </button>
      </form>
    </div>
  )
}

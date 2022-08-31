import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function getUser(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);
      setError();
    let validateResult = validateLoginForm(user)

    if (validateResult.error) {
      setIsLoading(false);
      setErrorList(validateResult.error.details);

    } else {
      
      let { data } = await axios.post(`https://routeegypt.herokuapp.com/signin`, user);
      if (data.message === "success") {

        localStorage.setItem('userToken', data.token)
        setIsLoading(false);
        props.getUserData();
        navigate('/home')

      } else {
        setIsLoading(false);
        setError(data.message)
      }
    }

  }

  /* Start Of Validation Function */
  function validateLoginForm(user) {
    var schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    return schema.validate(user, {abortEarly:false})
  }
  /* Start Of Validation Function */

  return (
    <div>

      <h2 className='my-3 text-center'>Login Now</h2>

      {errorList.map((error, index)=>{
        if(index===1){
          return <div key={index} className='alert alert-danger '>Invalid Password</div>
        } else {
          return <div key={index} className='alert alert-danger '>
          {error.message}</div>
        }
})}

      {error ? <div className="alert alert-danger">{error}</div> : ''}

      <form onSubmit={submitLogin}>
        <label htmlFor='email' className='mt-3'>E-mail:</label>
        <input onChange={getUser} type="email" className="form-control" name='email' id='email' />

        <label htmlFor='password' className='mt-3'>Password:</label>
        <input onChange={getUser} type="password" className="form-control" name='password' id='password' />

        <button className='btn btn-outline-info mt-3'>
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
        </button>
      </form>
    </div>
  )
}

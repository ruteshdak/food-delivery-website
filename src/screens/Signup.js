import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { use } from '../../backend/Routes/CreatUser';

export default function Signup() {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response=await fetch("http://localhost:5000/api/creatuser",{
        method:'POST',
        headers:{
          'Content-Type' :'application/json',

        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
      });
      const json=await response.json()
      console.log(json);
      if(!json.success){
        alert("Enter valid credentials");
      }
  }
  const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div className='container'>

  
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" placeholder="Password" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id="exampleInputPassword" placeholder="Address" onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )
}

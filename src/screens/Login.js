import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import img from '../components/images/img.jpg'
export default function Login() {


  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);


    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");
     
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div style={{backgroundImage: `url(${img})`,backgroundSize:'cover',height:'100vh',display:'flex',opacity:'0.6'}}>
      <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'50px',height:'450px'}} >


        <form onSubmit={handleSubmit} style={{borderRadius:'20px', backgroundColor: 'rgba(255, 255, 255, 0.85)',marginTop:'50px',width:'500px',height:'350px'}}>

          {/* <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />

          </div> */}
          <div style={{width:'800px',marginTop:'20px',display:'block'}}>

          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{marginTop:'20px',marginLeft:'15%',fontWeight:'bold',color:'black'}}>Email address</label>
            <input type="email" className="form-control " name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} style={{width:'35%',justifyItems:'center',marginLeft:'15%',fontWeight:'bold',borderRadius:'34px'}} />
            <small id="emailHelp" className="form-text text-muted" style={{marginLeft:'15%',fontWeight:'bold'}}>We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">;
            <label htmlFor="exampleInputPassword1" style={{color:'black',marginLeft:'15%',fontWeight:'bold'}}>Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" placeholder="Password" onChange={onChange} style={{width:'35%',marginLeft:'15%',borderRadius:'34px'}}/>
          </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id="exampleInputPassword" placeholder="Address" onChange={onChange} />
          </div> */}
          <div style={{marginLeft:'22%'}}>
            
          <button type="submit" className="m-3 btn btn-success" style={{borderRadius:'25px'}}>Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger' style={{borderRadius:'25px'}}>I am a user</Link>
          
          </div>
        </form>
      </div>
    </div>
  )
}


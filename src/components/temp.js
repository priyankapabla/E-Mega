import React from 'react'

export const Temp = () => {
    const handle=async (e)=>{
        let iemail=document.getElementById('email').value
        let ipassword=document.getElementById('password').value
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:iemail,password:ipassword})


        });
        const json=await response.json();
        console.log(json)
        if(json.response){
            localStorage.setItem('token',json.jwtData)
        }else{
            console.log("flase")
        }
    }
  return (
  <>
  <form onSubmit={handle}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </>
  )
}

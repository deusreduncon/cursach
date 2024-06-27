import { useState } from "react";
import { createUser, sendForm } from "../https";

function Reg() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [res, setRes] = useState()

  const sendButton = () => {
    createUser(name, password).then(data => {
        setRes(data)
        if(data.id) {
            window.location.replace('/auth')
        }
    })
  }

  let token = localStorage.getItem('token')

  if(token) {
    window.location.replace('/home')
  }

  return (
    <div className="d-flex align-items-center py-4" style={{width: '420px',marginTop:'100px', margin: 'auto', height: '720px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', backgroundColor: '#333'}}>
        <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center" style={{color: '#fff'}}>Регистрация</h1>
        <div className="alert alert-danger" role="alert" style={{display: res?.response?.data?.error ? 'block' : 'none'}}>
        {res?.response?.data?.error}
        </div>
        <div className="form-floating mb-3">
            <input 
            style={{padding: '10px', backgroundColor: '#444', color: '#fff', borderColor: '#555'}}
            type="text" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput" style={{color: '#bbb'}}>Login</label>
        </div>
        <div className="form-floating mb-3">
            <input 
            style={{padding: '10px', backgroundColor: '#444', color: '#fff', borderColor: '#555'}}
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword" style={{color: '#bbb'}}>Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" style={{backgroundColor: '#555', borderColor: '#666'}} onClick={sendButton}>Вход</button>
        </main>
    </div>
  );
}

export default Reg;
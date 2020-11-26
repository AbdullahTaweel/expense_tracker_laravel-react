import React from 'react'
import Signup from './Signup';
import {useState} from 'react';


export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    onSubmit= (e) => {
        e.preventDefault();
        const user = {
            name, email, password
        }
        axios.post(`http://localhost:8000/api/users`, {user}
        ).then(res => {console.log(res.data)})
    }

    return (
        <div>
            <div>
            Login Form 
            <form>
                <label>User Name: </label>
                <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
                <label>Email</label>
                <input type='email' value={email} onChange={e=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button type='submit' onClick={onSubmit}>Login</button>
            </form>
            </div>
            <div>
                "If you didn't Register yet! please " 
                <button>
                    <a href={<Signup /> }> Sign up Here</a>
                </button>
            </div>
        </div>
    )
}

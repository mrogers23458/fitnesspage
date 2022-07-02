import { useState } from 'react'

import Link from 'next/link'

export default function LoginForm(){
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMsg, setErrorMsg] = useState('')

    function handleLogin(e){
        e.preventDefault()
        if (credentials.username === ''){
            setErrorMsg('Please enter a username')
        }

        if (credentials.password === ''){
            setErrorMsg('Please enter a username')
        }

        if (credentials !== {username: '', password: ''}) {
            const { username, password } = credentials
            console.log('username', username)
            console.log('password', password)
        }
        
    }

    function handleOnChange(e) {
        return setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    console.log(credentials)
    return(
        <div>
            <div className='login-inputs'>
                <label htmlFor="username">Username</label>
                <input name="username" onChange={handleOnChange} type="text" placeholder="Username" />
                <label htmlFor="password">Password</label>
                <input name="password" onChange={handleOnChange} type="password" placeholder="Password" />
            </div>
            <button onClick={handleLogin}>Login</button>
            <p>dont have an account? <span><Link href="/signup">Sign up</Link></span></p>
        
        </div>
    )
}
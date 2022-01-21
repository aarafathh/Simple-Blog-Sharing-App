import Header from './Header';
import './Login.css';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr,setEmailErr] = useState(false);
    const [passErr,setPassErr] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./add');
        }
    }, [])

    let err = "";

    async function login() {
        //console.warn("data",email,password);
        let item = { email, password }
        //console.log(item);
        let result = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        
        
        if(result.error === "ok"){
            localStorage.setItem('user-info', JSON.stringify(result));
            history.push("/add");
        }

        else {
            //alert("Please Fill Information Correctly");
            setEmailErr(true);
            setPassErr(true);
        }
    }

    return (
        <div>
            <Header />
            <h1>Login Here</h1>

            <input type="text" placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />

            <br />
            <br />

            <input type="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />

            {emailErr?<><br/><span className="errShow"><b>*Email Or Password is not correct</b></span></>:""}

            <br />
            <br />
           
            <button className="butt" onClick={login}>Login</button>




        </div>
    )
}

export default Login
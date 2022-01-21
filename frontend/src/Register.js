import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import Header from './Header';


function Register() {


    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./add');
        }
    }, [])


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const [nameErr,setNameErr] = useState(false);
    const [emailErr,setEmailErr] = useState();
    const [passErr,setPassErr] = useState(false);
    
    const history = useHistory();

    


    async function signUp() {



        let item = { name, email, password }

        if(email.includes("@")){
            setEmailErr(false);
        }
        else{
            setEmailErr(true);
        }
        if(password.length<=6){
            setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        if(name.length==0){
            setNameErr(true);
        }
        else{
            setNameErr(false);
        }

        

        if (name.length > 0 && email.length>0 && password.length>6 && nameErr===false && emailErr===false && passErr===false) {

            let result = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.warn("result", result);
            localStorage.setItem("user-info", JSON.stringify(result));
            history.push("/add");
        }
        // else{
        //     alert("Please Provide all the Details");
            
        // }
    }

    return (

        <>
            <Header />
            {/* <div>
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={signUp}>Sign Up</button>
        </div> */}
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <label id="emailId" for="email"><b>Name</b></label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" name="email" id="email" required />
                {nameErr?<><br/><span className="errShow"><b>*Username is required</b></span></>:""}

                <br />
                <br />


                <label id="emailId" for="email"><b>Email</b></label>
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" id="email" required />
                {emailErr?<><br/><span className="errShow"><b>*Email is not correct</b></span></>:""}
                <br />
                <br />
                
                <label id="passID" for="psw"><b>Password</b></label>
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="psw" id="psw" required />
                {passErr?<><br/><span className="errShow"><b>*Password is too small</b></span></>:""}
                
                <br />
                <br />

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" onClick={signUp} class="registerbtn">Register</button>
            </div>

            <div class="container signin">
                <p>Already have an account? <a href="/login">Sign in</a>.</p>
                <br/>
                <br/>
            </div>
        </>
    )
}

export default Register
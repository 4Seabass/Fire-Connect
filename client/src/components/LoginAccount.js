import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";




const LoginAccount = (props) => {

    const { id } = useParams();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();
    const [ currentAccount, setCurrentAccount ] = useState("");
    const { loggedInAcount, setLoggedInAccount } = props;


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/selected/account/email/${email}`
        )
        .then((res)=>{
            setLoggedInAccount(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [email],
    );

    const loginAccount = (event) => {

        event.preventDefault();
        
        axios.post("http://localhost:8000/api/account/login", {
            email,
            password,
        },
        {
            withCredentials: true,
        },
        )
            .then(res => {
                navigate(`/dashboard/${loggedInAcount.username}`);
            })
            .catch((err) => {
                console.log("Wrong Information")
                console.log(err.response.data);
                setErrors(err.response.data.message);
            })
        }


    return (
        <div className='login-user-container'>
            <div className='login-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='login-user-form-container'>
                <form onSubmit={loginAccount} >
                    <div className='login-user-form'>
                        <div className='user-row'>
                            <label className='login-user-label'>Email: </label>
                            <input className='login-user-input1' type="text" onChange= { (event) => setEmail(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='login-user-label'>Password: </label>
                            <input className='login-user-input2' type="password" onChange= { (event) => setPassword(event.target.value)} />
                        </div>
                        <br />
                        <input className='login-user-submit' type="submit" value="Login"/>
                    </div>
                </form>
            </div>
            <h3 className='login-user-form-h3'>Login</h3>
        </div>
    )
}

export default LoginAccount;
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";




const LoginAccount = (props) => {

    const { id } = useParams();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ accountId, setAccountId ] = useState("");
    const navigate = useNavigate();


    return (
        <div className='login-user-container'>
            <div className='login-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='login-user-form-container'>
                <form  >
                    <div className='login-user-form'>
                        <div className='user-row'>
                            <label className='login-user-label'>Email: </label>
                            <input className='login-user-input1' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='login-user-label'>Password: </label>
                            <input className='login-user-input2' type="password" />
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
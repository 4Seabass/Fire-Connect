import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const CreateAccount = (props) => {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ dateCreated, setDateCreated ] = useState(currentDate);
    const navigate = useNavigate();


    const createNewAccount = (event) => {

        event.preventDefault();

        axios.post("http://localhost:8000/api/create/account", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            username,
            dateCreated,
        })
            .then(res => {
                navigate("/account/login");
                console.log("The data for the new Account", res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }



    return (
        <div className='new-user-container'>
            <div className='new-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='new-user-form-container'>
                <form onSubmit={createNewAccount} >
                    <div className='new-user-form'>
                        <div className='user-row'>
                            <label className='new-user-label'>First name: </label>
                            <input className='new-user-input1' type="text" onChange= { (event) => setFirstName(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Last Name: </label>
                            <input className='new-user-input2' type="text" onChange= { (event) => setLastName(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Email: </label>
                            <input className='new-user-input3' type="text" onChange= { (event) => setEmail(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Password: </label>
                            <input className='new-user-input4' type="password" onChange= { (event) => setPassword(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Confirm Password: </label>
                            <input className='new-user-input5' type="password" onChange= { (event) => setConfirmPassword(event.target.value)} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Username: </label>
                            <input className='new-user-input6' type="text" onChange= { (event) => setUsername(event.target.value)} />
                        </div>
                        <br />
                        <p className='new-user-info-message'>^ This is what will be your public display name ^</p>
                        <input className='new-user-submit' type="submit" value="Create User"/>
                    </div>
                </form>
            </div>
            <h3 className='new-user-form-h3'>Create Account</h3>
        </div>
    )
}

export default CreateAccount;
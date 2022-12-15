import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const EditAccount = (props) => {

    const { id } = useParams();
    const { loggedInUser, setLoggedInUser } = props;
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ username, setUsername ] = useState("");
    const navigate = useNavigate();


    useEffect(() => {

        axios.get(`http://localhost:8000/api/selected/account/${id}`)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setConfirmPassword(res.data.confirmPassword);
            setUsername(res.data.username);
        })
        .catch(err => console.log("There was an error with editing current values of account", err))
    }, []);


    const updateAccount = (event) => {

        event.preventDefault();

        axios.put(`http://localhost:8000/api/update/account/${id}`, {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            username,
        })
            .then(res => {
                console.log(res);
                navigate("/dashboard");
        })
            .catch(err => console.log("There was an error with updating current values with new values", err))
    }

    const deleteAccount = () => {
        axios.delete(`http://localhost:8000/api/delete/account/${id}`, )
        .then(res => {
            navigate("/create/account");
            console.log(res);
        })
        .catch(err => console.log(err))
    }



    return (
        <div className='edit-user-container'>
            <div className='edit-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='edit-user-form-container'>
                <form onSubmit={updateAccount}>
                    <div className='edit-user-form'>
                        <div className='user-row'>
                            <label className='edit-user-label'>First name: </label>
                            <input className='edit-user-input1' type="text" onChange= { (event) => setFirstName(event.target.value)} value={firstName} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Last Name: </label>
                            <input className='edit-user-input2' type="text" onChange= { (event) => setLastName(event.target.value)} value={lastName} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Email: </label>
                            <input className='edit-user-input3' type="text" onChange= { (event) => setEmail(event.target.value)} value={email} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Password: </label>
                            <input className='edit-user-input4' type="password" onChange= { (event) => setPassword(event.target.value)} value={password} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Confirm Password: </label>
                            <input className='edit-user-input5' type="password" onChange= { (event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Username: </label>
                            <input className='edit-user-input6' type="text" onChange= { (event) => setUsername(event.target.value)} value={username} />
                        </div>
                        <br />
                        <p className='edit-user-info-message'>^ This is what will be yur public display name ^</p>
                        <div className='edit-user-buttons'>
                            <input className='edit-user-submit' type="submit" value="Update User"/>
                            <button className='delete-user' onClick= {deleteAccount}>Delete User</button>
                        </div>
                    </div>
                </form>
            </div>
            <h3 className='edit-user-form-h3'>Edit Account</h3>
        </div>
    )
}

export default EditAccount;
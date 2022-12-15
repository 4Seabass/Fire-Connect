import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const ViewAccount = (props) => {

    const { id } = useParams();

    const { loggedInAcount, setLoggedInAccount } = props;
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");

    const navigate = useNavigate();


    useEffect(() => {

        axios.get(`http://localhost:8000/api/selected/account/${id}`,
        {withCredentials: true})
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
            setUsername(res.data.username);
        })
        .catch(err => console.log("There was an error with editing current values of account", err))
    }, []);


    const deleteAccount = () => {
        axios.delete(`http://localhost:8000/api/delete/account/${id}`, )
        .then(res => {
            navigate("/create/account");
            console.log(res);
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='view-account-container'>
            <div className='view-account-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='view-account-form-container'>
                    <div className='view-account'>
                        <div className='view-account-row'>
                            <label className='view-account-label'>First Name: {firstName}</label>
                        </div>
                        <br />
                        <div className='view-account-row'>
                            <label className='view-account-label'>Last Name:    {lastName}</label>
                        </div>
                        <br />
                        <div className='view-account-row'>
                            <label className='view-account-label'>Email: {email}</label>
                        </div>
                        <br />
                        <div className='view-account-row'>
                            <label className='view-account-label'>Username: {username}</label>
                        </div>
                        <br />
                        <div className='view-account-buttons'>
                            <button className='delete-account' onClick= {deleteAccount}>Delete User</button>
                        </div>
                    </div>
            </div>
            <h3 className='view-account-form-h3'>View Account</h3>
        </div>
    )
}

export default ViewAccount;
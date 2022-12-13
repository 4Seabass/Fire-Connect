import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const RegisterUser = (props) => {








    return (
        <div className='new-user-container'>
            <div className='new-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='new-user-form-container'>
                <form >
                    <div className='new-user-form'>
                        <div className='user-row'>
                            <label className='new-user-label'>First name: </label>
                            <input className='new-user-input1' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Last Name: </label>
                            <input className='new-user-input2' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Email: </label>
                            <input className='new-user-input3' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Password: </label>
                            <input className='new-user-input4' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Confirm Password: </label>
                            <input className='new-user-input5' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='new-user-label'>Username: </label>
                            <input className='new-user-input6' type="text" />
                        </div>
                        <br />
                        <p className='new-user-info-message'>^ This is what will be yur public display name ^</p>
                        <input className='new-user-submit' type="submit" value="Create User"/>
                    </div>
                </form>
            </div>
            <h3 className='new-user-form-h3'>Create Account</h3>
        </div>
    )
}

export default RegisterUser;
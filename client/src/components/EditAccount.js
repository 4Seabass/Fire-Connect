import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const EditAccount = (props) => {








    return (
        <div className='edit-user-container'>
            <div className='edit-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='edit-user-form-container'>
                <form >
                    <div className='edit-user-form'>
                        <div className='user-row'>
                            <label className='edit-user-label'>First name: </label>
                            <input className='edit-user-input1' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Last Name: </label>
                            <input className='edit-user-input2' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Email: </label>
                            <input className='edit-user-input3' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Password: </label>
                            <input className='edit-user-input4' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Confirm Password: </label>
                            <input className='edit-user-input5' type="text" />
                        </div>
                        <br />
                        <div className='user-row'>
                            <label className='edit-user-label'>Username: </label>
                            <input className='edit-user-input6' type="text" />
                        </div>
                        <br />
                        <p className='edit-user-info-message'>^ This is what will be yur public display name ^</p>
                        <div className='edit-user-buttons'>
                            <input className='edit-user-submit' type="submit" value="Update User"/>
                            <button className='delete-user'>Delete User</button>
                        </div>
                    </div>
                </form>
            </div>
            <h3 className='edit-user-form-h3'>Edit Account</h3>
        </div>
    )
}

export default EditAccount;
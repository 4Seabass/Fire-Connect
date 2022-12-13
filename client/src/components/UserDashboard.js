import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const UserDashboard = (props) => {








    return (
        <div className='dashboard-user-container'>

            <div className='dashboard-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='dashboard-user-home-link'>
                <Link>Home</Link>
            </div>
            <hr className='dashboard-user-hr'/>

            <div className='dashboard-bottom-container'>
                <div className='dashboard-postfeed-container'>
                    <div className='dashboard-discussion-card'>
                        <div className='dashboard-discussion-card-top'>
                            <p>Fire Prevention Problems: </p>
                            <p>Created At: 12/13/2022</p>
                        </div>
                        <p className='dashboard-discussion-card-bottom'>
                            A post discussing what are some common problems
                            that plague the fire ground and any solutions you might have?
                        </p>
                        <button className='dashboard-discussion-card-edit-button'>Edit</button>
                    </div>
                    <div className='dashboard-discussion-card-bottom'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;
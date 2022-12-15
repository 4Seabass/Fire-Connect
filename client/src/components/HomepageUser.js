import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const HomepageUser = (props) => {








    return (
        <div className='home-user-container'>

            <div className='home-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <hr className='home-user-hr'/>

            <div className='home-bottom-container'>
                <div className='home-postfeed-container'>
                    <div className='home-discussion-card'>
                        <div className='home-discussion-card-top'>
                            <p>Fire Prevention Problems: </p>
                            <p>Created At: 12/13/2022</p>
                        </div>
                        <p className='home-discussion-card-bottom'>
                            A post discussing what are some common problems
                            that plague the fire ground and any solutions you might have?
                        </p>
                    </div>
                </div>
                <div className='home-side-nav-conatainer'>
                    <div className='home-side-nav-box1'>
                        <span className='home-side-nav-links'><Link to={"/user/home"}>Home</Link></span>
                        <Link>About Us</Link>
                    </div>
                    <hr className='home-side-nav-hr'/>
                        <div className='home-side-nav-box2'>
                            <p className='home-side-nav-box2-links'><Link to={"/dashboard"}>User Dashboard</Link></p>
                            <p className='home-side-nav-box2-links'><Link to={"/user/home"}>Find User</Link></p>
                        </div>
                        <div className='home-side-nav-box3'>
                            <button className='home-side-nav-box3-button'><Link to={"/create/discussion"}>Create Discussion</Link></button>
                            <button className='home-side-nav-box3-button'><Link to={"/user/home"}>Create Orginization</Link></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomepageUser;
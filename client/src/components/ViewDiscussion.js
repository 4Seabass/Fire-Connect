import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const ViewDiscussion = (props) => {








    return (
        <div className='view-discussion-container'>
            <div className='view-discussion-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='view-discussion-home-link'>
                <Link to={"/user/home"}>Home</Link>
            </div>
            <div className='view-discussion-bottom-container'>
                <div className='view-discussion-box1'>
                    <div className='view-discussion-box1-h1-date'>
                        <h2>Selected Post Title: </h2>
                        <p>Date: 12/12/2022 </p>
                    </div>
                    <p className='view-discussion-box1-body'>
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    A post discussing what are some common problems that plague the fire ground and any solutions you might have?
                    </p>
                    <button className='view-discussion-box1-button'>Edit Post</button>
                </div>
                <div className='view-discussion-box2'>
                    <div className='view-discussion-box2-h1-date'>
                        <h2>Commenter Name: </h2>
                        <p>Date: 12/12/2022 </p>
                    </div>
                    <p className='view-discussion-box2-body'>
                        A comment discussing what are some common problems that plague the fire ground and a solution.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ViewDiscussion;
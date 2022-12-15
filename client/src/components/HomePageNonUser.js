import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const HomepageNonUser = (props) => {


    const [ allUserDiscussions, setAllUserDiscussions ] = useState([]);
    
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/all/discussions`)
        .then((res)=>{
            setAllUserDiscussions(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [],
    );


    return (
        <div className='home-page-user-container'>

            <div className='home-page-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <hr className='home-page-user-hr'/>

            <div className='home-page-bottom-container'>
                <div className='home-page-postfeed-container'>
                {
                    allUserDiscussions.map((discussion, index)=>{
                    return (
                        <div key={index}>
                            <div className='home-page-discussion-card'>
                                <div className='home-page-discussion-card-top'>
                                <p>{discussion.title}</p>
                                <p>{discussion.dateCreated}</p>
                            </div>
                                <p className='home-page-discussion-card-bottom'>
                                    {discussion.body}
                                </p>
                            </div>
                        </div>
                    )})
                }

                {/* Make where you can view discussions and add comments for each discussion */}


                </div>
                <div className='home-page-side-nav-conatainer'>
                    <div className='home-page-side-nav-box1'>
                        <span className='home-page-side-nav-links'><Link to={"/home"}>Home</Link></span>
                        <Link>About Us</Link>
                    </div>
                    <hr className='home-page-side-nav-hr'/>
                        <div className='home-page-side-nav-box2'>
                            <p className='home-page-side-nav-box2-links'><Link to={"/home"}>Find User</Link></p>
                            <p className='home-page-side-nav-box2-links'><Link to={"/create/account"}>Create Account</Link></p>
                            <p className='home-page-side-nav-box2-links'><Link to={"/account/login"}>Login</Link></p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomepageNonUser;
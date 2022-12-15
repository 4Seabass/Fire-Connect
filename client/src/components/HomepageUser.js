import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const HomepageUser = (props) => {


    const [ allUserDiscussions, setAllUserDiscussions ] = useState([]);
    const navigate = useNavigate();
    const { loggedInAcount, setLoggedInAccount } = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/all/discussions`,
        {withCredentials: true}
        )
        .then((res)=>{
            setAllUserDiscussions(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [],
    );


    const createDiscussion = () => {
        navigate("/create/discussion");
    }

    const viewDiscussion = (discussionId) => {
        navigate(`/view/discussion/${discussionId}`)
    }


    return (
        <div className='home-user-container'>

            <div className='home-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <hr className='home-user-hr'/>

            <div className='home-bottom-container'>
                <div className='home-postfeed-container'>
                {
                    allUserDiscussions.map((discussion, index)=>{
                    return (
                        <div key={index}>
                            <div className='home-discussion-card'>
                                <div className='home-discussion-card-top'>
                                <p>{discussion.title}</p>
                                <p>{discussion.dateCreated}</p>
                            </div>
                                <p className='home-discussion-card-bottom'>
                                    {discussion.body}
                                </p>
                                <button className='dashboard-discussion-card-view-button' onClick={ (event) => viewDiscussion(discussion._id)}><span className='all-links'>View Discussion</span></button>
                            </div>
                        </div>
                    )})
                }

                {/* Make where you can view discussions and add comments for each discussion */}


                </div>
                <div className='home-side-nav-conatainer'>
                    <div className='home-side-nav-box1'>
                        <span className='home-side-nav-links'><Link className='all-links' to={"/user/home"}><span className='all-links'>Home</span></Link></span>
                        <Link className='all-links'><span className='all-links'>About Us</span></Link>
                    </div>
                    <hr className='home-side-nav-hr'/>
                        <div className='home-side-nav-box2'>
                            <p className='home-side-nav-box2-links'><Link className='all-links' to={`/dashboard/${loggedInAcount.username}`}><span className='all-links'>User Dashboard</span></Link></p>
                            <p className='home-side-nav-box2-links'><Link className='all-links' to={"/view/account/:id"}><span className='all-links'>View Account</span></Link></p>
                        </div>
                        <div className='home-side-nav-box3'>
                            <button className='home-side-nav-box3-button' onClick={createDiscussion}><span className='all-links'>Create Discussion</span></button>
                            <button className='home-side-nav-box3-button'><span className='all-links'>Create Orginization</span></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomepageUser;
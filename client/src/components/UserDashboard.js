import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const UserDashboard = (props) => {

    const [ allUserDiscussions, setAllUserDiscussions ] = useState([]);
    const [ selectedDiscussion, setSelectedDiscussion ] = useState([]);
    const { commentDiscussion, setCommentDiscussion } = props;
    const navigate = useNavigate();
    const { username } = useParams();
    const { loggedInAcount, setLoggedInAccount } = props;


    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/account/discussions/${username}`,
        {withCredentials: true}
        )
        .then((res)=>{
            console.log("Hello World");
            setAllUserDiscussions(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [],
    );

    const logoutAccount = (event) => {
        axios.post(`http://localhost:8000/api/account/logout`,
        {},
        {
            withCredentials: true
        },
        )
        .then((res) => {
            setLoggedInAccount("");
            console.log(res.data);
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const editDiscussion = (discussionId) => {
        navigate(`/edit/discussion/${discussionId}`)
    };

    const viewDiscussion = (discussionId) => {
        navigate(`/view/discussion/${discussionId}`)
    };

    const deleteAccount = (selectedAccount) => {
        axios.delete(`http://localhost:8000/api/delete/account/${selectedAccount}`)
        .then(res => {
            setLoggedInAccount("");
            navigate("/home")
        })
        .catch(err => console.log(err))
    };
    


    return (
        <div className='dashboard-user-container'>

            <div className='dashboard-user-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='dashboard-user-home-link'>
                <Link className='all-links' to={"/user/home"}><span className='all-links'>Home</span></Link>
                <button className='dashboard-logout-button' onClick={logoutAccount}>Logout</button>
            </div>
            <hr className='dashboard-user-hr'/>

            <div className='dashboard-bottom-container'>
                <div className='dashboard-postfeed-container'>
                {
                    allUserDiscussions.map((discussion, index)=>{
                    return (
                        <div key={index}>
                        <div className='dashboard-discussion-card'>
                            <div className='dashboard-discussion-card-top'>
                                <p>{discussion.title}</p>
                                <p>{discussion.dateCreated}</p>
                            </div>
                            <p className='dashboard-discussion-card-bottom'>
                                {discussion.body}
                            </p>
                            <button className='dashboard-discussion-card-view-button' onClick={ (event) => viewDiscussion(discussion._id)}>View Discussion</button>
                            <button className='dashboard-discussion-card-edit-button' onClick={ (event) => editDiscussion(discussion._id)}>Edit</button>
                            </div>
                        </div>
                    )})
                }
                    
                </div>
                <div className='dashboard-side-nav-conatainer'>
                        <div className='dashboard-side-nav-box1'>
                            <p className='dashboard-side-nav-box1-links'><Link className='all-links' to={`/edit/account/${loggedInAcount._id}`}><span className='all-links'>Edit Account</span></Link></p>
                            <p className='dashboard-side-nav-box1-links'><Link className='all-links' to={`/view/account/${loggedInAcount._id}`}><span className='all-links'>View Account</span></Link></p>
                            <p className='dashboard-side-nav-box1-links'><Link className='all-links' onClick={ (event) => deleteAccount(loggedInAcount._id)}><span className='all-links'>Delete Account</span></Link></p>
                        </div>
                        <div className='dashboard-side-nav-box2'>
                            <h3 className='dashboard-side-nav-box2-title'>Orginization Activity: </h3>
                            <br/>
                            <p>Activities</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default UserDashboard;
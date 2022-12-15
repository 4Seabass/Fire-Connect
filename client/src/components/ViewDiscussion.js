import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const ViewDiscussion = (props) => {

    const [ selectedDiscussion, setSelectedDiscussion ] = useState([]);
    const { commentDiscussionId, setCommentDiscussionId } = props;
    const [ allDiscussionComments, setAllDiscussionComments ] = useState([]);
    const [ createdByAccount, setCreatedByAccount ] = useState("");
    const [ myObjectId, setMyObjectId ] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const { loggedInAcount, setLoggedInAccount } = props;

    const getDiscussionAccount = () =>{
        axios.get(`http://localhost:8000/api/selected/account/${myObjectId}`,
        {withCredentials: true}
        )
        .then((res)=>{
            setCreatedByAccount(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/selected/discussion/${id}`)
        .then((res)=>{
            setSelectedDiscussion(res.data);
            setMyObjectId(selectedDiscussion.createdBy)
            getDiscussionAccount();
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [getDiscussionAccount],
    );
    

    useEffect(()=>{
            axios.get(`http://localhost:8000/api/discussion/comments/${id}`,
                {withCredentials: true}
                )
                .then((res)=>{
                    console.log(res.data)
                    setAllDiscussionComments(res.data);
            })
                .catch((err)=>{
                    console.log("There is an error", err);
                });
        
        }, [],
    );


    const editDiscussion = (selectedDiscussion) => {
        if (loggedInAcount._id === selectedDiscussion.createdBy._id) {
            navigate(`/edit/discussion/${selectedDiscussion._id}`)
        }
        else {
            return null
        }
    };

    const editComment = (commentId) => {
        navigate(`/edit/comment/${commentId}`)
    };

    const commentOnDiscussion = (discussionId) => {
        setCommentDiscussionId(discussionId);
        navigate(`/create/comment`)
    };


    return (
        <div className='view-discussion-container'>
            <div className='view-discussion-h1'>
                <h1> Fire-Connect <img src={fireLogo} /></h1>
            </div>
            <div className='view-discussion-home-link'>
                <Link className='all-links' to={"/user/home"}><span className='all-links'>Home</span></Link>
                <hr className='view-discussion-user-hr'/>
            </div>
            <div className='view-discussion-bottom-container'>
                <div className='view-discussion-box1'>
                    <div className='view-discussion-box1-h1-date'>
                        <h2>{selectedDiscussion.title}</h2>
                        <p>{createdByAccount.username}</p>
                        <p>{selectedDiscussion.dateCreated}</p>
                    </div>
                    <div className='view-discussion-box1-body'>
                        <p>{selectedDiscussion.body}</p>
                    </div>
                    <button className='view-discussion-box1-button' onClick={ (event) => editDiscussion(selectedDiscussion)}>Edit Post</button>
                    <button className='view-discussion-box1-create-comment' onClick={ (event) => commentOnDiscussion(selectedDiscussion._id)}>Create Comment</button>
                </div>
                {
                    allDiscussionComments.map((comment, index)=>{
                    return (
                        <div key={index}>
                            <div className='view-discussion-comment-box'>
                                <div className='view-discussion-comment-box-h1-date'>
                                    <h2>{comment.title} </h2>
                                    <p>{comment.createdBy.username}</p>
                                    <p>{comment.dateCreated}</p>
                                </div>
                                <p className='view-discussion-comment-box-body'>
                                    {comment.body}
                                </p>
                                <button className='view-comment-box1-button-edit' onClick={ (event) => editComment(comment._id)}>Edit Comment</button>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default ViewDiscussion;
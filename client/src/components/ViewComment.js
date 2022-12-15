import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const ViewComment = (props) => {

    const [ selectedComment, setSelectedComment ] = useState([]);
    const { commentDiscussionId, setCommentDiscussionId } = props;
    const [ allDiscussionComments, setAllDiscussionComments ] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const { loggedInAcount, setLoggedInAccount } = props;


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/selected/comment/${id}`,
        {withCredentials: true}
        )
        .then((res)=>{
            setSelectedComment(res.data);
	})
        .catch((err)=>{
            console.log("There is an error", err);
        });
    }, [],
    );


    const editComment = (commentId) => {
        navigate(`/edit/comment/${commentId}`)
    };


    return (
        <div className='view-comment-container'>
            <div className='view-comment-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='view-comment-home-link'>
                <Link to={"/user/home"}><span className='all-links'>Home</span></Link>
            </div>
            <div className='view-comment-bottom-container'>
                <div className='view-comment-box1'>
                    <div className='view-comment-box1-h1-date'>
                        <h2>{selectedComment.title}</h2>
                        <p>{selectedComment.dateCreated}</p>
                    </div>
                    <p className='view-comment-box1-body'>
                        <p>{selectedComment.body}</p>
                    </p>
                    <button className='view-comment-box1-button' onClick={ (event) => editComment(selectedComment._id)}>Edit Comment</button>
                </div>
            </div>
        </div>
    )
}

export default ViewComment;
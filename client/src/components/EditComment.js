import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const EditComment = (props) => {

    const { id } = useParams();
    const { loggedInAcount, setLoggedInAcount } = props;
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:8000/api/selected/comment/${id}`,
        {withCredentials: true})
        .then(res => {
            setTitle(res.data.title);
            setBody(res.data.body);
        })
        .catch(err => console.log("There was an error with editing current values of the comment", err))
    }, []);


    const updateComment = (event) => {

        event.preventDefault();

        axios.put(`http://localhost:8000/api/update/comment/${id}`, {
            title,
            body,
        },
        {withCredentials: true}
        )
            .then(res => {
                console.log(res);
                navigate(`/user/home`);
        })
            .catch(err => console.log("There was an error with updating current values with new values", err))
    }

    const deleteComment = () => {
        axios.delete(`http://localhost:8000/api/delete/comment/${id}`,
        {withCredentials: true})
        .then(res => {
            navigate("/user/home");
            console.log(res);
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='edit-comment-container'>
            <div className='edit-comment-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='edit-comment-form-container'>
                <form onSubmit={updateComment} >
                    <div className='edit-comment-form'>
                        <div className='comment-row'>
                            <label className='edit-comment-label'>Title: </label>
                            <input className='edit-comment-input1' type="text" onChange= { (event) => setTitle(event.target.value)} value={title} />
                        </div>
                        <br />
                        <div className='comment-row'>
                            <label className='edit-comment-label'>Body: </label>
                            <textarea className='edit-comment-body' id="w3review" name="w3review" rows="4" cols="50" onChange= { (event) => setBody(event.target.value)} value={body}>
                                
                            </textarea>
                        </div>
                        <br />
                        <div className='edit-comment-buttons'>
                            <input className='edit-comment-submit' type="submit" value="Edit Comment Post"/>
                            <button className='edit-comment-delete-button' onClick= {deleteComment} >Delete Comment</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            <h3 className='edit-comment-form-h3'>Edit Comment</h3>
        </div>
    )
}

export default EditComment;
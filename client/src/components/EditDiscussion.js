import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const EditDiscussion = (props) => {

    const { id } = useParams();
    const { loggedInAcount, setLoggedInAccount } = props;
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:8000/api/selected/discussion/${id}`,
        {withCredentials: true})
        .then(res => {
            setTitle(res.data.title);
            setBody(res.data.body);
        })
        .catch(err => console.log("There was an error with editing current values of the discussion", err))
    }, []);


    const updateDiscussion = (event) => {

        event.preventDefault();

        axios.put(`http://localhost:8000/api/update/discussion/${id}`, {
            title,
            body,
        },
        {withCredentials: true}
        )
            .then(res => {
                console.log(res);
                navigate(`/dashboard/${loggedInAcount.username}`);
        })
            .catch(err => console.log("There was an error with updating current values with new values", err))
    }

    const deleteDiscussion = () => {
        axios.delete(`http://localhost:8000/api/delete/discussion/${id}`,
        {withCredentials: true})
        .then(res => {
            navigate(`/dashboard/${loggedInAcount.username}`);
            console.log(res);
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='edit-discussion-container'>
            <div className='edit-discussion-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='edit-discussion-form-container'>
                <form onSubmit={updateDiscussion} >
                    <div className='edit-discussion-form'>
                        <div className='discussion-row'>
                            <label className='edit-discussion-label'>Title: </label>
                            <input className='edit-discussion-input1' type="text" onChange= { (event) => setTitle(event.target.value)} value={title} />
                        </div>
                        <br />
                        <div className='discussion-row'>
                            <label className='edit-discussion-label'>Body: </label>
                            <textarea className='edit-discussion-body' id="w3review" name="w3review" rows="4" cols="50" onChange= { (event) => setBody(event.target.value)} value={body}>
                                
                            </textarea>
                        </div>
                        <br />
                        <div className='edit-discussion-buttons'>
                            <input className='edit-discussion-submit' type="submit" value="Edit Discussion Post"/>
                            <button className='edit-discussion-delete-button' onClick= {deleteDiscussion} >Delete Discussion</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            <h3 className='edit-discussion-form-h3'>Edit Discussion</h3>
        </div>
    )
}

export default EditDiscussion;
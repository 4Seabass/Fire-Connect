import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const CreateDiscussion = (props) => {


    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;

    const { commentDiscussion, setCommentDiscussion } = props;
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ dateCreated, setDateCreated ] = useState(currentDate);
    const { loggedInAcount, setLoggedInAccount } = props;
    const navigate = useNavigate();

    const createDiscussion = (event) => {

        event.preventDefault();

        axios.post("http://localhost:8000/api/create/discussion", {
            title,
            body,
            dateCreated,
        },
        {
            withCredentials: true
        }
        )
            .then(res => {
                console.log("The data for the new Account", res.data);
                navigate(`/dashboard/${loggedInAcount.username}`)
            })
            .catch((err) => {
                console.log(err);
            })
        }







    return (
        <div className='create-discussion-container'>
            <div className='create-discussion-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='create-discussion-form-container'>
                <form onSubmit={createDiscussion}>
                    <div className='create-discussion-form'>
                        <div className='discussion-row'>
                            <label className='create-discussion-label'>Title: </label>
                            <input className='create-discussion-input1' type="text" onChange= { (event) => setTitle(event.target.value)} />
                        </div>
                        <br />
                        <div className='discussion-row'>
                            <label className='create-discussion-label'>Body: </label>
                            <textarea className='create-discussion-body' id="w3review" name="w3review" rows="4" cols="50" onChange= { (event) => setBody(event.target.value)}>
                                
                            </textarea>
                        </div>
                        <br />
                        <div className='create-discussion-buttons'>
                            <input className='create-discussion-submit' type="submit" value="Create Discussion Post"/>
                        </div>
                    </div>
                </form>
            </div>
            <h3 className='create-discussion-form-h3'>Create Discussion</h3>
        </div>
    )
}

export default CreateDiscussion;
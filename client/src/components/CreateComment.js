import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import fireLogo from "../images/flame_curved32x32.png";



const CreateComment = (props) => {


    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;


    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ dateCreated, setDateCreated ] = useState(currentDate);
    const navigate = useNavigate();

    const createComment = (event) => {

        event.preventDefault();

        axios.post("http://localhost:8000/api/create/comment", {
            title,
            body,
            dateCreated,
        })
            .then(res => {
                navigate("/login");
                console.log("The data for the new Account", res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }




    return (
        <div className='create-comment-container'>
            <div className='create-comment-h1'>
                <h1> Fire-Connect <img src={fireLogo} /> </h1>
            </div>
            <div className='create-comment-form-container'>
                <form onSubmit={createComment}>
                    <div className='create-comment-form'>
                        <div className='comment-row'>
                            <label className='create-comment-label'>Title: </label>
                            <input className='create-comment-input1' type="text" onChange= { (event) => setTitle(event.target.value)} />
                        </div>
                        <br />
                        <div className='comment-row'>
                            <label className='create-comment-label'>Body: </label>
                            <textarea className='create-comment-body' id="w3review" name="w3review" rows="4" cols="50" onChange= { (event) => setBody(event.target.value)}>
                                
                            </textarea>
                        </div>
                        <br />
                        <div className='create-comment-buttons'>
                            <input className='create-comment-submit' type="submit" value="Create Comment"/>
                        </div>
                    </div>
                </form>
            </div>
            <h3 className='create-comment-form-h3'>Create Comment</h3>
        </div>
    )
}

export default CreateComment;
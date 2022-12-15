import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import LoginAccount from './components/LoginAccount';
import EditAccount from './components/EditAccount';
import UserDashboard from './components/UserDashboard';
import HomepageUser from './components/HomepageUser';
import CreateDiscussion from './components/CreateDiscussion';
import EditDiscussion from './components/EditDiscussion';
import ViewDiscussion from './components/ViewDiscussion';
import CreateComment from './components/CreateComment';
import EditComment from './components/EditComment';
import ViewComment from './components/ViewComment';
import HomepageNonUser from './components/HomePageNonUser';
import ViewAccount from './components/ViewAccount';

function App() {

    const [ loggedInAcount, setLoggedInAccount ] = useState("");
    const [ commentDiscussionId, setCommentDiscussionId ] = useState("");
    const [ allUserDiscussions, setAllUserDiscussions ] = useState([]);


  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomepageNonUser loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/create/account" element={<CreateAccount />} />
            <Route path="/account/login" element={<LoginAccount loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/dashboard/:username" element={<UserDashboard commentDiscussionId={commentDiscussionId} setCommentDiscussionId={setCommentDiscussionId} loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} allUserDiscussions={allUserDiscussions} setAllUserDiscussions={setAllUserDiscussions}/>} />
            <Route path="/user/home" element={<HomepageUser loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/create/discussion" element={<CreateDiscussion loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/edit/discussion/:id" element={<EditDiscussion loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/edit/account/:id" element={<EditAccount loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/view/discussion/:id" element={<ViewDiscussion commentDiscussionId={commentDiscussionId} setCommentDiscussionId={setCommentDiscussionId} loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/view/account/:id" element={<ViewAccount commentDiscussionId={commentDiscussionId} setCommentDiscussionId={setCommentDiscussionId} loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/view/comment/:id" element={<ViewComment commentDiscussionId={commentDiscussionId} setCommentDiscussionId={setCommentDiscussionId} loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/create/comment" element={<CreateComment commentDiscussionId={commentDiscussionId} setCommentDiscussionId={setCommentDiscussionId} loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
            <Route path="/edit/comment/:id" element={<EditComment loggedInAcount={loggedInAcount} setLoggedInAccount={setLoggedInAccount} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

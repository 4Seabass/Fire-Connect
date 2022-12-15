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

function App() {

    const [ loggedInUser, setLoggedInUser ] = useState();
    const [ allUserDiscussions, setAllUserDiscussions ] = useState([]);


  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
            <Route path="/create/account" element={<CreateAccount />} />
            <Route path="/account/login" element={<LoginAccount loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/dashboard/:id" element={<UserDashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} allUserDiscussions={allUserDiscussions} setAllUserDiscussions={setAllUserDiscussions}/>} />
            <Route path="/user/home" element={<HomepageUser loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/create/discussion" element={<CreateDiscussion loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/edit/discussion/:id" element={<EditDiscussion loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/edit/account/:id" element={<EditAccount loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/view/discussion/:id" element={<ViewDiscussion loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/create/comment" element={<CreateComment loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/edit/comment/:id" element={<EditComment loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

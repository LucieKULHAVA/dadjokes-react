import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [usersLikes, setUserLikes] = useState(likes);
  const [usersDislikes, setUserDislikes] = useState(dislikes);

  return (
   <div style={{ opacity: usersDislikes >usersLikes ? '50%' : '100%' }} className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button id="btn-up" value={usersLikes} className="btn-like btn-like--up"  
        onClick=
        {() => setUserLikes((palec) => palec + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {usersLikes}
        </span>
        <button id="btn-down" value={usersDislikes} className="btn-like btn-like--down" 
        onClick=
        {() => setUserDislikes((palec) => palec + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {usersDislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;

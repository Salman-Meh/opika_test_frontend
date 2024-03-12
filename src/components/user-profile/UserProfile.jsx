import React, { useState } from 'react';
import './styles.css';
import { DEFAULT_PROFILE } from '../../constants/default-pic.ts';

const UserProfile = ({
  name = DEFAULT_PROFILE.name,
  email = DEFAULT_PROFILE.email,
  bio = DEFAULT_PROFILE.bio,
  profilePicture = DEFAULT_PROFILE.profilePicture,
}) => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className='user-profile'>
      <img
        src={profilePicture ? profilePicture : DEFAULT_PROFILE.profilePicture}
        className='profile-image'
      />
      <div className='profile-info'>
        <h2>{name}</h2>
        <p>{bio}</p>
        <button onClick={toggleEmail}>
          {showEmail ? 'Hide Email' : 'Show Email'}
        </button>
        <p>{showEmail ? 'Email: ' + email : '\u00A0'}</p>
      </div>
    </div>
  );
};

export default UserProfile;

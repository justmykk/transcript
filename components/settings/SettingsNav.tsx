import React, { useState } from 'react';

export const SettingsNav = () => {
  const [current, setCurrent] = useState('profile');

  return (
    <div className="settings__nav">
      <p
        onClick={() => setCurrent('profile')}
        className={current === 'profile' ? 'settings__nav--active' : ''}
      >
        Profile
      </p>
      <p
        onClick={() => setCurrent('edit')}
        className={current === 'edit' ? 'settings__nav--active' : ''}
      >
        Edit Profile
      </p>
      <p
        onClick={() => setCurrent('password')}
        className={current === 'password' ? 'settings__nav--active' : ''}
      >
        Change Password
      </p>
    </div>
  );
};

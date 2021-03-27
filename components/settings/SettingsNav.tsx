import React, { useState } from 'react';

interface Props {
  current: string;
  setCurrent: (args0: 'profile' | 'edit' | 'password') => void;
}

export const SettingsNav: React.FC<Props> = (props) => {
  return (
    <div className="settings__nav">
      <p
        onClick={() => props.setCurrent('profile')}
        className={props.current === 'profile' ? 'settings__nav--active' : ''}
      >
        Profile
      </p>
      <p
        onClick={() => props.setCurrent('edit')}
        className={props.current === 'edit' ? 'settings__nav--active' : ''}
      >
        Edit Profile
      </p>
      <p
        onClick={() => props.setCurrent('password')}
        className={props.current === 'password' ? 'settings__nav--active' : ''}
      >
        Change Password
      </p>
    </div>
  );
};

import React from 'react';
import { AppButton } from '../AppButton';

export const EditImage = () => {
  return (
    <div className="settings__edit-image">
      <img src="/profile_avatar.svg" alt="profile" />

      <div className="story">
        <p>Edit profile photo</p>
        <p>Max file size is 8MB PNG, JPG or JPEG file</p>
      </div>

      <AppButton
        padding="10px 20px"
        fontSize={14}
        label="Upload Image"
        onClick={() => alert('Upload')}
        width={140}
        buttonColor="var(--green-color)"
      />
    </div>
  );
};

import React, { useRef, useState } from 'react';
import { AppButton } from '../AppButton';

export const EditImage = () => {
  const [image, setImage] = useState('');
  const imageRef = useRef<HTMLInputElement>();

  const onUpload = () => {
    if (imageRef) {
      imageRef.current.click();

      imageRef.current.addEventListener('change', (ev: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(ev.target.files[0]);
        reader.onload = () => setImage(reader.result.toString());
      });
    }
  };

  return (
    <div className="settings__edit-image">
      {image ? (
        <img src={image} alt="profile" />
      ) : (
        <img src="/profile_avatar.svg" alt="profile" />
      )}

      <div className="story">
        <p>Edit profile photo</p>
        <p>Max file size is 8MB PNG, JPG or JPEG file</p>
      </div>

      <AppButton
        padding="10px 20px"
        fontSize={14}
        label="Upload Image"
        onClick={onUpload}
        width={140}
        buttonColor="var(--green-color)"
      />

      <input
        type="file"
        ref={imageRef}
        style={{ display: 'none' }}
        accept="image/x-png,image/gif,image/jpeg"
      />
    </div>
  );
};

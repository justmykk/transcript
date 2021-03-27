import React, { CSSProperties, FormEvent, useState } from 'react';
import { AppButton } from '../AppButton';
import { AppInput } from '../Input';

const LABEL_STYLE: CSSProperties = {
  fontSize: 16,
  fontWeight: 'normal',
};

const INPUT_STYLE: CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid rgba(39, 39, 39, 0.6)',
  width: '50%',
};

export const ChangePassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitForm = (ev: FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <AppInput
        placeholder="Current Password"
        value={oldPassword}
        onChange={setOldPassword}
        labelStyle={LABEL_STYLE}
        inputStyle={INPUT_STYLE}
        icon={showOld ? 'eye' : 'hide'}
        inputType={showOld ? 'text' : 'password'}
        onTogglePassword={() => setShowOld((val) => !val)}
      />

      <AppInput
        placeholder="New Password"
        value={newPassword}
        onChange={setNewPassword}
        labelStyle={LABEL_STYLE}
        inputStyle={INPUT_STYLE}
        icon={showNew ? 'eye' : 'hide'}
        inputType={showNew ? 'text' : 'password'}
        onTogglePassword={() => setShowNew((val) => !val)}
      />

      <AppInput
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        labelStyle={LABEL_STYLE}
        inputStyle={{ ...INPUT_STYLE, marginBottom: 40 }}
        icon={showConfirm ? 'eye' : 'hide'}
        inputType={showConfirm ? 'text' : 'password'}
        onTogglePassword={() => setShowConfirm((val) => !val)}
      />

      <AppButton label="Update Password" width={230} />
    </form>
  );
};

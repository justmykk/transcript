import React, { CSSProperties, useState } from 'react';
import { AppButton } from '../AppButton';
import { AppInput } from '../Input';
import { Spacer } from '../Spacer';

const LABEL_STYLE: CSSProperties = {
  fontSize: 16,
  fontWeight: 'normal',
};

const INPUT_STYLE: CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid rgba(39, 39, 39, 0.6)'
};

export const EditProfile = () => {
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <div className="row">
        <AppInput
          onChange={setFn}
          value={fn}
          placeholder="First Name"
          labelStyle={LABEL_STYLE}
          inputStyle={INPUT_STYLE}
        />
        <Spacer type="horizontal" value={72} />
        <AppInput
          value={ln}
          placeholder="Last Name"
          onChange={setLn}
          labelStyle={LABEL_STYLE}
          inputStyle={INPUT_STYLE}
        />
      </div>

      <div className="row">
        <AppInput
          value={email}
          onChange={setEmail}
          placeholder="Email"
          inputType="email"
          labelStyle={LABEL_STYLE}
          inputStyle={INPUT_STYLE}
        />
        <Spacer type="horizontal" value={72} />
        <AppInput
          value={phone}
          onChange={setPhone}
          placeholder="Mobile Number"
          inputStyle={INPUT_STYLE}
          labelStyle={LABEL_STYLE}
          inputType="tel"
        />
      </div>

      <div className="settings__editButton">
        <AppButton label="Update Profile" width={190} />
      </div>
    </div>
  );
};

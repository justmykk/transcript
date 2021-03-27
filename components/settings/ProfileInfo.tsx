import React, { CSSProperties } from 'react';
import { AppButton } from '../AppButton';
import { AppInput } from '../Input';
import { Spacer } from '../Spacer';

const LABEL_STYLE: CSSProperties = {
  fontSize: 16,
  fontWeight: 'normal'
}

export const ProfileInfo = () => {
  return (
    <div>
      <div className="row">
        <AppInput
          onChange={(val) => console.log(val)}
          value="Afuwape"
          placeholder="First Name"
          labelStyle={LABEL_STYLE}
          readOnly
        />
        <Spacer type="horizontal" value={72} />
        <AppInput
          value="Abiodun"
          placeholder="Last Name"
          labelStyle={LABEL_STYLE}
          readOnly
        />
      </div>

      <div className="row">
        <AppInput
          value="mail@email.com"
          placeholder="Email"
          labelStyle={LABEL_STYLE}
          readOnly
        />
        <Spacer type="horizontal" value={72} />
        <AppInput
          value="07039429722"
          placeholder="Mobile Number"
          labelStyle={LABEL_STYLE}
          readOnly
        />
      </div>

      <div className="settings__editButton">
      <AppButton label="Edit Profile" width={160} />
      </div>
    </div>
  );
};

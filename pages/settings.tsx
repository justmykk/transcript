import React, { useState } from 'react';
import { CommonLayout } from '../components/CommonLayout';
import { EditImage } from '../components/settings/EditImage';
import { SettingsNav } from '../components/settings/SettingsNav';
import { ProfileInfo } from '../components/settings/ProfileInfo';
import { EditProfile } from '../components/settings/EditProfile';
import { ChangePassword } from '../components/settings/ChangePassword';

const Settings = () => {
  const [view, setView] = useState<'profile' | 'edit' | 'password'>('profile');

  return (
    <CommonLayout>
      <div className="settings">
        <h1 className="settings__header">Settings</h1>

        <div className="settings__content">
          <p style={{ color: '#272727', opacity: 0.5 }}>
            Here you can edit your profile & change your password.
          </p>

          <SettingsNav current={view} setCurrent={setView} />

          {view !== 'password' && <EditImage />}

          {view === 'profile' && <ProfileInfo onEdit={() => setView('edit')} />}

          {view === 'edit' && <EditProfile />}

          {view === 'password' && <ChangePassword />}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Settings;

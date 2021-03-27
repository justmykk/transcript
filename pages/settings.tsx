import { CommonLayout } from '../components/CommonLayout';
import { EditImage } from '../components/settings/EditImage';
import { SettingsNav } from '../components/settings/SettingsNav';
import { ProfileInfo } from '../components/settings/ProfileInfo';

const Settings = () => {
  return (
    <CommonLayout>
      <div className="settings">
        <h1 className="settings__header">Settings</h1>

        <div className="settings__content">
          <p style={{ color: '#272727', opacity: 0.5 }}>
            Here you can edit your profile & change your password.
          </p>

          <SettingsNav />

          <EditImage />

          <ProfileInfo />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Settings;

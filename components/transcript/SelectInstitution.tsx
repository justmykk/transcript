import React from 'react';
import { AppSelect } from '../AppSelect';

export const SelectInstitution = () => {
  const schools = [
    { label: 'Obafemi Awolowo University (OAU)', value: 'OAU' },
    { label: 'Covenant University', value: 'CU' },
  ];

  return (
    <div>
      <AppSelect containerStyle={{marginBottom: 5}} label="Select Institution" options={schools} />
      <p className="info">
        P.S: please select the school you are applying transcript from.
      </p>

      <style jsx>{`
        .info {
          font-size: 14;
          font-weight: 600;
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
};

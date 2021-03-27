import React from 'react';
import { AppSelect } from '../AppSelect';

export const PurposeOfTranscript = () => {
  const schools = [
    { label: 'Obafemi Awolowo University (OAU)', value: 'OAU' },
    { label: 'Covenant University', value: 'CU' },
  ];

  return (
    <div>
      <AppSelect
        containerStyle={{ marginBottom: 5 }}
        label="Purpose of Transcript"
        options={schools}
      />
      <p className="info">
      P.S: Make sure you select purpose of the transcript you are applying for.
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

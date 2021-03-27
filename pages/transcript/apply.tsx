import { useRouter } from 'next/router';
import { type } from 'node:os';
import React, { useState } from 'react';
import { AppButton } from '../../components/AppButton';
import { CommonLayout } from '../../components/CommonLayout';
import { SelectInstitution } from '../../components/transcript/SelectInstitution';

const PAGE_TITLES = [
  'Select Insitution',
  'School Details',
  'Transcript Details',
  'Transcript Details',
];

const ApplyTranscript = () => {
  const [view, setView] = useState(1);

  const router = useRouter();

  const onBack = () => {
    view === 1 ? router.back() : setView((val) => val - 1);
  };

  const onContinue = () => {
    if (view < 4) {
      setView((val) => val + 1);
    }
  };

  return (
    <CommonLayout>
      <button className="applyBackButton" onClick={onBack}>
        <img src="/back_arrow.svg" alt="back arrow" />
        <span>Back</span>
      </button>

      <div className="applyContent">
        <div className="row applyContentHeader">
          <div className="applyStepCounter">Step {view}/4</div>
          <p>{PAGE_TITLES[view - 1]}</p>
        </div>

        <div className="applyContentBody">
          {view === 1 && <SelectInstitution />}

          <div className="row applyContentFooter">
            <div></div>
            <AppButton label="Continue" width={150} onClick={onContinue} />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ApplyTranscript;

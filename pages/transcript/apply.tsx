import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AppButton } from '../../components/AppButton';
import { CommonLayout } from '../../components/CommonLayout';
import { PurposeOfTranscript } from '../../components/transcript/PurposeOfTranscript';
import { SchoolDetails } from '../../components/transcript/SchoolDetails';
import { SelectInstitution } from '../../components/transcript/SelectInstitution';
import { TranscriptAmount } from '../../components/transcript/TranscriptAmount';
import { TranscriptDetails } from '../../components/transcript/TranscriptDetails';

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

          {view === 2 && <SchoolDetails />}

          {view === 3 && <PurposeOfTranscript />}

          {view === 4 && <TranscriptDetails />}

          <div className="row applyContentFooter">
            <div>{view === 4 && <TranscriptAmount />}</div>

            <AppButton label="Continue" width={150} onClick={onContinue} />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ApplyTranscript;

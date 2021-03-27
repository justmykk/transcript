import React from 'react';
import { INPUT_STYLE, LABEL_STYLE } from '../../styles/global-styles';
import { AppSelect } from '../AppSelect';
import { AppInput } from '../Input';

export const SchoolDetails = () => {
  const arrayOptions = [
    { label: 'This is label one', value: 'one' },
    { label: 'This is label two', value: 'two' },
  ];

  return (
    <div>
      <div className="row">
        <div className="applySpacerLeft">
          <AppSelect label="Faculty" options={arrayOptions} />
        </div>

        <div className="applySpacerRight">
          <AppSelect label="Department" options={arrayOptions} />
        </div>
      </div>

      <div className="row">
        <div className="applySpacerLeft">
          <AppSelect label="Course" options={arrayOptions} />
        </div>

        <div className="applySpacerRight">
          <AppInput
            value=""
            placeholder="Matric Number"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
          />
        </div>
      </div>

      <div className="row">
        <div className="applySpacerLeft">
          <AppInput
            value=""
            placeholder="Session"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
          />
        </div>

        <div className="applySpacerRight">
          <AppSelect label="Level" options={arrayOptions} />
        </div>
      </div>

      <style jsx>{`
        .row {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { INPUT_STYLE, LABEL_STYLE } from '../../styles/global-styles';
import { AppSelect } from '../AppSelect';
import { AppInput } from '../Input';

export const TranscriptDetails = () => {
  const arrayOptions = [
    { label: 'This is label one', value: 'one' },
    { label: 'This is label two', value: 'two' },
  ];

  return (
    <div>
      <div className="row">
        <div className="applySpacerLeft">
          <AppSelect label="Institution Admitted" options={arrayOptions} />
        </div>

        <div className="applySpacerRight">
          <AppInput
            value=""
            placeholder="Institution Address"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
          />
        </div>
      </div>

      <div className="row">
        <div className="applySpacerLeft">
          <AppSelect label="Instituion Falculty" options={arrayOptions} />
        </div>

        <div className="applySpacerRight">
          <AppSelect label="PROGRAMME" options={arrayOptions} />
        </div>
      </div>

      <style jsx>{`
        .row:first-child {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

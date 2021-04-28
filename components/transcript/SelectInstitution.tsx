import React, { FC } from 'react';
import { InstitutionModel } from '../../models/institution-model';
import { AppSelect } from '../AppSelect';

interface Props {
  schools: Array<InstitutionModel>;
  school: string;
  onChangeSchool: (arg0: string) => void
}

export const SelectInstitution: FC<Props> = (props) => {
  return (
    <div>
      <div>
        <p className="appSelectLabel">Select Institution</p>
        <div className="appSelect" style={{ marginBottom: 5 }}>
          <select
            value={props.school}
            onChange={(val) => props.onChangeSchool(val.target.value)}
          >
            <option value="" disabled>
              Pick an Institution
            </option>
            {props.schools.map((item) => (
              <option key={item.institutionCode} value={item.id}>
                {item.institutionName}
              </option>
            ))}
          </select>
        </div>
      </div>

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

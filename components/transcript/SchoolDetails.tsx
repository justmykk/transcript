import React, { FC } from 'react';
import { DepartmentModel, FacultyModel } from '../../models/institution-model';
import { INPUT_STYLE, LABEL_STYLE } from '../../styles/global-styles';
import { AppSelect } from '../AppSelect';
import { AppInput } from '../Input';

interface Props {
  faculties: Array<FacultyModel>;
  faculty: string;
  departments: Array<DepartmentModel>;
  department: string;
  onChangeFaculty: (args0: string) => void;
  onChangeDepartment: (args0: string) => void;
}

export const SchoolDetails: FC<Props> = (props) => {
  const arrayOptions = [
    { label: 'This is label one', value: 'one' },
    { label: 'This is label two', value: 'two' },
  ];

  return (
    <div>
      <div className="row">
        <div className="applySpacerLeft">
          <div>
            <p className="appSelectLabel">Faculty</p>
            <div className="appSelect">
              <select
                value={props.faculty}
                onChange={(val) => props.onChangeFaculty(val.target.value)}
              >
                <option value="" disabled></option>
                {props.faculties.map((item) => (
                  <option key={item.facultyCode} value={item.id}>
                    {item.facultyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="applySpacerRight">
          <div>
            <p className="appSelectLabel">Department</p>
            <div className="appSelect">
              <select
                value={props.department}
                onChange={(val) => props.onChangeDepartment(val.target.value)}
              >
                <option value="" disabled></option>
                {props.departments.map((item) => (
                  <option key={item.departmentCode} value={item.id}>
                    {item.departmentName}
                  </option>
                ))}
              </select>
            </div>
          </div>
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

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
  level: string;
  course: string;
  session: string;
  matricNo: string;
  onChangeFaculty: (args0: string) => void;
  onChangeDepartment: (args0: string) => void;
  onChangeLevel: (args0: string) => void;
  onChangeCourse: (args0: string) => void;
  onChangeSession: (args0: string) => void;
  onChangeMatric: (args0: string) => void;
}

export const SchoolDetails: FC<Props> = (props) => {
  const LEVEL_OPTIONS = [
    { label: '100 Level', value: '100 Level' },
    { label: '200 Level', value: '200 Level' },
    { label: '300 Level', value: '300 Level' },
    { label: '400 Level', value: '400 Level' },
    { label: '500 Level', value: '500 Level' },
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
          <AppInput
            value={props.course}
            placeholder="Course"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
            onChange={props.onChangeCourse}
          />
        </div>

        <div className="applySpacerRight">
          <AppInput
            value={props.matricNo}
            placeholder="Matric Number"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
            onChange={props.onChangeMatric}
          />
        </div>
      </div>

      <div className="row">
        <div className="applySpacerLeft">
          <AppInput
            value={props.session}
            placeholder="Session"
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
            onChange={props.onChangeSession}
          />
        </div>

        <div className="applySpacerRight">
          <AppSelect value={props.level} onChange={props.onChangeLevel} label="Level" options={LEVEL_OPTIONS} />
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

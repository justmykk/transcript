import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AppButton } from '../../components/AppButton';
import { CommonLayout } from '../../components/CommonLayout';
import { PurposeOfTranscript } from '../../components/transcript/PurposeOfTranscript';
import { SchoolDetails } from '../../components/transcript/SchoolDetails';
import { SelectInstitution } from '../../components/transcript/SelectInstitution';
import { TranscriptAmount } from '../../components/transcript/TranscriptAmount';
import { TranscriptDetails } from '../../components/transcript/TranscriptDetails';
import {
  DepartmentModel,
  FacultyModel,
  InstitutionModel,
} from '../../models/institution-model';
import { applyService } from '../../services/apply';

const PAGE_TITLES = [
  'Select Insitution',
  'School Details',
  'Transcript Details',
  'Transcript Details',
];

const ApplyTranscript = () => {
  const [view, setView] = useState(1);

  const [institutions, setInstitutions] = useState<Array<InstitutionModel>>([]);
  const [faculties, setFaculties] = useState<Array<FacultyModel>>([]);
  const [departments, setDepartments] = useState<Array<DepartmentModel>>([]);

  const [institution, setInstitution] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');

  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      const data = await applyService.getInstitutions();
      setInstitutions(data);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (institution) {
      setFaculty('');
      const arr = institutions.find((item) => item.id === Number(institution));
      setFaculties(arr.faculties);
    }
  }, [institution]);

  useEffect(() => {
    if (faculty) {
      setDepartment('');
      const arr = faculties.find((item) => item.id === Number(faculty));
      setDepartments(arr.departments);
    }
  }, [faculty]);

  const onBack = () => {
    view === 1 ? router.back() : setView((val) => val - 1);
  };

  const onContinue = () => {
    if (view === 1 && !institution) {
      handleError('Select an institution to continue');
      return;
    }

    if (view < 4) {
      setView((val) => val + 1);
    }
  };

  const handleError = (msg: string) => {
    Swal.fire({
      icon: 'error',
      text: msg,
    });
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
          {view === 1 && (
            <SelectInstitution
              onChangeSchool={setInstitution}
              schools={institutions}
              school={institution}
            />
          )}

          {view === 2 && (
            <SchoolDetails
              faculties={faculties}
              faculty={faculty}
              onChangeFaculty={setFaculty}
              departments={departments}
              department={department}
              onChangeDepartment={setDepartment}
            />
          )}

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

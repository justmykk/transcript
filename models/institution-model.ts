export class InstitutionModel {
    id: number = 0;
    institutionName: string = '';
    institutionCode: string = '';
    faculties: Array<FacultyModel> = [];

    constructor(json?: any) {
        if (json && Object.keys(json).length > 0) {
            this.id = json.id;
            this.institutionName = json.institutionName;
            this.institutionCode = json.institutionCode;
            this.faculties = json.faculties;
        }
    }
}

export class FacultyModel {
    id: number = 0;
    facultyCode: string = '';
    departments: Array<DepartmentModel> = [];
}

export class DepartmentModel {
    id: number = 0;
    departmentName: string = '';
    departmentCode: string = '';
}
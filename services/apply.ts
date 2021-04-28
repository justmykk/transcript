import { InstitutionModel } from '../models/institution-model';
import { getApi } from './api';

const url = 'v1/institutions';

export const applyService = {
  async getInstitutions(): Promise<Array<InstitutionModel>> {
    const res = await getApi(url);
    if (res.status === 200) {
      return (res.data as Array<any>).map((e) => new InstitutionModel(e));
    }
    return [];
  },
};

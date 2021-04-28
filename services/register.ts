import { RegistrationModel } from './../models/registration-model';
import { postApi } from './api';
import { authService } from './auth';

export const registerService = {
  async createUser(user: RegistrationModel): Promise<string | null> {
    const res = await postApi('v1/register', user);

    if (res.status === 200) {
        return await authService.login(user.email, user.password);
    } else {
        return res.data.message;
    }
  },
};

import { utilService } from './util';
import { postApi } from './api';

export const authService = {
  async login(username: string, password: string) {
    var res = await postApi('auth', { username, password });
    utilService.logger('auth', res);
  },
};

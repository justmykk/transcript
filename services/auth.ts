import { utilService } from './util';
import { postApi } from './api';

export const authService = {
  async login(username: string, password: string): Promise<string | null> {
    var res = await postApi('auth', { username, password });
    utilService.logger('auth', res);
    if (res.status === 200) {
      return null;
    } else {
      return res.data.message;
    }
  },
};

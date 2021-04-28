import { utilService } from './util';
import { postApi } from './api';
import { storeService } from './store';

export const authService = {
  async login(username: string, password: string): Promise<string | null> {
    var res = await postApi('v1/auth', { username, password });
    
    if (res.status === 200) {
      storeService.saveToken(res.data.authtoken);
      storeService.saveUser({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
      });
      return null;
    } else {
      return res.data.message;
    }
  },
};

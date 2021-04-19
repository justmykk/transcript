export const storeService = {
  saveToken(token: string) {
    localStorage.setItem('mmm', btoa(token));
  },

  getToken(): string {
    const val = localStorage.getItem('mmm');
    return val ? btoa(val) : '';
  },

  saveUser(data: { firstName: string; lastName: string }) {
    localStorage.setItem('uuu', btoa(JSON.stringify(data)));
  },

  getUser(): { firstName: string; lastName: string } {
    const val = localStorage.getItem('uuu');
    return val ? JSON.parse(atob(val)) : { firstName: '', lastName: '' };
  },

  clearStore() {
    localStorage.removeItem('mmm');
    localStorage.removeItem('uuu');
  },
};

export const storeService = {
    saveToken(token: string) {
        localStorage.setItem('mmm', btoa(token));
    },

    getToken(): string {
        const val = localStorage.getItem('mmm');
        return val ? btoa(val) : ''
    }
}
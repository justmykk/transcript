export const utilService = {
  logger(key: string, value: any) {
    console.log(key.toUpperCase(), JSON.stringify(value));
  },
};

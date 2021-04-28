import { ResetModel } from './../models/reset-model';
import { postApi, putApi } from "./api"

const url = 'v1/user/password/reset';

export const resetService = {
    async initReset(username: string): Promise<string> {
        const response = await postApi(url, {username})
        return response.status === 200 ? null : response.data.message;
    },

    async completeReset(data: ResetModel): Promise<string> {
        const response = await putApi(url, data);
        return response.status === 200 ? null : response.data.message;
    }
}
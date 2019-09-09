import axios from 'axios';
import { loginAPIDetails } from './data/data';

export const baseUrl = `https://apty-admin-staging.herokuapp.com`

export const createActivityApi = {
    url: (tenantId: number, applicationId: number) => `/lens/${tenantId}/${applicationId}/activity`,
    payload: (name: string, actions: object[]) => createActivityPayload(name, actions)
};

export const createActivityPayload = (activityName: string,  actionsData: object[]): object => {
    return {
        id: -1,
        name: activityName,
        actions: actionsData
    }
};


export const loginPostRequest = async (path: string, data: any): Promise<any> => {
    return axios.post(`${baseUrl}${path}`, data).then((resp) => resp.data)
};

export const token = async (): Promise<object> => {
    return await loginPostRequest(loginAPIDetails.url, {email: loginAPIDetails.userName, password: loginAPIDetails.password});
};

export const postActivity = async (path: string, data: any) => {
    await axios.post(`${baseUrl}${path}`, data, {
        headers: {
            Authorization : await token()
        }
    });
};

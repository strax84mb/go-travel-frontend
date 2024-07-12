import { doPost } from '../context/client/client';
import { SERVER_URL } from '../context/env';

const BASE_URL_V1 = SERVER_URL + '/v1';

export const login = async ({username, password}) => {
    try {
        const resp = await doPost({
            url: BASE_URL_V1 + '/login',
            body: {
                username: username,
                password: password,
            }
        });
        return Promise.resolve(resp);
    } catch(err) {
        if (err?.response?.status === 401) {
            return Promise.reject({
                error: 'UNAUTHORIZED',
                textCode: 'INCORRECT_USERNAME_PASSWORD'
            });
        } else {}
    }
};
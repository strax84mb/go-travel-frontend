import axios from 'axios';
import { getJwt } from '../storage';

const getDefaultHeaders = () => {
    const jwt = getJwt();
    const headers = {};
    if (jwt) {
        headers['Authorization'] = 'Bearer ' + jwt;
    }
    headers['Content-Type']='application/json'
    headers['Accept']='application/json'
    return headers;
};

export const sendRequest = ({action, url, headers, body}) => {
    const defaultHeaders = getDefaultHeaders();
    const allHeaders = headers ? 
    {
        ...headers,
        ...defaultHeaders,
    } : 
    {
        ...defaultHeaders
    };
    if (body) {
        return action(url, body, {
            headers: allHeaders,
        });
    } else {
        return action(url, {
            headers: allHeaders,
        });
    }
};

export const doGet = ({url, headers}) => {
    return sendRequest({
        action: axios.get,
        url: url,
        headers: headers,
    });
};

export const doPut = ({url, headers, body}) => {
    return sendRequest({
        action: axios.put,
        url: url,
        headers: headers,
        body: body,
    });
};

export const doPost = ({url, headers, body}) => {
    return sendRequest({
        action: axios.post,
        url: url,
        headers: headers,
        body: body,
    });
};

export const doDelete = ({url, headers}) => {
    return sendRequest({
        action: axios.delete,
        url: url,
        headers: headers,
    });
};

export const doPatch = ({url, headers, body}) => {
    return sendRequest({
        action: axios.patch,
        url: url,
        headers: headers,
    });
};

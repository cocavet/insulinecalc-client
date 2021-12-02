import axios from 'axios';

export const requestSE = () => {
    return {
        get: service('get'),
        post: service('post'),
        delete: service('delete'),
        patch: service('patch'),
    };
};

function getHeader() {
    return {
        'Content-Type': 'application/json'
    };
}

function service(method) {
    return (url, data = null, headers = getHeader()) => {
        return axios({
            method,
            url,
            data,
            headers,
        });
    };
}
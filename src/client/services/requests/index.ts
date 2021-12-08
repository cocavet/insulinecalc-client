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
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 72a9e2f8af8e4060bc84861b5bd063ed5d8ba5bccf42a12d32f6f33aacbe170c'
    };
}

function service(method) {
    return ({ url, data = null, headers = getHeader() }) => {
        return axios({
            method,
            url,
            data,
            headers,
        });
    };
}
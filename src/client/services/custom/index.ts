const { AWS_SERVER, HEADERS } = require('../../constants');
const BASE_URL = AWS_SERVER;
const headers = HEADERS;

export async function getKmsDevices({ userId, data }) {
    const response = await fetch(BASE_URL + '/get/kms/' + userId, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

export async function getWarningsDevices({ userId, data }) {
    const response = await fetch(BASE_URL + '/get/warnings/' + userId, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

export async function getJsonUserDevices({ userId }) {
    const response = await fetch(BASE_URL + `/get/json/userDevices/${userId}`, {
        method: 'GET',
        headers
    });

    return response.json();
};

export async function updateUserNameJsonDevices({ userName, idPost, userId }) {
    const response = await fetch(BASE_URL + `/update/json/userNameDevices/${userId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ userName, idPost })
    });

    return response.json();
};


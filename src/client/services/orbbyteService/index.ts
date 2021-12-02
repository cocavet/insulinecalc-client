const { AWS_SERVER, HEADERS } = require('../../constants');
const BASE_URL = AWS_SERVER;
const headers = HEADERS;

async function getAllGeofencing({ pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getAllGeofencing/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getDashboard({ data, pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getDashboard/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function getDeviceById({ postId, pagination }) {
    const response = await fetch(BASE_URL + '/getDeviceById/' + postId + '/' + pagination, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getDeviceByMac({ data, pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getDeviceByMac/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function getKm({ pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getKm/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getPosition({ pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getPosition/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getUser({ postId, pagination }) {
    const response = await fetch(BASE_URL + '/getUser/' + postId + '/' + pagination, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getUserDevices({ pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getUserDevices/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function getWarnings({ pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/getWarnings/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'GET',
        headers
    });

    return response.json();
};

async function userByEmailAndPassword({ data, pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/userByEmailAndPassword/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function verifyExistsUser({ data, pagination, relatedPost, createdAt }) {
    const response = await fetch(BASE_URL + '/verifyExistsUser/' + pagination + '/' + relatedPost + '/' + createdAt, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setKm({ data }) {
    const response = await fetch(BASE_URL + '/setKm', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setDashboard({ data }) {
    const response = await fetch(BASE_URL + '/setDashboard', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setDevice({ data }) {
    const response = await fetch(BASE_URL + '/setDevice', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setGeofencing({ data }) {
    const response = await fetch(BASE_URL + '/setGeofencing', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setPosition({ data }) {
    const response = await fetch(BASE_URL + '/setPosition', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setUser({ data }) {
    const response = await fetch(BASE_URL + '/setUser', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function setWarning({ data }) {
    const response = await fetch(BASE_URL + '/setWarning', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateDashboard({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateDashboard/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateDeviceName({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateDeviceName/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateGeofencing({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateGeofencing/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateGeofencingName({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateGeofencingName/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateImage({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateImage/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateKm({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateKm/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function updateProfile({ data, postId }) {
    const response = await fetch(BASE_URL + '/updateProfile/' + postId, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
    });

    return response.json();
};

async function deleteDevice({ postId }) {
    const response = await fetch(BASE_URL + '/deleteDevice/' + postId, {
        method: 'DELETE',
        headers
    });

    return response.json();
};

async function deleteGeofencing({ postId }) {
    const response = await fetch(BASE_URL + '/deleteGeofencing/' + postId, {
        method: 'DELETE',
        headers
    });

    return response.json();
};


export {
    getAllGeofencing,
    getDashboard,
    getDeviceById,
    getDeviceByMac,
    getKm,
    getPosition,
    getUser,
    getUserDevices,
    getWarnings,
    userByEmailAndPassword,
    verifyExistsUser,
    setKm,
    setDashboard,
    setDevice,
    setGeofencing,
    setPosition,
    setUser,
    setWarning,
    updateDashboard,
    updateDeviceName,
    updateGeofencing,
    updateGeofencingName,
    updateImage,
    updateKm,
    updateProfile,
    deleteDevice,
    deleteGeofencing
};


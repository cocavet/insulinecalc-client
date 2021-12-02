import { getDeviceById } from '../../../../../services/orbbyteService';

export const functions = {
    mountDevice,
    backToMap,
    changeNav,
    updateDeviceName
}

async function mountDevice() {
    const device = await getDeviceById({
        postId: this.deviceId,
        pagination: 1
    });

    this.device = device && device.data && device.data[0];
}

function backToMap() {
    this.$emit('backToMap');
}

function changeNav(nav) {
    this.nav = nav;
}

function updateDeviceName(device, name) {
    this.$emit('updateDeviceName', device, name);
}
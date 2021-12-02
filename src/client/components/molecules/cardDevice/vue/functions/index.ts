import { getBateryColor, getBateryIcon } from "../../../../../utils/common";

getBateryColor
export const functions = {
    goToDevice,
    getBateryIcon,
    getBateryColor,
    showDeviceOnMap
}

function goToDevice(deviceId) {
    this.$emit('goToDevice', deviceId);
}

function showDeviceOnMap(deviceId) {
    this.$emit('showDeviceOnMap', deviceId);
}


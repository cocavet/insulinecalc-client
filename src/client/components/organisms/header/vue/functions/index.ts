import { getURL, goTo } from "../../../../../utils/common";

export const functions = {
    getTitle,
    getURL,
    clickContextual,
    toggleMenu
}

function getTitle() {
    const getUrl = getURL();

    switch (getUrl) {
        case '/device':
            return 'Dispositivos'
        case '/geoFencing':
            return 'Geofencing'
        case '/settings':
            return 'Configuración'
        case '/dashboard':
        default:
            return 'Dashboard'
    }
}

function clickContextual(val) {
    switch (val) {
        case 'settings':
            goTo('/settings');
        default:
            return 'Dashboard'
    }
}

function toggleMenu() {
    this.displayMenu = !this.displayMenu
}
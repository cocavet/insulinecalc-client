import { getPosition } from '../../../../../../../services/orbbyteService';
import { addUserGeofencings } from '../../../../../../../utils/common';
import { formatDate, sortDatesASC } from "../../../../../../../utils/dates";
import { createMap, createMarkerMap, createSourceMap, goToMap, removeSourceMap } from "../../../../../../../utils/maps";

const ID_ROUTE = 'route';

let MAP = null;
let markers = {
    startMarker: null,
    endMarker: null
}

export const functions = {
    initMap,
    getPositions,
    mapPositions,
    addRoutesOnMap,
    toogleCalendar,
    changeDate,
    removeLayer,
    formatButtonDate,
    addStartEndFinishMarkers,
    removeMarkers,
    addUserGeofencings
}

function initMap() {
    MAP = createMap('mapRoutes');
    this.addUserGeofencings({ map: MAP });
}

async function getPositions(rangeDate = this.changeDate()) {
    this.loading = true;
    this.positions = await getPosition({
        pagination: 0,
        relatedPost: this.deviceId,
        createdAt: rangeDate
    });

    this.addRoutesOnMap();
    this.loading = false;
}

function mapPositions() {
    if (this.positions && this.positions.data && this.positions.data.length > 0) {
        return sortDatesASC(this.positions.data).map(el => {
            return [Number(el.longitude), Number(el.latitude)];
        });
    }

    return null;
}

function changeDate(date = new Date()) {
    return `${formatDate(date, 'yyyy-MM-dd 00:01')}, ${formatDate(date, 'yyyy-MM-dd 23:59')}`
}

function addRoutesOnMap() {
    const positions = this.mapPositions();
    this.removeMarkers();

    if (positions && positions.length > 0) {
        this.existsLayer = true;
        this.noDataVisibility = false;

        positions.forEach((pos) => {
            createMarkerMap({ data: { longitude: pos[0], latitude: pos[1] }, map: MAP, color: '#ff6161', userInfo: false, classCss: 'pointMarker' });
        });
        createSourceMap({ map: MAP, positions, id: ID_ROUTE })


        this.addStartEndFinishMarkers({ start: positions[0], end: positions[positions.length - 1] })

        goToMap({ map: MAP, longitude: positions[0][0], latitude: positions[0][1] });
    } else {
        this.noDataVisibility = true;
    }
}

function removeLayer() {
    if (this.existsLayer) {
        removeSourceMap({ map: MAP, id: ID_ROUTE });
    }

    this.existsLayer = false;
}

function toogleCalendar() {
    this.showCalendar = !this.showCalendar;
}

function formatButtonDate(date = new Date()) {
    this.buttonDate = formatDate(date);
}

function addStartEndFinishMarkers({ start, end }) {
    console.log(start);
    markers.startMarker = createMarkerMap({
        data: { longitude: start[0], latitude: start[1] }, map: MAP, color: '#32cc77', userInfo: false, classCss: 'startMarker'
    });
    markers.endMarker = createMarkerMap({
        data: { longitude: end[0], latitude: end[1] }, map: MAP, color: '#ff6161', userInfo: false, classCss: 'endMarker'
    });
}

function removeMarkers() {
    markers.startMarker ? markers.startMarker.remove() : null;
    markers.endMarker ? markers.endMarker.remove() : null;
}
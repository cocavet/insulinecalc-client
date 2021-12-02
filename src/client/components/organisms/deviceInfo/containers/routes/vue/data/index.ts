import { noDataRoutes } from "../../../../../../../constants";

export const data = {
    positions: [],
    showCalendar: false,
    date: new Date(),
    existsLayer: false,
    buttonDate: new Date(),
    loading: true,
    markersRoute: [],
    noDataRoutes,
    noDataVisibility: false
}

export const props = ['deviceId'];
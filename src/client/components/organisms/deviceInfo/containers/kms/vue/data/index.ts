import { noDataDistance } from "../../../../../../../constants";
import { substractDays } from "../../../../../../../utils/dates";

export const data = {
    kms: null,
    showCalendar: false,
    date: {
        start: new Date(substractDays(new Date(), 7)),
        end: new Date()
    },
    buttonDate: new Date(),
    loading: true,
    noDataDistance,
    noDataVisibility: false
}

export const props = ['deviceId'];
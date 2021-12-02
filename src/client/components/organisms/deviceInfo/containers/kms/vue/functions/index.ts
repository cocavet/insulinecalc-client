import { getKm } from '../../../../../../../services/orbbyteService';
import { formatDate } from '../../../../../../../utils/dates';
import { formatCustomData } from '../../../../../../../utils/formaterCharts';

export const functions = {
    getDeviceKms,
    toogleCalendar,
    formatButtonDate,
    changeDate
}

async function getDeviceKms(date) {
    const kms = await getKm({ pagination: 1, relatedPost: this.deviceId, createdAt: changeDate(date) })

    if (kms && kms.data.length > 0) {
        this.kms = formatCustomData(kms.data, 'kmXDay', this.date);
        this.noDataVisibility = false;
    } else {
        this.noDataVisibility = true;
    }

    this.loading = false;
}

function changeDate(date) {
    return `${formatDate(new Date(date.start), 'yyyy-MM-dd 00:01')}, ${formatDate(new Date(date.end), 'yyyy-MM-dd 23:59')}`
}

function toogleCalendar() {
    this.showCalendar = !this.showCalendar;
}

function formatButtonDate(date) {
    this.buttonDate = `${formatDate(new Date(date.start))} - ${formatDate(new Date(date.end))}`
}

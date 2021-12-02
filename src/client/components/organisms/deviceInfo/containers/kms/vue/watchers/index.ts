export const watchers = {
    date
}

function date(val) {
    this.loading = true;
    this.showCalendar = false;
    this.formatButtonDate(val);
    this.getDeviceKms(val);
}
export const watchers = {
    date
}

function date(val) {
    this.showCalendar = false;
    this.removeLayer();
    const date = this.changeDate(val);
    this.getPositions(date);
    this.formatButtonDate(val);
}
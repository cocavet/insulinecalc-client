export async function mounted() {
    this.formatButtonDate(this.date);
    this.getDeviceKms(this.date);
    this.loading = false;
}
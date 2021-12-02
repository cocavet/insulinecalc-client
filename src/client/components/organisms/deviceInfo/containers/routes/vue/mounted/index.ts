export async function mounted() {
    this.existsLayer = false;
    this.date = new Date();
    this.initMap();
    this.formatButtonDate();
    this.loading = false;
}
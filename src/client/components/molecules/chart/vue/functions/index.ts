import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

export const functions = {
    loadChart
}

function loadChart() {
    console.log(this.dataChart);

    new Chart(`#${this.ident}`, {
        data: this.dataChart,
        type: 'bar',
        height: this.height ? this.height : 300,
        colors: [this.color],
        lineOptions: {
            regionFill: 1
        },
        axisOptions: {
            xAxisMode: 'tick' // default: 'span'
        },
    })

}
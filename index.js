const myChart = echarts.init(document.getElementById('main'));

const option = {
    color: ['4C4C4C', '3D4C42'],
    title: {
        text: "Star Wars"
    },
    tooltip: {},
    legend: {
        data:['Nombre de planètes','Nombre de Vaisseaux'],
    },
    xAxis: {
        data:
        ["EPISODE I","EPISODE II","EPISODE III","EPISODE IV","EPISODE V","EPISODE VI"]
        },
    yAxis: {},
    series: [
        {
        name: 'Nombre de planètes',
        type: 'bar',
        data: [3, 5, 13, 3, 4, 5]

        },
        {
        name: 'Nombre de Vaisseaux',
        type: 'bar',
        data: [5, 9, 12, 8, 9, 12]
        }

]
};

myChart.setOption(option);
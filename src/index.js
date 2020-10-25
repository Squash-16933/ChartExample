// Test import of a JavaScript function
import {example} from './js/example'
var Chart = require('chart.js');

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()



const app = document.querySelector('#root');
app.append(logo, heading);


var data = [];


var exampleChart = document.getElementById('exampleChart');
var myChart = new Chart(exampleChart, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Pressure',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
update();

  function update() {
    addData(myChart, new Date().toLocaleString(), Math.random()*500);
    while(myChart.data.labels.length >= 9)
                myChart.data.labels.shift();
    myChart.data.datasets.forEach((dataset) => {
        if(dataset.data.length > 10){
            dataset.data.shift();
            
        }
    });
    setTimeout(update, 100);
  }

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

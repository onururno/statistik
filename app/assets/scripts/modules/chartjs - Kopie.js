import Chart from 'chart.js'
const chartjs = () => {
var ctx = document.getElementById('myChart');
const pageLoads = document.getElementById("pageloads");
const uniqueUser = document.getElementById("unique-users");
const Abos = document.getElementById("abos");
const Obdens = document.getElementById("obdens");


let pageData = [];
let userData = [];
let aboData = [];
let obdenData = [];

const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September",
    "October",
    "November",
    "December"
]

// get random Value for Data per Month in Array
function randomValue(){
    for(var i = 0; i <= months.length; i++){
        let randomNumber = Math.floor(Math.random() * 50);
            pageData[i] = randomNumber;
        randomNumber = Math.floor(Math.random() * 50);
         userData[i] = randomNumber;
        randomNumber = Math.floor(Math.random() * 50);
         aboData[i] = randomNumber;
        randomNumber = Math.floor(Math.random() * 50);
         obdenData[i] = randomNumber;
    };
}
randomValue();

// sum up all values from data array
function sumUp(){
    let sumPage = pageData.reduce(function(a, b){
        return a + b;
    },0);
    let sumUser = userData.reduce(function(a, b){
        return a + b;
    },0);
    let sumAbo = aboData.reduce(function(a, b){
        return a + b;
    },0);
    let sumObden = obdenData.reduce(function(a, b){
        return a + b;
    },0);

    showSumNumber(sumPage, sumUser, sumAbo, sumObden);
};

// Show Sum up Value on DOM
function showSumNumber(sumPage, sumUser, sumAbo, sumObden){
    pageLoads.innerHTML = sumPage;
    uniqueUser.innerHTML = sumUser;
    Abos.innerHTML = sumAbo;
    Obdens.innerHTML = sumObden;
}
sumUp();




// chart js Line Graphic

Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = "black";

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Pageloads',
            lineTension: 0,
            data: pageData,
            backgroundColor: [
                'rgb(255, 168, 142)',
            ],
            borderColor: [
                'rgb(255, 168, 142)',
            ],
            borderWidth: 5,
            fill: false,
        },{
            label: 'Unique Users',
            lineTension: 0,
            data: userData,
            backgroundColor: [
                'rgb(196, 183, 74)',
            ],
            borderColor: [
                'rgb(196, 183, 74)',
            ],
            borderWidth: 5,
            fill: false,
        },{
            label: 'Abos',
            lineTension: 0,
            data: aboData,
            backgroundColor: [
                'rgb(124, 255, 124)',
            ],
            borderColor: [
                'rgb(124, 255, 124)',
            ],
            borderWidth: 5,
            fill: false,
        },{
            label: 'Obdens',
            lineTension: 0,
            data: obdenData,
            backgroundColor: [
                'rgb(125, 201, 252)',
            ],
            borderColor: [
                'rgb(125, 201, 252)',
            ],
            borderWidth: 5,
            fill: false,
        }]
    },

});
    }
    export default chartjs
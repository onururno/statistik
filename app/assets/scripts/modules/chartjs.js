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
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
]


const pageArr  = [];

const ElDays = jsonfile.overall.days;

for (let key in ElDays) {
   let pageEl = (ElDays[key].v);
   console.log(pageEl);

   for(var i = 0; i < months.length; i++){
    pageArr[i] = pageEl;
   }
   
}
console.log(pageArr);



// get Data from Object and present it on char
function randomValue(){
    for(var i = 0; i < months.length; i++){
        let pageValue =  jsonfile.overall.days[20210128].v;
        pageData[i] = pageValue;
        let userValue =  jsonfile.overall.days[20210128].u;
        userData[i] = userValue;
        let aboValue =  jsonfile.overall.days[20210128].a;
        aboData[i] = aboValue;
        let obdenValue =  jsonfile.overall.days[20210128].o;
        obdenData[i] = obdenValue;
    };
}
randomValue();


// Show Sum up Value on DOM
function showSumNumber(){
    pageLoads.innerHTML = jsonfile.overall.overall.v;
    uniqueUser.innerHTML = jsonfile.overall.overall.u;
    Abos.innerHTML = jsonfile.overall.overall.a;
    Obdens.innerHTML = jsonfile.overall.overall.o;
}
showSumNumber();




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
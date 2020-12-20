//Level 1 assignment
// from data.js
// var tableData = data;

// // Enter data from table into html table
// var tbody=d3.select("tbody");
// console.log(tableData);

// tableData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key,value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("change",runEnter);



function runEnter() {

    d3.event.preventDefault();
    
    var sightingDate = form.property("value");
    //var sightingDate = d3.select('#datetime').node().value;
    console.log(sightingDate);

    
    function selectDate(sighting) {
        return sighting.datetime === sightingDate;
    };

    var tabledata1 = data
    var filteredData = tabledata1.filter(selectDate);

    var tbody=d3.select("tbody");
    
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};


  


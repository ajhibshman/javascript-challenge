//Level 1 assignment
// from data.js
var tableData = data;

// Enter data from table into html table
var tbody=d3.select("tbody");
console.log(tableData);

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Print the value to the console
  console.log(inputValue);

  //clear table
  //delete tbody tr's
  //d3.selectAll("tbody").remove("tr")
  var tbody=d3.select("tbody");
  tbody.html("");


  //Filter for datetime
  function selectDate(sighting) {
    return sighting.datetime === inputValue;
  };

  var tabledata1 = data

  if (inputValue) {
    var filteredData = tabledata1.filter(selectDate);
    }
    else {      
    var filteredData = tabledata1
    };
  

  var tbody=d3.select("tbody");

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

}

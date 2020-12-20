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

// Select the forms
var form_date = d3.select("#form_date");
var form_state= d3.select ("#form_state");
var form_country= d3.select ("#form_country");
var form_shape= d3.select ("#form_shape");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form_date.on("submit",runEnter);
form_state.on("submit",runEnter);
form_country.on("submit",runEnter);
form_shape.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  //date
  var inputElement = d3.select("#example-form-input");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  //state
  var inputElement_state = d3.select("#state_arr");
  var inputValue_state = inputElement_state.property("value");
  console.log(inputValue_state);
  //country
  var inputElement_country = d3.select("#country_arr");
  var inputValue_country = inputElement_country.property("value");
  console.log(inputValue_country);
  //shape
  var inputElement_shape = d3.select("#shape_arr");
  var inputValue_shape = inputElement_shape.property("value");
  console.log(inputValue_shape);

 
  //clear table
  //delete tbody tr's
  //d3.selectAll("tbody").remove("tr")
  var tbody=d3.select("tbody");
  tbody.html("");


  //function for datetime
  function selectDate(sighting) {
    return sighting.datetime === inputValue;
  };

  //function for state
  function selectState(sighting1) {
    return sighting1.state === inputValue_state;
  };

  //functionr for country
  function selectCountry(sighting2) {
    return sighting2.country === inputValue_country;
  };

  //function for shape
  function selectShape(sighting3) {
    return sighting3.shape === inputValue_shape;
  };

  var tabledata1 = data

  //filter date
  if (inputValue) {
    var filteredData = tabledata1.filter(selectDate);
    }
    else {      
    var filteredData = tabledata1
    };

  //filter state
  if (inputValue_state) {
    var filteredData1 = filteredData.filter(selectState);
    }
    else {      
    var filteredData1 = filteredData
    };

  // filter country



  // filter shape








  
  // repopulate table
  var tbody=d3.select("tbody");

  filteredData1.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

};

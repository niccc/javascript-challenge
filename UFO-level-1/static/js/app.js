// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state","country", "shape", "durationMinutes", "comments"]

//function to add rows to table and populate them with data
var addRows = (data) => {
  //add rows
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    columns.forEach((column) => {
      var cell = row.append("td");
      //write data
      cell.text(sighting[column]);
    });
  });
};

//run function on dataset
addRows(tableData);

//variables for filter button and input field
var filterButt = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

//function to run upon clicking filter button
var runEnter = () => {
  d3.event.preventDefault();
  //clear table
  d3.selectAll("tr").remove();
  //grab filter date
  var filterDate = inputDate.property("value");
  //filter data set based on input date
  var filterSightings = data.filter(data => data.datetime == filterDate);
  //run runction to add rows and write filtered data
  addRows(filterSightings);
  
}

//run function on button click
filterButt.on('click', runEnter);

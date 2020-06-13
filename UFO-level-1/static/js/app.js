// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state","country", "shape", "durationMinutes", "comments"]

var addRows = (data) => {
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    columns.forEach((column) => {
      var cell = row.append("td");
      cell.text(sighting[column]);
    });
  });
};

addRows(tableData);

var filterButt = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

var runEnter = () => {
  d3.event.preventDefault();
  d3.selectAll("tr").remove();
  var filterDate = inputDate.property("value");
  var filterSightings = data.filter(data => data.datetime == filterDate);
  addRows(filterSightings);
  console.log(filterDate);
}

filterButt.on('click', runEnter);

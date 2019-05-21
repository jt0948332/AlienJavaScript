// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Change the table to update to striped. Two methods below
//var table = d3.select("table");
//table.attr("class", "table table-striped");
//Change the table to update to striped
var tablestriped = d3.select("#ufo-table", "table table-striped");
tablestriped.attr("class", "table table-striped");
// ADD Data -- Why does this function work, but the below function not??

d3.selectAll("#filter-btn").on("click", function () {

    //Get the input from the form filter
    var DateElement = d3.select('#datetime');
    var dateValue = inputElement.property("value");
console.log(dateValue);

    tableData.forEach(function (row) {
        var new_row = tbody.append("tr");
        new_row.append("td").text(row.datetime);
        new_row.append("td").text(row.city);
        new_row.append("td").text(row.state);
        new_row.append("td").text(row.country);
        new_row.append("td").text(row.shape);
        new_row.append("td").text(row.durationMinutes);
        new_row.append("td").text(row.comments);
    });
//Prevent Refresh on button click. For some reason this had to be witin the loop. unsure why that is
d3.event.preventDefault();
});
//Dynamic table create
//iterate through each to append all rows
// tableData.forEach(([city.hv,fgh]) => {
//     var row = tbody.append("tr");
//     //append the Data
//     row.append("td").text(city);
//     row.append("td").text(city);
//     row.append("td").text(city);
//     row.append("td").text(city);
//     row.append("td").text(city);
//     row.append("td").text(city);
//     row.append("td").text(city);



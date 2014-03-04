/**
 * @author
 */

console.log("JavaScript Loaded");

//UNEMPDATA is the local name of the JSON file I just loaded

function dataLoaded(UNEMPDATA) {

	console.log(UNEMPDATA);
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the first parameter is the datatype in that column
	//The second parameter is the name of the column
	
	gDataTable.addColumn('string', UNEMPDATA.columns[0]);
	gDataTable.addColumn('number', UNEMPDATA.columns[1]);
	
	gDataTable.addRows(UNEMPDATA.rows)


	
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));

	var chartOptions = {
          title: "Unemployment Trends", 
        };

	myChart.draw(gDataTable, chartOptions);
	

}

function dataLoaded2(UNEMPDATA) {

	console.log(UNEMPDATA);
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the first parameter is the datatype in that column
	//The second parameter is the name of the column
	
	gDataTable.addColumn('string', UNEMPDATA.columns[0]);
	gDataTable.addColumn('number', UNEMPDATA.columns[1]);
	
	gDataTable.addRows(UNEMPDATA.rows)


	
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv2"));

	var chartOptions = {
          title: "Unemployment Trends", 
        };

	myChart.draw(gDataTable, chartOptions);
	

}

function googleLoaded() {

	console.log("Loaded Google Viz");

	//Inside of the get, we see the filename, the function name and the file type
	//Instead of loading data from a static JSON file, I will load it from a Google Fusion Table
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1sqxKGNmK_aKGBk1hGpO8xyfGXxRnOoWUCCux3OsX+WHERE+DATE<'1979-12-01'&key=AIzaSyCzc9XKi4CG-PcqBZfHBmc3fKmuq3JH9vU", dataLoaded2, "json");

	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1sqxKGNmK_aKGBk1hGpO8xyfGXxRnOoWUCCux3OsX+WHERE+DATE>'1979-12-01'&key=AIzaSyCzc9XKi4CG-PcqBZfHBmc3fKmuq3JH9vU", dataLoaded, "json");

   

}

function pageLoaded() {

	console.log("Document is ready");

	//load the Google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "googleLoaded"
	});

}


$(document).ready(pageLoaded);


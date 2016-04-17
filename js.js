$.ajax({
	'url': 'http://apis.is/concerts',
	'type': 'GET',
	'dataType': 'json',
	'success': function(response) {
		renderData(response);
		showImages();
	}
});

function renderData(datas) {
	var data = datas['results']
	console.log(data.length);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
		var event = data[i];
		var date = changeDate(event.dateOfShow);
		var table = $("#mainTable");
		var tableRow = "<tr data-toggle=\"tooltip\" title=\"<img src='" + event.imageSource + "' />\" class=\"contentRow\"><td>" + (i + 1) + "</td><td>" + event.eventDateName + "</td><td>" + event.eventHallName + "</td><td>" + date + "</td><td class=\"image\"><img src=\"" + event.imageSource + "\"></td></tr>";
		table.append(tableRow);
	}
}

function changeDate(date) {
	var d = new Date(date);
	var day = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
	var time = date.substring(11, date.length -3);
	return (day + " - " + time);
}

function showImages() {
	$(".image").hide();
	$('.contentRow[data-toggle="tooltip"]').tooltip({
		html: true
	});
}

function sort_name() {
	var table = $('#mytable');
	var tbody = $('#table1');

	tbody.find('tr').sort(function(a, b) {
		if($('#name_order').val() == 'asc') {
			return $('td:eq(0)', a).text().localeCompare($('td:eq(0)', b).text());
		} else {
			return $('td:eq(0)', b).text().localeCompare($('td:eq(0)', a).text());
		}
	}).appendTo(tbody);

	var sort_order = $('#name_order').val();

	if(sort_order == 'asc') {
		$('#name_order').val('desc');
	} if(sort_order == 'desc') {
		$('#name_order').val('asc');
	}

}

function sort_age() {
	var table = $('#mytable');
	var tbody = $('#table1');

	tbody.find('tr').sort(function(a, b) {
		if($('#age_order').val() == 'asc') {
			return $('td:nth(1)', a).text().localeCompare($('td:nth(1)', b).text());
		} else {
			return $('td:nth(1)', b).text().localeCompare($('td:nth(1)', a).text());
		}
	}).appendTo(tbody);

	var sort_order = $('#age_order').val();

	if(sort_order == 'asc') {
		$('#age_order').val('desc');
	} if(sort_order == 'desc') {
		$('#age_order').val('asc');
	}

}

function sort_institute() {
	var table = $('#mytable');
	var tbody = $('#table1');

	tbody.find('tr').sort(function(a, b) {
		if($('#institute_order').val() == 'asc') {
			return $('td:nth(2)', a).text().localeCompare($('td:nth(2)', b).text());
		} else {
			return $('td:nth(2)', b).text().localeCompare($('td:nth(2)', a).text());
		}
	}).appendTo(tbody);

	var sort_order = $('#institute_order').val();

	if(sort_order == 'asc') {
		$('#institute_order').val('desc');
	} if(sort_order == 'desc') {
		$('#institute_order').val('asc');
	}

}

function sort_area() {
	var table = $('#mytable');
	var tbody = $('#table1');

	tbody.find('tr').sort(function(a, b) {
		if($('#area_order').val() == 'asc') {
			return $('td:last', a).text().localeCompare($('td:last', b).text());
		} else {
			return $('td:last', b).text().localeCompare($('td:last', a).text());
		}
	}).appendTo(tbody);

	var sort_order = $('#area_order').val();

	if(sort_order == 'asc') {
		$('#area_order').val('desc');
	} if(sort_order == 'desc') {
		$('#area_order').val('asc');
	}

}
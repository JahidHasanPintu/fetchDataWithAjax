
var ourDiv = document.getElementById('results');

const loadPeople = () =>{
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
}
catch (e) {
    try {
    request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (e) {}
}
}

function onLoadListener() {
var data = JSON.parse(this.responseText);
renderHtml(data);
// showPeople(data);
}

function onErrorListener(err) {
console.log('XHR Error :', err);
}

request.onload = onLoadListener;
request.onerror = onErrorListener;
// request.open('get', 'https://jsonplaceholder.typicode.com/users', true);
request.open('GET', 'president.json', true);
request.send();
}

function renderHtml(data){
	var htmlString = '';
	var death_year, left_office;

	htmlString += '<table><tr><th>No</th> <th>Name</th> <th>Birth</th> <th>Death</th> <th>Took Office</th> <th>Left Office</th> <th>Party</th> </tr>';

	for (i=0;i< data.length;i++){
		if(data[i].death_year == null){
			death_year = ' - ';
		}
		else {
			death_year = data[i].death_year;
		}

		if(data[i].left_office == null){
			left_office = ' - ';
		}
		else {
			left_office = data[i].left_office;
		}
		htmlString += '<tr>';
		htmlString += '<td>'+ data[i].number + '</td>';
		htmlString += '<td>'+ data[i].president + '</td>';
		htmlString += '<td>'+ data[i].birth_year + '</td>';
		htmlString += '<td>'+ death_year + '</td>';
		htmlString += '<td>'+ data[i].took_office + '</td>';
		htmlString += '<td>'+ left_office + '</td>';
		htmlString += '<td>'+ data[i].party + '</td>';
		htmlString += '</tr>';	
	}

	htmlString += '</table>';
	ourDiv.insertAdjacentHTML('beforebegin', htmlString);
}
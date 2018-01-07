var setInterval = setInterval(search);
///var setInterval =  is removable

function search() {

var value = document.getElementById('inputValue').value;
var x = document.getElementById('inputValue').value = value.toLowerCase();

var className = document.getElementsByClassName(value);
var maps = document.getElementsByClassName('maps');

var mapLength =  maps.length;
var classLength = className.length;

	for (i = 0; i < mapLength; i++) {
		maps[i].style.animation = '';
    }

	for (i = 0; i < classLength; i++) {
        	className[i].style.animation = 'blink .5s infinite linear alternate';
    }

}

function showTown() {
	document.getElementById('dungeon-window').style.display = 'none';
	document.getElementById('town-window').style.display = 'block';
}

function showDungeon() {
	document.getElementById('town-window').style.display = 'none';
	document.getElementById('dungeon-window').style.display = 'block';
}

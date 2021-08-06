function favColor(evt) {
	evt.preventDefault();
	window.alert("My favorite Color is something between Cyan and Teal")

}
function favPlace(evt) {
	evt.preventDefault();
	window.alert("My favorite Place is Zion National Park")

}
function favRitual(evt) {
	evt.preventDefault();
	window.alert("My favorite Ritual is ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn ")

}
let color1 = document.querySelector('#color')
color1.addEventListener('click',favColor)
let place1 = document.querySelector('#place')
place1.addEventListener('click',favPlace)
let ftagen = document.querySelector('#ritual')
ftagen.addEventListener('click',favRitual)
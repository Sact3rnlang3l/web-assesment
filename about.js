console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Submission accepted by the Cat Council")
}
function secretCat(evt) {
	evt.preventDefault()
	window.alert("This may be annoying, but you are looking mighty fine today")
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

let mouseOver = document.querySelector('#cat1')
mouseOver.addEventListener('mouseover', secretCat)
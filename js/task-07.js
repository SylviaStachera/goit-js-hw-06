const fontSizeControle = document.querySelector('#font-size-control')
const textChange = document.querySelector('#text')

fontSizeControle.setAttribute('value', '16')

fontSizeControle.addEventListener('input', event => {
	//Bieżąca wartość input
	//console.log(event.currentTarget.value);
	let currentValue = event.currentTarget.value
	textChange.style.fontSize = currentValue + 'px'
})

const textInput = document.querySelector('#validation-input')
//Dostęp do atrybutu data-length
//console.log(textInput.dataset.length);

textInput.addEventListener('blur', event => {
	//Długość wpisanego tekstu
	//console.log(event.currentTarget.value.length);

	if (event.currentTarget.value.length < textInput.dataset.length) {
		textInput.classList.remove('valid')
		textInput.classList.add('invalid')
	}

	if (event.currentTarget.value.length >= textInput.dataset.length) {
		textInput.classList.remove('invalid')
		textInput.classList.add('valid')
	}
})

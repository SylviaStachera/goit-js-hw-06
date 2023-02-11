const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
let arr = ''

nameInput.addEventListener('input', event => {
	nameOutput.textContent = event.currentTarget.value
})

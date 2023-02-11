const buttonDown = document.querySelector('#counter button[data-action="decrement"]')
const buttonUp = document.querySelector('#counter button[data-action="increment"]')
const displayValue = document.querySelector('#value')

let counterValue = 0

buttonDown.addEventListener('click', () => {
	counterValue -= 1
	displayValue.textContent = counterValue
})
buttonUp.addEventListener('click', () => {
	counterValue += 1
	displayValue.textContent = counterValue
})

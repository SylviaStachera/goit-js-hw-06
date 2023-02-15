const inputNumber = document.querySelector('#controls input[type="number"]')
const buttonCreate = document.querySelector('#controls button[data-create]')
const buttonDestroy = document.querySelector('#controls button[data-destroy]')
const containerBoxes = document.querySelector('#boxes')

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

//Tworzenie boxów

const createBoxes = amount => {
	//tworzę pusty arry aby dodać tam divy, każdy z divów będzie wyglądał tak jak w pętli for w zależności od i
	const boxToAdd = []

	for (let i = 0; i < amount; i++) {
		const divItem = document.createElement('div')
		divItem.style.height = `${30 + 10 * i}px`
		divItem.style.width = `${30 + 10 * i}px`
		divItem.style.backgroundColor = getRandomHexColor()
		boxToAdd.push(divItem)
	}
	//console.log(boxToAdd);
	return boxToAdd
}

//Usuwanie boxów
const destroyBoxes = () => {
	containerBoxes.innerHTML = ''
	inputNumber.value = null
}

//Zadarzenia na przyciskach
buttonCreate.addEventListener('click', () => {
	let countBoxes = createBoxes(inputNumber.value)
	containerBoxes.append(...countBoxes)
	if (containerBoxes.children !== []) {
		containerBoxes.innerHTML = ''
		containerBoxes.append(...countBoxes)
	}
	//console.log(containerBoxes.children);
})

buttonDestroy.addEventListener('click', destroyBoxes)

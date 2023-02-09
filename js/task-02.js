const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']
const listIngredients = document.querySelector('#ingredients')

// 1. Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// 2. Doda nazwę elementu jako jego zawartość tekstową.
// 3. Doda do elementu klasę item.
// 4. Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.

;[...ingredients].forEach(item => {
	const itemIngedient = document.createElement('li')
	itemIngedient.textContent = item
	listIngredients.append(itemIngedient)
	itemIngedient.classList.add('item')
})

//Sprawdzenie
//console.log(listIngredients);

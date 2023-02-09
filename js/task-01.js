//Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

const categoryList = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoryList.length}`)

//Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).

categoryList.forEach(el => {
	console.log(`Category: ${el.firstElementChild.textContent}`)
	console.log(`Elements: ${el.lastElementChild.children.length}`)
})

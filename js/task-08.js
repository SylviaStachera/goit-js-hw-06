// 1.Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// 2.Podczas przesyłania formularza strona nie powinna się restartować.
// 3.Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// 4.Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// 5.Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.

const loginForm = document.querySelector('.login-form')
// const inputEmail = document.querySelector('input[type="email"]')
// const inputPassword = document.querySelector('input[type="password"]')

//Ad.1
loginForm.addEventListener('submit', eventSubmit)

//Funkcja event submit

function eventSubmit(event) {
	//Ad.2 Brak restartu
	event.preventDefault()

	//Ad4.Utworzenie obiektu
	const {
		elements: { email, password },
	} = event.currentTarget
	//console.log(email.value)
	//console.log(password.value)

	//Ad3. Alert - brak danych
	if (email.value === '' || password.value === '') {
		return alert('Please fill in all the fields!')
	}

	//Ad5.
	//Informacja w wierszu poleceń
	console.log(`E-mail: ${email.value}, Password: ${password.vaue}`)
	//Rsest pul formularza
	event.currentTarget.reset()
}

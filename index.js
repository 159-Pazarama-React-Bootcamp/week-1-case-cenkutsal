//DUMMY DATA
// const correctCreditCard1 = "9999777788880000"
// const correctCreditCard2 = "6666666666661666"
// const incorrectCreditCard1 = "aaaabbbbccccdddd "
// const incorrectCreditCard2 = "4444444444444444"
// const incorrectCreditCard3 = "1111111111111110"
// const incorrectCreditCard4 = "6666666666666661"
// const cardWithHyphens1 = "9999-7777-8888-0000"
// const cardWithHyphens2 = "6666-6666-6666-1666"

//Luhn Algorithm
function checkLuhn(input) {
	var sum = 0
	var numdigits = input.length
	var parity = numdigits % 2
	for (var i = 0; i < numdigits; i++) {
		var digit = parseInt(input.charAt(i))
		if (i % 2 == parity) digit *= 2
		if (digit > 9) digit -= 9
		sum += digit
	}
	return sum % 10 == 0
}

//Function that sums all the digits of the string
sumStr = str => {
	return str.split("").reduce(function (total, num) {
		return parseInt(total) + parseInt(num)
	})
}

//check if all the numbers are same in array
function isAllDigitsAreSame(cardNumber) {
	return cardNumber.split("").every(digit => digit === cardNumber[0])
}

//Hyphen Remover 3000 😂
hyphenRemover = card => {
	return card.replaceAll("-", "")
}

const isCreditCardNumberValid = cardNumber => {
	let isValid = true

	//Remove hyphens if they exist (Bonus)
	const newCardNumber = hyphenRemover(cardNumber)

	//Checks the luhn algorithm for card number (Bonus)
	if (!checkLuhn(newCardNumber)) {
		isValid = false
	}

	//Must be 16 digits and all numbers if not return false
	if (
		newCardNumber.length != 16 ||
		newCardNumber.split("").every(function (element) {
			return typeof element === "number"
		})
	) {
		isValid = false
	}

	//Last element must be even if not return false
	if (!(newCardNumber[newCardNumber.length - 1] % 2 == 0)) {
		isValid = false
	}

	//Sum of all digits must be greater than 16
	if (sumStr(newCardNumber) < 16) {
		isValid = false
	}

	//Not all numbers can be the same
	if (isAllDigitsAreSame(newCardNumber)) {
		isValid = false
	}

	return isValid
}

//Element Selecting Section
const validationButton = document.querySelector("[data-validation-btn]")
const cardNumber = document.querySelector("[data-card-number]")
const statusText = document.querySelector("[data-status]")

//On validate button click events
validationButton.addEventListener("click", button => {
	validationButton.innerText = "Validating..."
	setTimeout(() => {
		validationButton.innerText = "Validate"
		if (isCreditCardNumberValid(cardNumber.value)) {
			console.log("Credit Card is Valid!")
			statusText.innerText = "Card is Valid!"
			statusText.style.color = "#406c35"
		} else {
			console.log("Incorrect Credit Card Number")
			statusText.innerText = "Incorrect Credit Card Number"
			statusText.style.color = "#f23942"
		}
	}, 1000)
})

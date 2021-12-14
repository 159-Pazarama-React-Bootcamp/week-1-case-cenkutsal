//DUMMY DATA
const correctCreditCard1 = "9999777788880000"
const correctCreditCard2 = "6666666666661666"
const incorrectCreditCard1 = "aaaabbbbccccdddd "
const incorrectCreditCard2 = "4444444444444444"
const incorrectCreditCard3 = "1111111111111110"
const incorrectCreditCard4 = "6666666666666661"
const cardWithHyphens1 = "9999-7777-8888-0000"
const cardWithHyphens2 = "6666-6666-6666-1666"

//Function that sums all the digits of the string
sumStr = str => {
	return str.split("").reduce(function (total, num) {
		return parseInt(total) + parseInt(num)
	})
}

//check if all the numbers are same in array
function isAllDigitsAreSame(num) {
	return num.split("").every(digit => digit === num[0])
}

//Hyphen Remover 3000 😂
hyphenRemover = card => {
	return card.replaceAll("-", "")
}

const isCreditCardNumberValid = cardNumber => {
	let isValid = true

	//Remove hyphens if they exist
	if (cardNumber.toString().includes("-")) {
		cardNumber = hyphenRemover(cardNumber)
	}

	//Must be 16 digits and all numbers if not return false
	if (
		cardNumber.length != 16 ||
		cardNumber.split("").every(function (element) {
			return typeof element === "number"
		})
	) {
		isValid = false
	}

	//Last element must be even if not return false
	if (!(cardNumber[cardNumber.length - 1] % 2 == 0)) {
		isValid = false
	}

	//Sum of all digits must be greater than 16
	if (sumStr(cardNumber) < 16) {
		isValid = false
	}

	//Not all numbers can be the same
	if (isAllDigitsAreSame(cardNumber)) {
		isValid = false
	}

	return isValid
}

//Correct Cards (Should Output true)
console.log(isCreditCardNumberValid(correctCreditCard1))
console.log(isCreditCardNumberValid(correctCreditCard2))

//Incorrect Cards (Should Output false)
console.log(isCreditCardNumberValid(incorrectCreditCard1))
console.log(isCreditCardNumberValid(incorrectCreditCard2))
console.log(isCreditCardNumberValid(incorrectCreditCard3))
console.log(isCreditCardNumberValid(incorrectCreditCard4))

//Correct Card With Hyphens (Should Output true)
console.log(isCreditCardNumberValid(cardWithHyphens1))
console.log(isCreditCardNumberValid(cardWithHyphens2))

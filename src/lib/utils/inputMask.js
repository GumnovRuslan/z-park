export function setMaskTel(input) {
	input.addEventListener('input', onPhoneNumber, false);
	input.addEventListener('keydown', onPhoneKeyDown);
	input.addEventListener('paste', onPhonePaste, false);
	input.value = '+375 ';
	input.maxLength = 19;

	function getInputNumbersValue(input) {
		return input.value.replace(/\D/g, '');
	}

	function onPhoneNumber(e) {
		let inputNumbersValue = getInputNumbersValue(input),
			formattedInputValue = '+375 ',
			selectionStart = input.selectionStart;

		if (input.value.length != selectionStart) {
			if (e.data && /\D/g.test(e.data)) {
				input.value = inputNumbersValue;
			}
			return;
		}

		if (inputNumbersValue.length > 3) formattedInputValue += '(' + inputNumbersValue.slice(3, 5);
		if (inputNumbersValue.length > 5) formattedInputValue += ') ' + inputNumbersValue.slice(5, 8);
		if (inputNumbersValue.length > 8) formattedInputValue += '-' + inputNumbersValue.slice(8, 10);
		if (inputNumbersValue.length > 10) formattedInputValue += '-' + inputNumbersValue.slice(10, 12);
		console.log(inputNumbersValue);
		return (input.value = formattedInputValue);
	}

	function onPhoneKeyDown(e) {
		let inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode == 8 && inputValue.length <= 1) e.target.value = '';
	}

	function onPhonePaste(e) {
		let input = e.target;
		let inputNumbersValue = getInputNumbersValue(input);
		let pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			let pastedText = pasted.getData('Text');

			if (/\D/g.test(pastedText)) {
				input.value = inputNumbersValue;
				return;
			}
		}
	}
}

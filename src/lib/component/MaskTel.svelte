<script>
    import { onMount } from "svelte";

    let phoneInput

    onMount(() => {
        phoneInput = document.querySelector('input[data-tel-input]');
        showMask(phoneInput)
    });

    function showMask(input) {
        input.addEventListener('input', onPhoneNumber, false)
        input.addEventListener('keydown', onPhoneKeyDown);
        input.addEventListener('paste', onPhonePaste, false);

        function getInputNumbersValue(input) {
            return input.value.replace(/\D/g, '')
        }

        function onPhoneNumber(e) {
            let input = e.target,
                inputNumbersValue = getInputNumbersValue(input),
                formattedInputValue = inputNumbersValue.slice(0,3),
                selectionStart = input.selectionStart

            if (input.value.length != selectionStart) {
                if (e.data && /\D/g.test(e.data)) {
                    input.value = inputNumbersValue;
                }
                return;
            }

            if(inputNumbersValue.slice(0,3) === '375') {
                formattedInputValue = '+375'
                if(inputNumbersValue.length > 3) formattedInputValue += ' (' + inputNumbersValue.slice(3,5)
                if(inputNumbersValue.length > 5) formattedInputValue += ') ' + inputNumbersValue.slice(5,8)
                if(inputNumbersValue.length > 8) formattedInputValue += '-' + inputNumbersValue.slice(8,10)
                if(inputNumbersValue.length > 10) formattedInputValue += '-' + inputNumbersValue.slice(10,12)
            } else formattedInputValue = '+' + inputNumbersValue.substring(0, 16);

            return input.value = formattedInputValue
        }

        function onPhoneKeyDown(e) {
            let inputValue = e.target.value.replace(/\D/g, '');
            if (e.keyCode == 8 && inputValue.length <= 1) e.target.value = '';
        }

        function onPhonePaste(e) {
            let input = e.target
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
</script>

<input class=booking__input id="phoneInput" type='tel' data-tel-input placeholder="375 (XX) XXX-XX-XX">

<style>
    .booking__input {
        width: 100%;
        padding: 8px 15px;
        border-radius: 5px;
        border: none;
        outline: 1px solid #5e3ed0;
        height: 45px;
    }
    .booking__input:focus {
        outline: 2px solid #5e3ed0;
        box-shadow: 0 0 8px #5e3ed0;
        background: #e5ddff;
    }
    .booking__input:hover{
        outline: 2px solid #5e3ed0;
    }
</style>

<script>
    import { onMount } from "svelte";

    let dialog

    onMount(() => {
        dialog = document.getElementById('bookHoliday')
        dialog.addEventListener('click', (e) => closeDialog(e));
    })

    function submitForm() {
        let bookingForm = document.querySelector('.form-booking')
        let inputs = bookingForm.querySelectorAll('input[required]')
        let inputCheckbox = inputs[inputs.length - 1]
        let labelCheckbox = inputCheckbox.closest('.form__label-confirm')

        inputs.forEach(input => {
            if(!input.value) input.style.outlineColor = 'red'
            else input.style.outlineColor = '#5e3ed0'

            if(input == inputCheckbox) {
                if(!input.checked) labelCheckbox.style.outline = '1px solid red'
                else labelCheckbox.style.outline = '1px solid transparent'
            }
        })
    }

    function closeDialog(e) {
        const dialogSize = dialog.getBoundingClientRect()
        if(e.clientX < dialogSize.left ||
            e.clientX > dialogSize.right ||
            e.clientY < dialogSize.top ||
            e.clientY > dialogSize.bottom)
            dialog.close()
    }

    function setDateNow() {
        const addZero = (n) => n < 10 ? '0' + n : n
        const date = new Date()
        return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`
    }
</script>

<dialog class="popup" id="bookHoliday">
    <div class='popup__header'>
        <p class="popup__title">Заказать праздник</p>
        <p class="popup__description">
            Оставьте заявку на проведение дня рождения и наши менеджеры свяжутся с вами и помогут с организацией.
        </p>
    </div>
    <div class='popup__content'>
        <div class='popup__image-container'>
            <img class="popup__image" src='/img/woman.png' alt='manager'>
        </div>
        <form class="form form-booking" method="post">
            <label class='form__label'>Ваше имя *
                <input class="form__input" type="text" placeholder="Андрей" required>
            </label>
            <label class='form__label'>Дата проведения *
                <input class="form__input" type="date" value={setDateNow()} min={setDateNow()} required>
            </label>
            <label class='form__label'>Имя именинника
                <input class="form__input" type="text" placeholder="Полина">
            </label>
            <label class='form__label'>Сколько лет исполняется
                <input class="form__input" type="number">
            </label>
            <label class='form__label'>Количество детей *
                <input class="form__input" type="number" placeholder="1" min="1" required>
            </label>
            <label class='form__label'>Телефон *
                <input class="form__input" type='tel' placeholder="+375 (XX) XXX XX XX" required>
            </label>
            <label class='form__label-confirm'>
                <input type='checkbox' class='form__input-confirm' required>
                Даю согласие на обработку персональных данных, в том числе в маркетинговых целях.
            </label>
            <button class="form__btn-send" type='button' on:click={submitForm}>Отправить</button>
            <button class="popup__btn-close" type="button" on:click={dialog.close()}>
                <span class='popup__close-line'></span>
            </button>
        </form>
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: #00000071;
    }
    .popup {
        max-width: 900px;
        border: 2px solid #3e40d0;
        border-radius: 20px;
        box-shadow: 0 0 20px 1px #5e3ed0;
    }
    .popup__header {
        margin-bottom: 15px;
    }
     .popup__btn-close {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 45px;
        height: 45px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
    }
    .popup__btn-close:focus {
        background: #3e40d017;
        outline: 2px solid #5e3ed0
    }
    .popup__close-line {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }
    .popup__close-line:before,
    .popup__close-line:after {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background: #000;
        transition: all .3s;
    }
    .popup__close-line:before {
        transform: rotate(45deg);
    }
    .popup__close-line:after {
        transform: rotate(-45deg);
    }
    .popup__btn-close:hover .popup__close-line:before,
    .popup__btn-close:hover .popup__close-line:after,
    .popup__btn-close:focus .popup__close-line:before,
    .popup__btn-close:focus .popup__close-line:after {
        background: #f85151;
    }
    .popup__btn-close:hover .popup__close-line,
    .popup__btn-close:focus .popup__close-line {
        transform: scale(120%);
    }
    .popup__title {
        margin-bottom: 5px;
        padding: 0 40px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: clamp(16px, 5vw, 24px);
        text-align: center;
        line-height: 1.2;
    }
    .popup__description {
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
        text-transform: uppercase;
        font-weight: 500;
        font-size: clamp(11px, 3vw, 14px);
        text-align: center;
        line-height: 1.4;
        color: #4a4a4a;
    }
    .popup__content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .popup__image-container {
        display: flex;
        align-items: center;
        width: 400px;
    }
    .popup__image {
        object-fit: cover;
        width: 100%;
    }
    .form {
        display: flex;
        flex-direction: column;
        max-width: 450px;
    }
    .form__label {
        width: 100%;
        font-weight: 500;
        font-size: clamp(14px, 4vw, 16px);
        line-height: 1.5;
        padding-left: 10px;
    }
    .form__input {
        width: calc(100% + 10px);
        margin-left: -10px;
        padding: 5px 10px;
        height: 45px;
        outline: 1px solid #5e3ed0;
        border: none;
        border-radius: 5px;
        font-family: Rubik, sans-serif;
        font-size: clamp(16px, 4vw, 18px);
        line-height: 1.3;
        color: #505050;
        transition: box-shadow 0.3s;
    }
    .form__input::placeholder {
        color: #9a9a9a;
    }
    .form__input:hover, .form__input:focus  {
        outline: 2px solid #5e3ed0;
    }
    .form__input:focus  {
        box-shadow: 0 0 6px #3e40d0;
        background: #3e40d017;
    }
    .form__label-confirm {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 5px 0;
        font-size: clamp(12px, 3vw, 14px);
        font-weight: 500;
        line-height: 1.2;
        color: #505050;
    }
    .form__input-confirm {
        min-width: 15px;
        height: 15px;
        margin: 0;
    }
    .form__btn-send {
        align-self: center;
        text-transform: uppercase;
        width: 100%;
        height: 45px;
        padding: 5px 20px;
        font-size: clamp(14px, 4vw, 18px);
        font-weight: 700;
        border: 2px solid #5e3ed0;
        border-radius: 5px;
        color: #f5f5f5;
        background: #5e3ed0;
        transition: all .3s;
    }
    .form__btn-send:hover, .form__btn-send:focus {
        background: #f5f5f5;
        color: #5e3ed0;
        outline: none;
    }
    .form__btn-send:focus {
        box-shadow: 0 0 8px #3e40d0;
    }
    @media screen and (min-width: 650px) {
        .popup {
            padding: 20px;
        }
        .form {
            gap: 10px;
        }
    }
    @media screen and (max-width: 650px) {
        .popup {
            padding: 15px;
        }
        .popup__image-container {
            display: none;
        }
        .form {
            width: 100%;
            gap: 5px;
        }
    }
</style>

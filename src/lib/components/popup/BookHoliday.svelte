<script>
    import { onMount } from "svelte";
    import { setMaskTel, setWheelNumber, setDate, } from "$lib/utils/inputMask.js";
    import { closePopup} from '$lib/utils/popup.js'
    import { markIcon } from '../../icons'

    let form
    let isSentForm = false
    let formIsDisabled = false

    onMount(() => {
        form = document.querySelector('.form-booking')
        setMaskTel('data-mask-tel')
        setWheelNumber('data-mask-num')
        setDate('data-mask-date')
    })

    async function submitForm(event) {
        const elements = form.elements
        formIsDisabled = true

        const formData = {
            name: elements[0].value,
            date: elements[1].value,
            name_kid: elements[2].value,
            age_kid: elements[3].value,
            count_kid: elements[4].value,
            number: elements[5].value.replace(/\D/g, ''),
            formSource: 'Site',
        };

        event.preventDefault();
        // https://zparkbackend.onrender.com
        // http://localhost:3000
        try {
            const feedbackResponse = await fetch('https://zparkbackend.onrender.com/sendFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (feedbackResponse.ok) {
                console.log('Form submitted successfully to /sendFeedback');
            } else {
                console.error('Form submission failed for /sendFeedback');
            }

            const messageResponse = await fetch('https://zparkbackend.onrender.com/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (messageResponse.ok) {
                console.log('Form submitted successfully to /send-message');
                isSentForm = true
            } else {
                console.error('Form submission failed for /send-message');
            }
        } catch (error) {
            console.error(error);
        } finally {
          formIsDisabled = false
        }
    }

    function validateDate(e) {
        const inputDate = new Date(e.target.value);
        const currentDate = new Date();
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);

        if (inputDate < currentDate || inputDate > maxDate)
            e.target.setCustomValidity('Введите правильную дату');
         else
            e.target.setCustomValidity('');

    }

    function validateTel(e) {
        let inputValue = e.target.value.replace(/\D/g, '');

        if (inputValue.length == 12) e.target.setCustomValidity('');
        else e.target.setCustomValidity('Введите 12-значный номер');
    }
</script>

<dialog class="popup" id="popupBooking">
    <div class='popup__header'>
        <p class="popup__title">Заказать праздник</p>
        <p class="popup__description">
            Оставьте заявку на проведение дня рождения и наши менеджеры свяжутся с вами и помогут с организацией.
        </p>
    </div>
      <div class='popup__content'>
        <div class='popup__image-container'>
            <img class="popup__image" src='/img/woman.webp' alt='manager'>
        </div>
        {#if !isSentForm}
          <form class="form form-booking" method="post" enctype="application/json" on:submit={submitForm} class:form--disabled={formIsDisabled}>
            <label class='form__label'>Ваше имя *
                <input class="form__input" type="text" placeholder="Андрей" required>
            </label>
            <label class='form__label'>Дата проведения *
                <input class="form__input"  type="date" data-mask-date required>
            </label>
            <label class='form__label'>Имя именинника
                <input class="form__input"  type="text" placeholder="Полина">
            </label>
            <label class='form__label'>Сколько лет исполняется
                <input class="form__input"  type="number" min='0' max='17'  placeholder="0" data-mask-num>
            </label>
            <label class='form__label'>Количество детей *
                <input class="form__input"  type="number" min="1" max="100"  data-mask-num  placeholder="1" required>
            </label>
            <label class='form__label'>Телефон *
                <input class="form__input" type='tel' on:input={validateTel} data-mask-tel required>
            </label>
            <label class='form__label-confirm'>
                <input type='checkbox' class='form__input-confirm' required>
                Даю согласие на обработку персональных данных, в том числе в маркетинговых целях.
            </label>
            <button class="form__btn-send" type='submit'>Отправить</button>
          </form>
        {:else}
          <div class="sent-form">
            <p class="sent-form__text">Спасибо, заявка принята</p>
            <span class="sent-form__mark">
              {@html markIcon}
            </span>
            <p class="sent-form__text">Скоро с вами свяжутся</p>
          </div>
        {/if}
      </div>
    <button class="popup__btn-close" type="button" on:click={closePopup} aria-label="Закрыть форму заказа праздника">
      <span class='popup__close-line'></span>
  </button>
</dialog>

<style lang=scss>
  @import '/static/css/mixins.scss';

  .sent-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;

    &__mark {
      width: 90%;
      max-width: 250px;
      animation: scale 0.5s ease-in-out forwards;
    }

    @keyframes scale {
      0% {
        color: transparent;
        transform: scale(50%);
      }
      50% {
        transform:  scale(120%);
      }
      80% {
        transform:  scale(90%);
      }
      100% {
        color: green;
        transform: scale(100%);
      }
    }

    &__text {
      max-width: 500px;
      width: 100%;
      text-transform: uppercase;
      font-weight: 500;
      font-size: clamp(11px, 3vw, 14px);
      text-align: center;
      line-height: 1.4;
      color: #4a4a4a;
    }
  }
    .popup {
      width: 100%;
      max-width: 900px;
      border: 2px solid #3e40d0;
      border-radius: 20px;
      box-shadow: 0 0 20px 1px #5e3ed0;

      &::backdrop {
        background: #00000071;
      }

      &__header {
        margin-bottom: 15px;
      }
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
    .popup__btn-close:target {
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
    .popup__btn-close:target .popup__close-line:before,
    .popup__btn-close:target .popup__close-line:after {
        background: #f85151;
    }
    .popup__btn-close:hover .popup__close-line,
    .popup__btn-close:target .popup__close-line {
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
      
      &--disabled {
        opacity: 0.5;
        pointer-events: none;
      }
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
        outline: 1px solid transparent;
        outline-offset: 2px;
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

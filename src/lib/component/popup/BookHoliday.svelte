<dialog class="dialog" id="bookHoliday">
    <div class='dialog__header'>
        <div class="dialog__close" onclick="window.bookHoliday.close()">
            <span class='dialog__inner'></span>
        </div>
        <p class="dialog__subtitle">заказ праздника</p>
        <p class="dialog__description">
            Оставьте заявку на проведение дня рождения и наши менеджеры свяжутся с вами и помогут с организацией.
        </p>
    </div>
    <form class="dialog__form" method="dialog">
        <input class="dialog__input" type="text" placeholder="Имя" required>
        <input class="dialog__input" type='tel' placeholder="Телефон" required>
        <input class="dialog__input" type="date" placeholder="Дата праздника" required>
        <button class="dialog__btn" type='submit'>Отправить</button>
    </form>
</dialog>

<style>
    :global(.dialog__header) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* margin-bottom: 20px; */
    }
     :global(.dialog__close) {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    :global(.dialog__inner) {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    :global(.dialog__inner:before,
    .dialog__inner:after) {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background: #000;
    }
    :global(.dialog__inner:before) {
        transform: rotate(45deg);
    }
    :global(.dialog__inner:after) {
        transform: rotate(-45deg);
    }
    :global(.dialog__subtitle) {
        margin-bottom: 10px;
        padding: 0 50px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
        text-align: center;
    }
    :global(.dialog__description) {
        width: 500px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #4a4a4a;
    }
    :global(.dialog__form) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    :global(.dialog__input) {
        width: 100%;
        padding: 15px;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 16px;
    }
    :global(.dialog__btn) {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #000;
        font-size: 20px;
        font-weight: 700;
        color: #f5f5f5;
        background: #24b3ff;
    }
</style>

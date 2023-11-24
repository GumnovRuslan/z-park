<dialog id="bookTiket">
    <div class='dialog__header'>
        <div class="dialog__close" onclick="window.bookTiket.close()">
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
        <button class="dialog__btn">Отправить</button>
    </form>
</dialog>

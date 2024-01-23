<script>
    import SectionTitle from '$lib/component/SectionTitle.svelte'
    import { onMount } from 'svelte';
    import MaskTel from '$lib/component/MaskTel.svelte';

    let customStyle = ''

    let place
    let rooms
    let timeRoom
    let timeTable

    onMount(() => {
        place = document.getElementById('placeSelect')
        rooms = document.getElementById('roomsLine')
        timeRoom = document.getElementById('roomTime')
        timeTable = document.getElementById('tableTime')
        place.addEventListener('change', showOptionRooms)
        rooms.classList.remove('line-hidden')
        showOptionRooms()
    });

    function showOptionRooms() {
        if(place.value == 'room') {
            rooms.classList.remove('line-hidden')
            timeRoom.classList.remove('line-hidden')
            timeTable.classList.add('line-hidden')
        }
        else {
            rooms.classList.add('line-hidden')
            timeRoom.classList.add('line-hidden')
            timeTable.classList.remove('line-hidden')
        }
    }
</script>

<SectionTitle value='Заказ праздника'/>

<div class='booking'>
    <form action='' class='booking__form'>
        <div class='booking__form-first'>
            <label class="booking__label">Выберите место
                <select class="booking__input" name='' id='placeSelect'>
                    <option value='table'>Столик</option>
                    <option value='room'>Комната</option>
                </select>
            </label>

            <label class="booking__label line-hidden" id="roomsLine">Выберите комнату
                <select class="booking__input" name='rooms'>
                    <option value=''>Комната 1</option>
                    <option value=''>Комнапа 2</option>
                </select>
            </label>

            <label class="booking__label"> Укажите дату проведения праздника
                <input type='date' class='booking__input'>
            </label>

            <label class="booking__label line-hidden" id="roomTime">Выберите время
                <select class="booking__input" name='time' id=''>
                    <option value=''>12:30 - 14:30</option>
                    <option value=''>15:00 - 17:00</option>
                    <option value=''>17:30 - 19:30</option>
                </select>
            </label>

            <label class="booking__label line-hidden" id="tableTime"> Укажите дату проведения праздника
                <input type='time' class='booking__input'>
            </label>
        </div>

        <div class='booking__form-second'>
            <label for="phoneInput" class="booking__label">Телефон
                <MaskTel />
            </label>

            <label class="booking__label">Имя родителя
                <input type='text' class='booking__input' placeholder="Имя родителя">
            </label>

            <label class="booking__label">Имя ребёнка
                <input type='text' class='booking__input' placeholder="Имя ребёнка">
            </label>

            <label class="booking__label">Возраст ребёнка
                <input type='number' class='booking__input' placeholder="Возраст" min="0">
            </label>

            <label class="booking__label">Количество детей
                <input type='number' class='booking__input' placeholder="Количество детей" min="1">
            </label>

            <label class="booking__label">Количество взрослых
                <input type='number' class='booking__input' placeholder="Количество взрослых" min="1">
            </label>

            <label class="booking__label">Входной
                <input type='number' class='booking__input' placeholder="Входной" min="0">
            </label>

            <label class="booking__label">Бар
                <input type='number' class='booking__input' placeholder="Бар" min="0">
            </label>

            <label class="booking__label">Выберите анимацию
                <select class="booking__input" name='animation' id=''>
                    <option value=''>Нет</option>
                    <option value=''>Вынос тортика, 20р</option>
                    <option value=''>Флешмоб, 35р</option>
                    <option value=''>Программа, 65р</option>
                    <option value=''>Блестящая вечеринка, 80р</option>
                    <option value=''>Научное шоу, 80р</option>
                    <option value=''>Шоу мыльных пузырей, 80р</option>
                    <option value=''>Сторонная анимация, 25р</option>
                </select>
            </label>

            <label class="booking__label">Выберите героя
                <select class="booking__input" name='hero' id=''>
                    <option value='not'>Нет</option>
                    <option value='ladybug'>Леди баг</option>
                    <option value='superman'>Супермен</option>
                    <option value='supergirl'>Супергёрл</option>
                    <option value='spider man'>Человек паук</option>
                    <option value='night fury'>Ночная фурия(Беззубик)</option>
                    <option value='day fury'>Дневная фурия</option>
                    <option value='olaf'>Олаф</option>
                    <option value='cheburashka'>Чебурашка</option>
                    <option value='unicorn'>Единорог</option>
                    <option value='lion Alex'>Лев Алекс</option>
                    <option value='hippopotamus Gloria'>Бегемот Глория</option>
                    <option value='pink panther'>Розовая пантера</option>
                    <option value='kung fu panda'>Кунг-фу панда</option>
                </select>
            </label>

            <label class="booking__label">Примечание
                <textarea class="booking__note" name='' id='' cols='30' rows='10'></textarea>
            </label>
            <button class='booking__btn'>Отправить</button>
        </div>
    </form>
</div>

<style>

    .booking {
        padding: 30px 10px;
    }
    .booking__form {
        width: 900px;
        /* margin: 0 auto; */
        display: flex;
        gap: 30px;
    }
    .booking__form-first {
        flex: auto;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .booking__form-second {
        flex: auto;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .booking__label {
        display: flex;
        flex-direction: column;
        font-weight: 500;
    }
    .booking__label:hover .booking__input{
        outline: 2px solid #5e3ed0;
    }
    .booking__input:focus {
        outline: 2px solid #5e3ed0;
        box-shadow: 0 0 8px #5e3ed0;
        background: #e5ddff;
    }
    .booking__input {
        width: 100%;
        padding: 8px 15px;
        border-radius: 5px;
        border: none;
        outline: 1px solid #5e3ed0;
        height: 45px;
    }
    .line-hidden {
        display: none;
    }
    .booking__note {
        width: 100%;
        height: 100px;
    }
    .booking__btn {
        height: 40px;
        background: #ffa600;
        font-weight: 500;
    }
</style>

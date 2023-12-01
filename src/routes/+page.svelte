<script>
    import Slider from "../lib/component/slider/slider.svelte";
</script>

<svelte:head>
    <title>Парк развлечений в Витебске</title>
</svelte:head>

<Slider
duration={5000}
slides={[
    'https://www.pizzatempo.by/i/photo/pizza_za_2_rub.jpg',
    'https://pizzahouse67.ru/wp-content/uploads/2020/05/%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png',
    'https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg',
    'https://www.pizzatempo.by/i/photo/pizza_za_2_rub.jpg',
    'https://pizzahouse67.ru/wp-content/uploads/2020/05/%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png',
    'https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg',
    ]}
/>
<section class="section">
    <p class='title'>Z-park в Витебске</p>
    <div class='content'>
        <div class='card'>
            <p class='card__title'>День рождения</p>
            <div class='p card__price'>от 130 BYN</div>
            <div class='card__img'></div>
        </div>
        <div class='card'>
            <p class='card__title'>Свободные прыжки</p>
            <div class='p card__price'>от 9 BYN</div>
            <div class='card__img'></div>
        </div>
        <div class='card'>
            <p class='card__title'>Фитнес на батутах</p>
            <div class='p card__price'>от 75 BYN</div>
            <div class='card__img'></div>
        </div>
        <div class='card'>
            <p class='card__title'>Акробатика для детей</p>
            <div class='p card__price'>от 75 BYN</div>
            <div class='card__img'></div>
        </div>
    </div>
</section>
<section class='section'>
    <p class='title'>Контакты</p>
    <div class='contacts'>
        <div class='contacts__map'>Здесь должна быть карта</div>
        <div class='contacts__info'>
            <div class='contact'>
                <p class='contact__title'>Наш адрес</p>
                <p class='contact__text'>проспект Фрунзе, 81к33, Витебск</p>
            </div>
            <div class='contact'>
                <p class='contact__title'>Наши телефоны</p>
                <p class='contact__text'>+ 375 ХХ ХХХ ХХ ХХ</p>
            </div>
            <div class='contact'>
                <p class='contact__title'>Время работы</p>
                <p class='contact__text'>11:00 - 20:00 каждый день</p>
            </div>
            <div class='contact'>
                <p class='contact__title'>Наша почта</p>
                <p class='contact__text'>z_park_vitebsk</p>
            </div>
            <div class='contact'>
                <p class='contact__title'>Мы в соц. сетях</p>
                <p class='contact__text'>Вконтакте</p>
                <p class='contact__text'>Youtube</p>
                <p class='contact__text'>Instagram</p>
                <p class='contact__text'>TikTok</p>
            </div>
        </div>
    </div>
</section>

<style>
    .section {
        padding: 20px;
    }
    .title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding: 20px;
    }
    .content {
        max-width: 900px;
        margin: 0 auto;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 230px;
        padding: 15px;
        border-radius: 20px;
        box-shadow: 2px 2px 5px grey;
        overflow: hidden;
    }
    .card__title {
        flex: auto;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
    }
    .card__price {
        flex: auto;
        justify-self: center;
        font-weight: 700;
        font-size: 20px;
        color: orangered;
    }
    .card__img {
        position: absolute;
        right: -25%;
        bottom: -30%;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: grey;
    }
    .contacts {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        justify-content: space-evenly;
    }
    .contacts__map {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(300px, 40vw, 70vh);
        height: clamp(300px, 40vw, 70vh);
        background: gray;
    }
    .contacts__info {
    }
    .contact:not(:last-child) {
        margin-bottom: 20px;
    }
    .contact__title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: clamp(18px, 2vw, 20px);
        line-height: 1.3;
    }
    .contact__text {
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.3;
    }
</style>

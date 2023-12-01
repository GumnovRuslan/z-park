<script>
    import Slider from "../lib/component/slider/slider.svelte";
    import Contacts from "$lib/sections/Contacts.svelte";
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
    <div class='wrapper'>
        <p class='title'>Контакты</p>
        <Contacts />
    </div>

<style>
    .section {
        padding: 20px;
    }
    .title {
        text-transform: uppercase;
        font-size: 36px;
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
    @media screen and (min-width: 600px) {
        .wrapper {
            max-width: 2000px;
            margin: 0 auto;
            padding: 50px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            padding: 20px 10px;
        }
    }
</style>

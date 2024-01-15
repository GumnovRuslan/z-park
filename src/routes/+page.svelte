<script>
    import Slider from "../lib/component/slider/slider.svelte";
    import Contacts from "$lib/sections/Contacts.svelte";
    import Attractions from "../lib/sections/Attractions.svelte";
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

<section class='wrapper'>
    <h2 class='title'>Развлечения</h2>
    <Attractions />
</section>
<section class='wrapper'>
    <p class='title'>Контакты</p>
    <Contacts />
</section>

<style>
    .section {
        /* padding: 20px; */
    }
    .title {
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 700;
        text-align: center;
        padding: 20px;
        line-height: 1.3;
        margin: 0;
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

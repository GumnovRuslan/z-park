<script>
    import SectionTitle from "../lib/component/SectionTitle.svelte";
    import Slider from "../lib/component/slider/slider.svelte";
</script>

<svelte:head>
    <title>Парк развлечений в Витебске</title>
</svelte:head>

<!-- <SectionTitle value='Главная страница'/> -->
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

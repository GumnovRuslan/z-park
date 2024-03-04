<script>
    import Contacts from "$lib/components/sections/Contacts.svelte";
    import Attractions from "$lib/components/sections/Attractions.svelte";
    import CustomBtn from "$lib/components/CustomBtn.svelte";
    import AboutInfo from "$lib/components/block/AboutInfo.svelte";

</script>

<svelte:head>
    <title>Парк развлечений в Витебске</title>
</svelte:head>

<div class='preview'>
    <div class='preview__container'>
        <img class='preview__img' src='/img/super-hero.webp' alt='Задний фон с супер героями'>
        <div class='preview__bg'>
            <picture>
                <source srcset="/img/logo-removebg-cut.webp" />
                <img class='preview__logo' src='/img/logo-removebg-cut.webp' alt='Логотип Z park'>
            </picture>
            <p class='preview__text'>СОВРЕМЕННЫЙ РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР</p>
            <CustomBtn text='Заказать праздник'/>
        </div>
    </div>
</div>

<div class='wrapper'>
    <div class='place'>
        <h2 class='title'>Z-park</h2>
        <div class='place__content'>
            <AboutInfo
                image={{def: 'offer-default',
                        md: 'offer-medium',
                        sm: 'offer-small'}}
                alt=''
                text='Добро пожаловать в уникальный мир веселья и приключений – детский парк развлечений, где каждый миг наполнен радостью и удивлением! У нас ты найдешь все, чтобы сделать свой день незабываемым: захватывающие аттракционы, яркие шоу, интересные мастер-классы и многое другое! Погрузись в атмосферу веселья вместе с нами!'/>
        </div>
    </div>
</div>


<section class='wrapper'>
    <h2 class='title'>Развлечения</h2>
    <Attractions />
</section>
<section class='wrapper'>
    <h2 class='title'>Контакты</h2>
    <Contacts />
</section>

<style>
    .preview__container {
        position: relative;
        height: 100vh;
        max-height: 900px;
    }
    .preview__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .preview__bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0000009a;
    }
    .preview__logo {
        width: clamp(160px, 35vw, 250px);
    }
    .preview__text {
        max-width: 600px;
        padding: 0 30px;
        color: #fff;
        font-weight: 700;
        font-size: clamp(20px, 5vw, 50px);
        line-height: 1.3;
        letter-spacing: 3px;
        text-align: center;
    }

    .place__content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 30px 10px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .place__content:before, .place__content:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        border-radius: 50%;
        background: #ffa600;
    }
    .place__content:before {
        top: 0;

    }
    .place__content:after {
        bottom: 0;
    }
    .place__img {
        width: 30%;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
    }
    .place__text {
        font-weight: 500;
        font-size: clamp(16px, 4vw, 20px);
        line-height: 1.3;
        text-align: center;
    }
    .place__text:not(:last-child) {
        margin-bottom: 10px;
    }
    .title {
        text-transform: uppercase;
        font-size: clamp(28px, 4vw, 36px);
        font-weight: 700;
        text-align: center;
        line-height: 1.3;
        margin: 0 0 20px 0;
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
        .place__img {
            display: none;
        }
    }
</style>

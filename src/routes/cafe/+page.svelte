<script>
    import { onMount } from "svelte";

    let anchors

    onMount(() => {
        anchors = document.querySelectorAll('a[href*="#"]')
        f()
    })

    function f() {
        anchors.forEach(anchor => anchor.addEventListener('click', (e) => {
            e.preventDefault()
            document.getElementById(anchor.getAttribute('href')
            .substr(1))
            .scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }))
    }
</script>


<svelte:head>
    <title>
        Кафе в Z-park
    </title>
</svelte:head>

<h2 class="section__title">Кафе в Z-park</h2>
<div class='news'>
    <div class='news__content'>
        <p class="news__title">Наши пончиковые новинки</p>
        <ul class="news__description">
            <li class='news__text'>черника</li>
            <li class='news__text'>тутти-фрутти</li>
            <li class='news__text'>шоколад</li>
            <li class='news__text'>клубника</li>
            <li class='news__text'>банан</li>
        </ul>
    </div>
</div>
<div class="cafe__menu">
    <a class="cafe__menu-item" href='#drinks'>напитки</a>
    <a class="cafe__menu-item" href='#beverages'>закуски</a>
    <a class="cafe__menu-item" href='#sets'>сеты</a>
    <a class="cafe__menu-item" href='#pizza'>пиццы</a>
    <a class="cafe__menu-item" href='#donuts'>пончики</a>
</div>
<div class='menu' id="drinks">
    <p class='menu__title'>Горячие напитки</p>
    <div class='menu__items'>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
    </div>
</div>
<div class='menu' id="beverages">
    <p class='menu__title'>Закуски</p>
    <div class='menu__items'>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
    </div>
</div>
<div class='menu' id="sets">
    <p class='menu__title'>Сеты</p>
    <div class='menu__items'>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
    </div>
</div>
<div class='menu' id="pizza">
    <p class='menu__title'>Пиццы</p>
    <div class='menu__items'>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
    </div>
</div>
<div class='menu' id="donuts">
    <p class='menu__title'>Пончки</p>
    <div class='menu__items'>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
        <div class='item'>
            <img class="item__img" src='/img/coffee.webp' alt='продукт'>
            <div class='item__item-content'>
                <p class='item__name'>Название продукта</p>
                <p class='item__description'>Описание продукта</p>
            </div>
        </div>
    </div>
</div>

<style>
    /* :root {
        scroll-behavior: smooth;
    } */
    .menu__title {
        font-weight: 700;
        font-size: 24px;
        padding: 0 5vw;
        box-shadow: 1px 1px 5px #000;
        text-shadow: 1px 1px 2px #000;
        background: #ffa200;
        color: #f5f5f5;
    }
    .item__content {

    }
    .menu__items {
        display: flex;
        flex-direction: column;
    }
    .item {
        display: flex;
        gap: 20px;
        min-height: 100px;
        padding: 10px;
        border-bottom: 3px solid #ffa200;
        background: #232323;
    }
    .item__img {
        object-fit: cover;
        width: 100px;
    }
    .item__name {
        font-weight: 700;
        font-size: 18px;
        color: #f5f5f5;
    }
    .item__description {
        color: #f5f5f5;
    }
    :global(.section__title) {
        text-transform: uppercase;
        background: #d8ff4b;
        margin: 0;
        text-align: center;
        text-shadow: 1px 1px 2px #000;
        color: #f5f5f5;
    }
    .news {
        height: 30vw;
        background-image: url(/img/donuts.jpg);
        background-repeat: no-repeat;
        background-size: cover;

    }
    .news__content {
        display: inline-block;
        padding: 10px 20px;
        border-bottom-right-radius: 20px;
        box-shadow: 5px 5px 10px 8px #232323e0;
        background: #232323e0;
    }

    .news__title {
        font-family: 'Lobster';
        color: #f5f5f5;
        font-size: 35px;
        letter-spacing: 2px;
        text-shadow: 2px 2px 5px #000;
    }
    .news__description {
        margin: 0;
        padding: 0 20px;
    }
    .news__text {
        font-family: Lobster;
        font-size: 18px;
        text-shadow: 2px 2px 5px #000;
        color: #d3d2d2;
        letter-spacing: 2px;
    }
    .cafe__menu {
        display: flex;
        justify-content: space-around;
        background: #232323;
    }
    .cafe__menu-item {
        width: calc(100vw / 5);
        padding: 20px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        color: #f5f5f5;
        border-right: 1px solid #f5f5f5;
        transition: all 0.2s;
    }
    .cafe__menu-item:hover {
        background: #e1e1e1;
        color: #232323;
    }
    @media screen and (min-width: 640px) {
        .cafe__menu-item {
            width: calc(100vw / 5);
        }
    }
    @media screen and (min-width: 460px) and (max-width: 640px) {
        .cafe__menu-item {
            width: calc(100vw / 5);
        }
        .cafe__menu-item {
            text-align: center;
            font-size: 12px;
            padding: 10px;
        }
    }
    @media screen and (max-width: 460px) {
        .news__title {
            font-size: 20px;
        }
        .cafe__menu {
            flex-direction: column;
        }
        .cafe__menu-item {
            text-align: center;
            width: auto;
            font-size: 12px;
            padding: 10px;
        }
    }

</style>

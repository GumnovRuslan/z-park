<script>
    import SectionTitle from '$lib/component/SectionTitle.svelte'
    import MenuItem from '$lib/component/MenuItem.svelte';
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
                block: 'start'
            })
        }))
    }
</script>


<svelte:head>
    <title>
        Кафе в Z-park
    </title>
</svelte:head>

<SectionTitle value='Кафе в Z-park'/>
<!-- <div class='news'>
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
</div> -->
<div class="menu-nav">
    <a class="menu-nav-item" href='#drinks'>напитки</a>
    <a class="menu-nav-item" href='#beverages'>закуски</a>
    <a class="menu-nav-item" href='#sets'>сеты</a>
    <a class="menu-nav-item" href='#pizza'>пиццы</a>
    <a class="menu-nav-item" href='#donuts'>пончики</a>
    <a class='menu-nav-item' href='#'>Бар в Z-park</a>
</div>
<div class='content'>
    <MenuItem
    title='Напитки'
    id='drinks'
    menu={[
        ['Салат сельдь под шубой', '100 BYN', '100 гр', 'https://www.tastingtable.com/img/gallery/17-celebrity-chefs-and-their-favorite-fast-food-restaurants/l-intro-1674674335.jpg'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр']
    ]}
    />
    <MenuItem
    title='Пончики'
    id='donuts'
    menu={[
        ['Суп сырный с брокколи', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Суп сырный с брокколи', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр'],
        ['Салат сельдь под шубой', '100 BYN', '100 гр']
    ]}
    />
</div>


<style>
    .content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 50px;
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
    .menu-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #232323;
    }
    .menu-nav-item {
        width: calc(100vw / 5);
        padding: 10px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        color: #f5f5f5;
        border-right: 1px solid #f5f5f5;
        transition: all 0.2s;
        line-height: 1.3;
    }
    .menu-nav-item:hover {
        background: #e1e1e1;
        color: #232323;
    }
    @media screen and (min-width: 640px) {
        .menu-nav-item {
            width: calc(100vw / 6);
        }
    }
    @media screen and (min-width: 460px) and (max-width: 640px) {
        .menu-nav-item {
             width: calc(100vw / 6);
            text-align: center;
            font-size: 12px;
            padding: 10px;
        }
    }
    @media screen and (max-width: 460px) {
        .news__title {
            font-size: 20px;
        }
        .menu-nav {
            flex-direction: column;
        }
        .menu-nav-item  {
            text-align: center;
            width: auto;
            font-size: 12px;
            padding: 10px;
        }
    }

</style>

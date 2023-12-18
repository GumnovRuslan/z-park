<script>
    import SectionTitle from '$lib/component/SectionTitle.svelte'
    import MenuItem from '$lib/component/MenuItem.svelte';
    import { onMount } from "svelte";

    let anchors
    let card
    let menuTitles
    let menu

    onMount(() => {
        menu = document.querySelector('.menu')
        anchors = document.querySelectorAll('a[href*="#"]')
        card = document.querySelector('.card')
        menuTitles = document.querySelectorAll('.menu__title')
        window.addEventListener('resize', titleMargin)
        titleMargin()
        setAnchor()
    })

    function titleMargin() {
        const menuSize = menu.getBoundingClientRect()
        const cardSize = card.getBoundingClientRect()
        menuTitles.forEach(title => title.style.padding = `0 ${cardSize.left - menuSize.left}px`)
    }

    function setAnchor() {
        anchors.forEach(anchor => anchor.addEventListener('click', (e) => {
            e.preventDefault()
            let targetElement = document.getElementById(anchor.getAttribute('href').substr(1))
            let headerHeight = document.querySelector('header').offsetHeight;
            let scrollTo = targetElement.offsetTop - headerHeight
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }))
    }
</script>


<svelte:head>
    <title>
        Кафе в Z-park
    </title>
</svelte:head>

<SectionTitle value='Кафе в Z-park'/>

<div class="menu-nav">
    <a class="menu-nav-item" href='#drinks'>напитки</a>
    <a class="menu-nav-item" href='#beverages'>закуски</a>
    <a class="menu-nav-item" href='#sets'>сеты</a>
    <a class="menu-nav-item" href='#pizza'>пиццы</a>
    <a class="menu-nav-item" href='#donuts'>пончики</a>
    <a class='menu-nav-item' href='#bar'>Бар в Z-park</a>
</div>

<div class='menu-content'>
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
    .menu-content {
        display: flex;
        flex-direction: column;
        gap: clamp(20px, 5vw, 40px);
        padding-left: clamp(10px, 3vw, 40px);
        padding-right: clamp(10px, 3vw, 40px);
        padding-bottom: 30px;
    }
    .menu-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 5px;
        padding: 10px;
    }
    .menu-nav-item {
        padding: 5px 15px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: #000;
        border: 2px solid #000;
        border-radius: 50px;
        transition: all 0.3s;
        line-height: 1.3;
    }
    .menu-nav-item:hover {
        color: red;
        border-color: red;
    }
</style>

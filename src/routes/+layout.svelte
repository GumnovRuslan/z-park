<script>
    import { onMount } from "svelte";
    import Header from "$lib/sections/Header.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import BtnUp from "../lib/component/BtnUp.svelte";
    import CustomBtn from "../lib/component/CustomBtn.svelte";
    import BookHoliday  from "$lib/component/popup/BookHoliday.svelte";
    import BreadCrumbs from "../lib/component/BreadCrumbs.svelte";

    let btnBook

    onMount(() => {
        btnBook = document.getElementById('btn-holiday')
        posBtnBook()
    })

    let breadcrumbs = [
        { label: 'Главная', url: '/' },
        { label: 'Текущая страница', url: null }
    ];

    function handleClick() {
        window.bookHoliday.showModal()
    };

    function posBtnBook() {
        const size = btnBook.getBoundingClientRect()
        btnBook.style.transform = `rotate(-90deg)
        translateX(-${size.height / 2}px)
        translateY(${size.width / 2 - size.height / 2}93px)`
        btnBook.style.display = 'block'
    }
</script>

<div class='wrapper'>
    <BookHoliday />
    <div class='header'>
        <Header />
    </div>
    <main class='main'>
        <!-- <BreadCrumbs {breadcrumbs} /> -->
        <slot />
            <BtnUp height='100'/>
        <div class='btn' id='btn-holiday'>
            <CustomBtn text='Заказать праздник' {handleClick}/>
        </div>
    </main>
    <Footer />
</div>

<style>
    .header {
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .btn {
        display: none;
        position: fixed;
        z-index: 10;
        bottom: 50%;
        right: 0;
    }
    :global(button) {
        cursor: pointer;
    }
    :global(html,body) {
        padding: 0;
        margin: 0;
        height: 100%;
    }
    :global(*) {
        box-sizing: border-box;
    }
    :global(p) {
        margin: 0;
        padding: 0;
    }
    .wrapper {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main {
        flex: 1 1 auto;
    }
</style>

<script>
    import BookHoliday  from "$lib/component/popup/BookHoliday.svelte";
    import BuyTicket from "$lib/component/popup/BuyTicket.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        let links = document.querySelectorAll('.link')
        closeMenu(links)
    })

    function closeMenu(links) {
        links.forEach(link => link.addEventListener('click', () => window.falseCheckbox.checked = false))
    }
</script>

<header class="header">
    <input type='checkbox' id="falseCheckbox">
    <label class='burger' for="falseCheckbox">
        <span class="burger__line burger__line-top"></span>
        <span class="burger__line burger__line-center"></span>
        <span class="burger__line burger__line-bottom"></span>
    </label>
    <a class="logo-link logo-top link" href='/'>
        <img src='img/logo-removebg-cut.png' alt='' class='logo'>
    </a>
    <nav class='header__menu' id="menu">
        <div class="header__info">
            <button class="btn" type="button" on:click={()=> window.bookHoliday.showModal()}>
            заказать праздник
            </button>
            <button class="btn" type="button" on:click={()=> window.bookTiket.showModal()}>
            купить билет
            </button>
            <BookHoliday />
            <BuyTicket />
        </div>
        <nav class="header__nav">
            <a class="header__link link" href='/about'>О нас</a>
            <a class="header__link link" href='/holidays'>Праздники</a>
            <a class="header__link link" href='/photo'>Фото</a>
            <a class="logo-link logo-bottom link" href='/'>
                <img src='img/logo-removebg-cut.png' alt='' class='logo'>
            </a>
            <a class="header__link link" href='/cafe'>Кафе</a>
            <a class="header__link link" href='/prices'>Цены</a>
            <a class="header__link link" href='/contacts'>Контакты</a>
        </nav>
    </nav>
</header>

<style>
    button {
        padding: 0;
    }
    #falseCheckbox {
        display: none;
    }
    .burger {
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        cursor: pointer;
        background: transparent;

    }
    .burger__line {
        width: 100%;
        height: 4px;
        border-radius: 5px;
        background: #000;
        transition: all 0.5s;
    }
    #falseCheckbox:checked ~ .burger .burger__line-top {
        transform: translateY(12px) rotate(45deg);
    }
    #falseCheckbox:checked ~ .burger  .burger__line-center {
        transform: scale(0);
    }
    #falseCheckbox:checked ~ .burger  .burger__line-bottom {
        transform: translateY(-12px) rotate(-45deg);
    }
    #falseCheckbox:checked ~ .header__menu {
        left: 0;
    }
    .header {
        position: sticky;
        top: 0;
        z-index: 10;
        box-shadow: 0 0 10px 1px #858585;
        background: #24b3ff;
    }
    .header__menu {
        transition: all 0.5s;
    }
    .header__info {
        display: flex;
        justify-content: center;
    }


    .btn {
        width: 200px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        color: #f5f5f5;
        background: rgb(63, 146, 89);
    }
    .header__nav {
        display: flex;
        align-items: center;
        height: 80px;

    }
    .header__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
        font-family: Rubik;
        font-weight: 700;
        border: none;
        background: transparent;
        text-decoration: none;
        transition: all 0.2s;
        color: #000;
    }
    .header__link:hover {
        transform: scale(110%);
        text-shadow: 0px 0px 2px #938c00;
        color: #0062ff;
    }
    .logo-link {
        padding: 0 10px;
        height: 100%;
    }
    .logo {
        height: 100%;
        transition: all 0.5s;
    }
    .logo-link:hover .logo {
        transform: scale(115%);
    }

    @media screen and (min-width: 800px) {
        .burger {
            display: none;
        }

        .header__menu {
            padding: 10px;
        }
        .logo-top {
            display: none;
        }
        .header__info {
            gap: 20px;
            margin-bottom: 10px;
        }
        .btn {
            padding: 5px 15px;
        }
        .header__nav {
            box-shadow: 0 0 10px #878787;
            background: #fff;
        }
        .header__link  {
            font-size: clamp(14px, 1.7vw, 20px);
        }
    }


    @media screen and (max-width: 800px) {
        .header {
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: clamp(50px, 11vw, 70px);
        }
        .burger {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .header__menu {
            position: absolute;
            top: 100%;
            left: -100%;
            width: 100%;
            height: calc(100vh - 50px);
            padding: 10px;
            background: #f5f5f5;
        }
        .logo-link {
            display: block;
            margin: 0 auto;
            transform: translateX(-20px);
        }
        .logo-bottom {
            display: none;
        }
        .header__info {
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 0;
            padding-bottom: 10px;
            border-bottom: 2px solid rgb(147, 147, 147)        }
        .btn {
            padding: 10px;
        }
        .header__nav {
            padding: 0;
            flex-direction: column;
            background: transparent;
            box-shadow: none;
        }
        .header__link  {
            text-align: center;
            width: 90%;
            font-size: 20px;
        }
    }

</style>

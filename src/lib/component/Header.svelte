<script>
    import BookHoliday  from "$lib/component/popup/BookHoliday.svelte";
    import BuyTicket from "$lib/component/popup/BuyTicket.svelte";
    import InfoContact from "$lib/component/popup/InfoContact.svelte"
</script>

<header class="header">
    <input type='checkbox' id="falseCheckbox">
    <label class='burger' for="falseCheckbox">
        <span class="burger__line burger__line-top"></span>
        <span class="burger__line burger__line-center"></span>
        <span class="burger__line burger__line-bottom"></span>
    </label>
    <a class="logo-link logo-top" href='/'></a>
    <nav class='header__menu'>
        <div class="header__info">
            <button class="btn" type="button" on:click={()=> window.bookHoliday.showModal()}>
            заказать праздник
            </button>
            <button class="btn" type="button" on:click={()=> window.bookTiket.showModal()}>
            купить билет
            </button>
            <BookHoliday />
            <BuyTicket />
            <InfoContact />
        </div>
        <nav class="header__nav">
            <a class="header__top-link" href='/about' on:click={() => window.falseCheckbox.checked = false}>О нас</a>
            <a class="header__top-link" href='/photo' on:click={() => window.falseCheckbox.checked = false}>Фото</a>
            <a class="header__top-link" href='/holidays' on:click={() => window.falseCheckbox.checked = false}>Праздники</a>
            <a class="logo-link logo-bottom" href='/'></a>
            <a class="header__top-link" href='/cafe' on:click={() => window.falseCheckbox.checked = false}>Кафе</a>
            <a class="header__top-link" href='/prices' on:click={() => window.falseCheckbox.checked = false}>Цены</a>
            <button class="header__top-link" type="button" on:click={() => window.infoContact.showModal()}>
                Контакты
            </button>
        </nav>
    </nav>
</header>

<style>
    .header {
        position: sticky;
        top: 0;
        box-shadow: 0 0 10px 1px #858585;
        background: #24b3ff;
    }
    .header__menu {
        padding: 10px;
        transition: all 0.5s;
    }
    .header__info {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 10px;
    }
    #falseCheckbox {
        display: none;
    }
    .burger {
        display: none;
        width: 40px;
        height: 40px;
        padding: none;
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

    .btn {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        padding: 5px 15px;
        border: none;
        border-radius: 5px;
        color: #f5f5f5;
        background: rgb(63, 146, 89);
    }
    .header__nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 0 10px #878787;
        background: #fff;

    }
    .logo-link {
        display: block;
        width: 200px;
        height: 80px;
        background-image: url(/img/logo.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .logo-top {
        display: none;
    }
    .header__top-link {
        padding: 5px 10px;
        font-family: Rubik;
        font-size: 18px;
        color: #000;
        font-weight: 700;
        border: none;
        background: transparent;
        text-decoration: none;
        transition: all 0.2s;
        border-bottom: 5px solid transparent;
    }
    .header__top-link:hover {
        border-bottom: 5px solid #ff3e24;
    }


    @media screen and (max-width: 750px) {
        .header {
            display: flex;
            align-items: center;
            padding: 5px;
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
            width: 150px;
            height: 50px;
            margin: 0 auto;
            padding-right: 40px;
            justify-self: center;
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
            width: 300px;
            padding: 10px;
        }
        .header__nav {
            padding: 0;
            flex-direction: column;
            background: transparent;
            box-shadow: none;
        }
        .header__top-link  {
            text-align: center;
            width: 100%;
        }
    }

</style>

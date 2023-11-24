<script>
    import  BookHoliday  from "$lib/component/BookHoliday.svelte";
    import  BuyTicket from "$lib/component/BuyTicket.svelte";
</script>

<header class="header">
    <div class='header__container'>
        <div class="header__info">
            <a class="btn" href='/contact'>КОНТАКТЫ</a>
            <a class="btn" href='/write-to-us'>НАПИШИТЕ НАМ</a>
            <button class="btn" type="button" onclick="window.bookHoliday.showModal()">
            заказать праздник
            </button>
            <button class="btn" type="button" onclick="window.bookTiket.showModal()">
            купить билет
            </button>
            <span class="header__info-number">+375 XX XXX-XX-XX</span>
            <BookHoliday />
            <BuyTicket />
        </div>
        <nav class="header__top">
            <a class="header__top-link" href='/news'>НОВОСТИ</a>
            <a class="header__top-link" href='/about'>О НАС</a>
            <a class="header__top-link" href='/photo'>ФОТО</a>
            <a class="logo-link" href='/'></a>
            <a class="header__top-link" href='/holidays'>ПРАЗДНИКИ</a>
            <a class="header__top-link" href='/cafe'>КАФЕ</a>
            <a class="header__top-link" href='/prices'>ЦЕНЫ</a>
        </nav>
        <!-- <nav class="header__bottom">
            <a class="header__bottom-link" href='/contact'>КОНТАКТЫ</a>
            <a class="header__bottom-link" href='/write-to-us'>НАПИШИТЕ НАМ</a>
        </nav> -->
    </div>
</header>

<style>

    .header {
        position: sticky;
        top: 0;
    }

    .header__container {
        background: #24b3ff;
        padding: 10px 20px;
    }
    .header__info {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 10px;
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
    .header__info-number {
        font-size: 18px;
        font-weight: 700;
        color: #f5f5f5;
    }
    .header__top {
        display: flex;
        gap: 10px;
        justify-content: space-around;
        align-items: center;
        background: #fff;

    }
    .logo-link {
        width: 200px;
        height: 80px;
        overflow: hidden;
        background-image: url(img/logo.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .header__top-link {
        padding: 10px;
        font-size: 20px;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s;
    }
    .header__top-link:hover {
        background: #419ffd;
    }
    .header__bottom {
        display: flex;
        gap: 20px;
        justify-content: space-around;
        align-items: center;
        width: 600px;
        margin: 0 auto;
        background: #862cb6;

    }
    .header__bottom-link {
        display: block;
        padding: 10px;
        letter-spacing: 1.2px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        color: #f5f5f5;
    }
    .header__bottom-link:hover {
        transform: scale(1.15);
    }

</style>

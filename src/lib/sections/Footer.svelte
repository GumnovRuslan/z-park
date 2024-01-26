<script>
</script>

<div class='footer__container'>
    <div class='footer-top'>
            <div class='footer-top__logo'>
                <a href='/' class='footer-top__logo-link'>
                    <img src='/img/logo-removebg-cut.png' class='footer-top__logo-img' alt='logo'>
                </a>
            </div>
            <div class='footer-top__info'>
                <p class='footer-top__info-text'>пр. Фрунзе, 81к33, г .Витебск</p>
                <p class='footer-top__info-text'>Ежедневно 11:00 - 20:00</p>
                <p class='footer-top__info-text'>+375 (XX) XXX-XX-XX</p>
            </div>
            <div class='footer-top__content'>
                <a href='#' class='footer-top__link'>Правила посещения</a>
                <a href='#' class='footer-top__link'>Политика кафиденциальности</a>
            </div>
            <div class='footer-top__content'>
                <a href='/contacts' class='footer-top__link'>Контакты</a>
                <a href='/holidays' class='footer-top__link'>Праздники</a>
                <a href='/prices' class='footer-top__link'>Цены</a>
            </div>
            <div class='footer-top__content'>
                <a href='/about' class='footer-top__link'>О нас</a>
                <a href='/photo' class='footer-top__link'>Фото</a>
                <a href='/cafe' class='footer-top__link'>Кафе</a>
            </div>
        </div>
        <div class='footer-bottom'>
            <p class='footer-bottom__copy'>@copy 2024г</p>
        </div>
</div>


<style>
    :root {
        --bg: #24b3ff;
        --text: #f5f5f5;
        --link: #9f9f9f;
    }
    .footer-top__logo-link {
        display: block;
        width: 140px;
        padding: 0 10px;
    }
    .footer__container {
        padding: 30px clamp(10px, 4vw, 100px);
        background: #0b0678;
    }
    .footer-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        max-width: 85%;
        margin: 0 auto 50px auto;
    }
    .footer-top__content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .footer-top__logo {
        flex: auto;
    }
    .footer-top__logo-img {
        width: 100%;
    }
    .footer-top__info {
        flex: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3px;
    }
    .footer-top__info-text {
        line-height: 1.3;
        color: #dddddd;
        padding: 0 10px;
    }
    .footer-top__link {
        padding: 5px 10px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        color: #dddddd;
        transition: all 0.2s;
    }
    .footer-top__link:hover {
        color: #fff;
    }
    .footer-bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
        border-top: 1px solid #f5f5f5;
    }
    .footer-bottom__copy {
        text-align: center;
        font-size: 14px;
        color: #b4b4b4;
    }
    @media screen and (max-width: 600px) {
        .footer-top {
            flex-direction: column;
        }
    }
</style>

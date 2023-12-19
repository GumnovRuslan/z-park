<script>
    import Network from "../component/Network.svelte"
</script>

<div class='wrapper'>
    <div class='container'>
        <div class='footer-top'>
            <div class='footer-top__content'>
                <img src='img/logo-removebg-cut.png' alt='' class='logo'>
                <a href='#' class='footer-top__item'>Правила посещения</a>
                <a href='#' class='footer-top__item'>Политика кафиденциальности</a>
            </div>
            <div class='footer-top__content'>
                <a href='#' class='footer-top__item'>Контакты</a>
                <a href='#' class='footer-top__item'>О нас</a>
                <a href='#' class='footer-top__item'>О компании</a>
                <a href='#' class='footer-top__item'>Цены</a>
            </div>
            <div class='footer-top__content'>
                <a href='#' class='footer-top__item'>Контакты</a>
                <a href='#' class='footer-top__item'>О нас</a>
                <a href='#' class='footer-top__item'>О компании</a>
                <a href='#' class='footer-top__item'>Цены</a>
            </div>
        </div>
        <div class='footer-bottom'>
            <p class='footer-bottom__copy'>@copy 2023г</p>
        </div>
    </div>
</div>


<style>
    :root {
        --bg: #24b3ff;
        --text: #f5f5f5;
        --link: #d7d7d7;
    }
    .wrapper {
        padding: 0 clamp(20px, 4vw, 100px);
        background: #24b3ff;
    }
    .container {
        max-width: 1440px;
        padding: 50px 0;
        margin: 0 auto;
    }
    .footer-top {
        display: flex;
        justify-content: space-between;
        gap: clamp(5px, 1vw, 40px);
        margin-bottom: 40px;
    }
    .footer-top__content {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 3px;
    }
    .logo {
        width: 120px;
    }
    .footer-top__item {
        padding: 3px 0;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        color: #dddddd;
        transition: all 0.2s;
    }
    .footer-top__item:hover {
        color: #fff;
    }
    .footer-bottom__copy {
        text-align: center;
        font-size: 14px;
        color: #505050;
    }
    @media screen and (max-width: 600px) {
        .footer-top {
            flex-direction: column;
        }
    }
</style>

<script>
    import Network from "./Network.svelte";
</script>

<footer class="footer">
    <div class="footer__container">
        <div class='footer__block-first'>
            <div class='footer__links'>
                <p class='footer__links-title title'>Компания</p>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
            </div>
            <div class='footer__links'>
                <p class='footer__links-title title'>Компания</p>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
                <a href='#' class='footer__link'>link</a>
            </div>
        </div>
        <div class='footer__block-second'>
            <p class='footer__network title'>
                Следите за нами:
                <Network />
            </p>
            <div class='footer__email'>
                <p class='footer__email-title title'>Будьте в курсе наших акций и интересных событий:</p>
                <input class="footer__input" type='text' placeholder="Введите ваш Email">
                <label class="footer__text"><input type='checkbox'>ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ МОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ</label>
            </div>
            <p class='footer__number'>+375 xx xx-xx-xx</p>
        </div>
    </div>
</footer>

<style>
    :root {
        --bg: #24b3ff;
        --text: #f5f5f5;
        --link: #d7d7d7;
    }
    .footer__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        padding: 10px;
        box-shadow: 0 0 10px #858585;
        background: var(--bg, #24b3ff);
    }
    .footer__block-first {
        flex: auto;
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
    .footer__block-second {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .footer__links {
        display: flex;
        flex-direction: column;
    }
    .title {
        text-transform: uppercase;
        font-weight: 700;
        color: var(--text, #f5f5f5);
    }
    .footer__link {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--link, #d7d7d7);
        cursor: pointer;
    }
    .footer__link:hover {
        color: var(--text, #f5f5f5);
    }
    .footer__network {
        display: flex;
        gap: 10px;
    }
    .footer__email {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .footer__input {
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 8px;
    }
    .footer__text {
        display: block;
        font-weight: 700;
        color: var(--text, #f5f5f5);
    }
    .footer__number {
        font-weight: 700;
        color: var(--text, #f5f5f5);
    }
    @media screen and (min-width: 500px) {
        .title,
        .footer__link {
            font-size: 16px;
        }
        .footer__number {
            font-size: 20px;
        }
        .footer__text {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 500px) {
        .title,
        .footer__link {
            font-size: 14px;
        }
        .footer__text {
            font-size: 10px;
        }
        .footer__number {
            text-align: center;
            font-size: 18px;
        }
    }
</style>

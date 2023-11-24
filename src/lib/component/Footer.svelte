


<footer class="footer">
    <div class="footer__container">
        <div class='footer__inner'>
            <div class='footer__block'>
                <p class='footer__subtitle'>Компания</p>
                <ul class='footer__menu'>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                </ul>
            </div>
            <div class='footer__block'>
                <p class='footer__subtitle'>Компания</p>
                <ul class='footer__menu'>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                    <li class='footer__link'>link</li>
                </ul>
            </div>
            <div class='footer__block'>
                <div class='footer__network'>
                    <p class='footer__subtitle'>Следите за нами: </p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt=''>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png' alt=''>
                </div>
                <div class='footer__subscription'>
                    <p class='footer__subtitle'>Будьте в курсе наших акций и интересных событий:</p>
                    <input class="input" type='text'>
                    <label class="footer__text"><input type='checkbox'>ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ МОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ</label>
                    <p class='footer__number'>+375 xx xx-xx-xx</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer__container {
        padding: 20px;
        background: #24b3ff;
    }
    .footer__inner {
        display: flex;
        gap: 20px;
        justify-content: space-around;
    }
    .footer__block {
        max-width: 600px;
    }
    .footer__subtitle {
        /* margin-bottom: 10px; */
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        color: #f5f5f5;
    }
    .footer__menu {
        display: flex;
        flex-direction: column;
    }
    .footer__link {
        text-transform: uppercase;
        font-weight: 700;
        color: #d7d7d7;
        cursor: pointer;
    }
    .footer__link:hover {
        color: #f5f5f5;
    }
    .footer__network {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 20px;
    }
    .footer__subscription {
        display: flex;
        flex-direction: column;
        /* gap: 15px; */
    }
    .input {
        display: block;
        width: 100%;
        padding: 10px;
    }
    .footer__text {
        display: flex;
        font-weight: 700;
        font-size: 12px;
        color: #f5f5f5;
    }
    .footer__number {
        font-weight: 700;
        font-size: 20px;
        color: #f5f5f5;
    }
    img {
        width: 30px;
        height: 30px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>

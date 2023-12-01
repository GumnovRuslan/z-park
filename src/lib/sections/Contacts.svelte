    <div class='contacts'>
        <div class='map-container'>
            <img src='img/map.png' alt='' class='map'>
        </div>
        <div class='info-container'>
            <div class='contacts__info'>
                <div class='contact'>
                    <img src='img/svg/geo-alt-fill.svg' alt='' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш адрес</p>
                        <p class='contact__text'>проспект Фрунзе, 81к33, Витебск</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='img/svg/telephone-fill.svg' alt='' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш телефон</p>
                        <p class='contact__text'>+ 375 ХХ ХХХ ХХ ХХ</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='img/svg/clock.svg' alt='' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Время работы</p>
                        <p class='contact__text'>11:00 - 20:00 каждый день</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='img/svg/envelope-fill.svg' alt='' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наша почта</p>
                        <p class='contact__text'>z_park_vitebsk</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='img/svg/star-fill.svg' alt='' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Мы в соц. сетях</p>
                        <p class='contact__text'>Вконтакте</p>
                        <p class='contact__text'>Youtube</p>
                        <p class='contact__text'>Instagram</p>
                        <p class='contact__text'>TikTok</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<style>
    .contacts {
        display: flex;
        justify-content: space-between;
    }
    .map-container {
        display: flex;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #9d9d9d;
        box-shadow: 2px 2px 10px #9d9d9d;
    }
    .map {
        object-position: center;
        object-fit: cover;
        width: 100%;
    }
    .info-container {
        flex: auto;
        display: flex;
        justify-content: center;
    }
    .contacts__info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 20px;
    }
    .contact {
        display: flex;
        gap: 10px;
        border: 1px solid #dadada;
        padding: 20px;
        box-shadow: 1px 1px 4px #c3c3c3;
        border-radius: 10px;
    }
    .contact__img {
        width: 30px;
        height: 30px;
    }
    .contact__title {
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.3;
    }
    .contact__text {
        line-height: 1.3;
    }
    @media screen and (min-width: 700px) {
        .map-container {
            width: 60vw;
            max-width: 1000px;
            height: 60vw;
            max-height: 700px;
        }
        .contact__title {
            font-size: clamp(16px, 2vw, 24px);
        }
        .contact__text {
            font-size: clamp(14px, 2vw, 22px);
        }
        .contacts {
            gap: 30px;
        }
    }

    @media screen and (max-width: 700px) {
        .contacts {
            flex-direction: column;
        }
        .map-container {
            width: 100%;
            height: 70vh;
        }
        .contact__title {
            font-size: 20px;
        }
        .contact__text {
            font-size: 18px;
        }
        .contacts {
            gap: 50px;
        }
    }
</style>

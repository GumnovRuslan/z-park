<script>
    import { tiktokIcon } from '../../icons.js';
</script>    
    
    <div class='section'>
        <div class='map-container'>
            <iframe class="map" title="Карта проеза" src="https://yandex.ru/map-widget/v1/?um=constructor%3A71ee2e09dadbd3203e4be47e8293f949882418d105163100975773b6db314274&amp;source=constructor"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <!-- <iframe class="map" title="Карта проеза" src="https://yandex.ru/map-widget/v1/?ll=30.252189%2C55.192309&pt=30.251854,55.191678,pm2rdm&z=17" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            <!-- <iframe class="map" title="Карта проеза" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.492641089302!2d30.2506870761861!3d55.192144005344325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c577f44c596ec1%3A0x79a93b31af3970bb!2zWi3Qn9CQ0KDQmg!5e0!3m2!1sru!2sru!4v1726220603404!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        </div>

        <div class='contacts'>
                <div class='contact'>
                    <img src='/svg/address.svg' alt='Картинка адреса' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш адрес</p>
                        <p class='contact__text'>ТЦ "ЭВИКОМ</p>
                        <p class='contact__text'>проспект Фрунзе 81к33, Витебск</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/telephone-fill.svg' alt='Картинка телефон' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш телефон</p>
                        <a href="tel:+375 29 711-71-14" class='contact__text'>+375 29 711-71-14</a>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/clock.svg' alt='Картинка время' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Время работы</p>
                        <p class='contact__text'>Пн-Пт 11:00-21:00</p>
                        <p class='contact__text'>Сб-Вс 10:00-21:00</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/envelope-fill.svg' alt='Картинка емаил' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наша почта</p>
                        <a href="mailto:zparkvitebsk2018@gmail.com" class='contact__text'>zparkvitebsk2018@gmail.com</a>
                    </div>
                </div>
                <div class='contact contact--network'>
                    <img src='/svg/star-fill.svg' alt='Картинка' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Мы в соц. сетях</p>
                        <a href="https://www.instagram.com/zpark_vitebsk/" target="_blank" class='contact__text'>
                            <img src='/svg/instagram.svg' alt='Картинка инстаграм' class='contact__img-network'>
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/@zpark_vitebsk" target="_blank" class='contact__text'>
                            <span class="contact__icon">
                                {@html tiktokIcon}
                            </span>
                            Tiktok
                        </a>
                        <a href="https://vk.com/z_park_vitebsk" target="_blank" class='contact__text'>
                            <img src='/svg/vk.svg' alt='Картинка вконтакте' class='contact__img-network'>
                            Вконтакте
                        </a>
                        <a href="https://www.youtube.com/channel/UCRRIZbUwBzzHOlL6ezvpHrg" target="_blank" class='contact__text'>
                            <img src='/svg/youtube.svg' alt='Картинка ютуб' class='contact__img-network'>
                            Youtube
                        </a>
                    </div>
                </div>
        </div>
    </div>

<style>
    .section {
        display: flex;
        justify-content: center;
        gap: clamp(30px, 4vw, 50px);
    }
    .map-container {
        position: relative;
        align-self: center;
        display: flex;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #DADADA;
        border-radius: 10px;
    }

    .map {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .contact {
        display: flex;
        gap: 10px;
        border: 1px solid #DADADA;
        padding: clamp(10px, 1.5vw, 20px);
        border-radius: 10px;
        background: #fff;
    }

    .contact__img {
        padding: 1px;
        width: 21px;
        height: 21px;
    }
    .contact__content {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .contact__title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.3;
    }
    .contact__text {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.3;
        text-decoration: none;
        color: #606060;
    }
    
    .contact__img-network {
        width: 20px;
        height: 20px;
    }

    .contact__icon {
        width: 18px;
        height: 18px;
        color: black;
    }
    @media screen and (min-width: 700px) {
        .map-container {
            width: 60vw;
            max-width: 1000px;
            height: 60vw;
            max-height: 700px;
        }
    }

    @media screen and (max-width: 700px) {
        .section {
            flex-direction: column;
        }
        .map-container {
            width: 100%;
            height: 50vh;
            max-height: 400px;
        }
        .contacts {
            max-width: 500px;
            width: 100%;
            margin: 0 auto
        }
        .contact--network > img {
            display: none;
        }
    }
</style>

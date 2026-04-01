<script>
  import { tiktokIcon } from '../../icons.js';
</script>

<div class='footer__container'>
    <div class='footer-top'>
            <div class='footer-top__logo'>
                <a href='/' class='footer-top__logo-link'>
                    <img src='/img/logo-removebg-cut.webp' class='footer-top__logo-img' alt='logo'>
                </a>
            </div>
            <div class='footer-top__content'>
                <a href='/rules' class='footer-top__link'>Правила посещения</a>
                <a href='/privacy-policy' class='footer-top__link'>Политика конфиденциальности</a>
                <div class="footer-top__networks">
                  <a href="https://www.instagram.com/zpark_vitebsk/" target="_blank" class='footer__icon'>
                      <img src='/svg/instagram.svg' alt='Картинка инстаграм' class='footer__img-network'>
                  </a>
                  <a href="https://www.tiktok.com/@zpark_vitebsk" target="_blank" class='footer__icon'>
                      <!-- <span class="footer__icon"> -->
                          {@html tiktokIcon}
                      <!-- </span> -->
                  </a>
                  <a href="https://vk.com/z_park_vitebsk" target="_blank" class='footer__icon'>
                      <img src='/svg/vk.svg' alt='Картинка вконтакте' class='footer__img-network'>
                  </a>
                  <a href="https://www.youtube.com/channel/UCRRIZbUwBzzHOlL6ezvpHrg" target="_blank" class='footer__icon'>
                      <img src='/svg/youtube.svg' alt='Картинка ютуб' class='footer__img-network'>
                  </a>
                </div>
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
            <p class='footer-bottom__copy'>Все права защищены © 2018-{new Date().getFullYear()} ООО "Парки развлечений"</p>
        </div>
</div>


<style lang="scss">
  .footer {
    &__container {
      padding: 30px clamp(10px, 4vw, 100px);
      background: white;
    }

    &-top__networks {
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 15px;
      margin-top: 10px;
    }

    &__icon {
      color: black;
      width: 20px;
      height: 20px;
    }

    &__img-network {
      width: 20px;
      height: 20px;
    }
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 85%;
    margin: 0 auto 50px auto;

    &__logo {
      flex: 100%;
    }

    &__logo-link {
      display: block;
      width: 140px;
      padding: 0 10px;
    }

    &__logo-img {
      width: 100%;
      height: 100%;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: clamp(0px, 1vw, 16px) 0; 

      &:nth-child(2) {
        // justify-content: end;
      }
    }

    &__link {
        min-width: 150px;
        padding: 5px 10px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        color: #000;
        transition: all 0.2s;
    }
  }
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
      border-top: 1px solid #f5f5f5;

      &__copy {
        text-align: center;
        font-size: 14px;
        color: #1F1F1F
      }
    }
</style>
